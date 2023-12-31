import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import generalStyles from '../../App.module.css';
import styles from './ItemEdit.module.css';

import * as itemService from '../../services/itemsService';
import { pathToUrl } from '../../utils/pathUtils';
import Path from '../../paths';

const editFormKeys = {
    CollectionName: 'collectionName',
    Name: 'name',
    ImageUrl: 'imageUrl',
    Description: 'description',
}

export default function ItemEdit() {
    const navigate = useNavigate();
    const { collectionName, itemId } = useParams();
    const [item, setItem] = useState({
        [editFormKeys.CollectionName]: '',
        [editFormKeys.Name]: '',
        [editFormKeys.ImageUrl]: '',
        [editFormKeys.Description]: '',
    })

    useEffect(() => {
        itemService.getItem(collectionName, itemId)
            .then(result => {
                setItem(result);
            })
            .catch(error => {
                throw error;
            });
    }, [itemId]);

    const editItemSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await itemService.edit(collectionName, itemId, values);

            navigate(pathToUrl(Path.ItemDetails, { collectionName, itemId }));
        } catch (error) {
            throw error;
        }
    };

    const onChange = (e) => {
        setItem(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    return (
            <section className={styles.edit}>
                <div className={generalStyles.form}>
                    <h2>Edit Item</h2>
                    <form onSubmit={editItemSubmitHandler}>
                        <input
                            name="collectionName"
                            value={item[editFormKeys.CollectionName]}
                            onChange={onChange}
                            readOnly
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
                            name="imageUrl"
                            placeholder="Image URL"
                            value={item[editFormKeys.ImageUrl]}
                            onChange={onChange}
                        />
                        <textarea
                            name="description"
                            placeholder="description"
                            value={item[editFormKeys.Description]}
                            onChange={onChange}
                        ></textarea>
                        <button type="submit">Post</button>
                    </form>
                </div>
            </section>
    );
}