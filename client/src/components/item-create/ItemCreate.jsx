import { useNavigate } from 'react-router-dom';

import styles from './ItemCreate.module.css';

import * as itemService from '../../services/itemsService';

export default function ItemCreate() {
    const navigate = useNavigate();

    const createItemSubmitHandler = async (e) => {
        e.preventDefault();

        const itemData = Object.fromEntries(new FormData(e.currentTarget));

        const collectionName = itemData.collectionName;

        try {
            await itemService.create(collectionName, itemData);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    }
    return (

        // <!-- Create Page (Only for logged-in users) -->
        <section className="create">
            <div className={styles.form}>
                <h2>Add Item</h2>
                <form className={styles["create-form"]} onSubmit={createItemSubmitHandler}>
                    <input
                        type="text"
                        name="collectionName"
                        placeholder="collectionName"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                    />
                    <input
                        type="text"
                        name="price"
                        placeholder="price"
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                    />
                    <textarea
                        name="description"
                        placeholder="description"
                        rows="10"
                        cols="50"
                    ></textarea>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </section>
    );
}