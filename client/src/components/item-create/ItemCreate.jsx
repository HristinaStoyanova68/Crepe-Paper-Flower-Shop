import { useNavigate } from 'react-router-dom';

import styles from './ItemCreate.module.css';

import * as itemService from '../../services/itemsService';
import useForm from '../../hooks/useForm';
import Path from '../../paths';

const createFormKeys = {
    collectionName: 'collectionName',
    name: 'name',
    price: 'price',
    imageUrl: 'imageUrl',
    description: 'description',
}

export default function ItemCreate() {
    const navigate = useNavigate();

    const createItemSubmitHandler = async (values) => {

        const collectionName = values.collectionName;

        try {
            await itemService.create(collectionName, values);
            navigate(Path.Home);
        } catch (err) {
            console.log(err);
        }
    }

    const {values, onChange, onSubmit} = useForm(createItemSubmitHandler, {
        [createFormKeys.collectionName]: '',
        [createFormKeys.name]: '',
        [createFormKeys.price]: '',
        [createFormKeys.imageUrl]: '',
        [createFormKeys.description]: '',

    });

    return (

        // <!-- Create Page (Only for logged-in users) -->
        <section className="create">
            <div className={styles.form}>
                <h2>Add Item</h2>
                <form className={styles["create-form"]} onSubmit={onSubmit}>
                    <input
                        type="text"
                        name="collectionName"
                        placeholder="collectionName"
                        value={values[createFormKeys.collectionName]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={values[createFormKeys.name]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="price"
                        value={values[createFormKeys.price]}
                        onChange={onChange}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={values[createFormKeys.imageUrl]}
                        onChange={onChange}
                    />
                    <textarea
                        name="description"
                        placeholder="description"
                        rows="10"
                        cols="50"
                        value={values[createFormKeys.description]}
                        onChange={onChange}
                    ></textarea>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </section>
    );
}