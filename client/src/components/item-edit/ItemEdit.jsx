import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './ItemEdit.module.css';

import * as itemService from '../../services/itemsService';
import { pathToUrl } from '../../utils/pathUtils';
import Path from '../../paths';

const editFormKeys = {
    CollectionName: 'collectionName',
    Name: 'name',
    Price: 'price',
    ImageUrl: 'imageUrl',
    Description: 'description',
}

export default function ItemEdit() {
    const navigate = useNavigate();
    // const [item, setItem] = useState({});
    const { collectionName, itemId } = useParams();
    console.log(collectionName);
    console.log(itemId);
    const [item, setItem] = useState({
        [editFormKeys.CollectionName]: '',
        [editFormKeys.Name]: '',
        [editFormKeys.Price]: '',
        [editFormKeys.ImageUrl]: '',
        [editFormKeys.Description]: '',
    })

    useEffect(() => {
        itemService.getItem(collectionName, itemId)
            .then(result => {
                setItem(result);
            })
            .catch(err => console.log(err));
    }, [itemId]);

    const editItemSubmitHandler = async(e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await itemService.edit(collectionName, itemId, values);

            navigate(pathToUrl(Path.ItemDetails, { collectionName, itemId }));
        } catch (err) {
            console.log(err);           
        }
    };

    const onChange = (e) => {
        setItem(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        // <!-- Create Page (Only for logged-in users) -->
        <section className="edit">
            <div className={styles.form}>
                <h2>Edit Item</h2>
                <form className={styles["edit-form"]} onSubmit={editItemSubmitHandler}>
                    <input
                        type="text"
                        name="collectionName"
                        placeholder="collectionName"
                        value={item[editFormKeys.CollectionName]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={item[editFormKeys.Name]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="price"
                        value={item[editFormKeys.Price]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={item[editFormKeys.ImageUrl]}
                        onChange={onChange}
                    />
                    <textarea
                        name="description"
                        placeholder="description"
                        rows="10"
                        cols="50"
                        value={item[editFormKeys.Description]}
                        onChange={onChange}
                    ></textarea>
                    <button type="submit">Post</button>
                </form>
            </div>
        </section>
    );
}