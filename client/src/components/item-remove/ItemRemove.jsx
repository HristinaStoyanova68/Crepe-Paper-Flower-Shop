import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import generalStyles from '../../App.module.css';
import styles from './ItemRemove.module.css';

import * as itemService from '../../services/itemsService';
import Path from "../../paths";

export default function ItemRemove() { 
    const navigate = useNavigate();
    const {collectionName, itemId} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        itemService.getItem(collectionName, itemId)
        .then(result => {
            setItem(result);
        })
        .catch(error => {
            throw error;
        });
    }, [itemId]);

    const removeItemSubmitHandler = async(e) => {
        e.preventDefault();

        const hasConfirmed = confirm(`Are you sure you want to delete ${item.name} ?`);

        if (hasConfirmed) {
            try {
                await itemService.remove(collectionName, itemId);
    
                navigate(Path.Home);
            } catch (error) {
                navigate(Path.NotFoundPage);

                throw error;
            }
        }       
    }

    return (
        <section className={styles.remove}>
            <div className={generalStyles.form}>
                <h2>Delete Item</h2>
                <form onSubmit={removeItemSubmitHandler}>
                    <input
                        type="text"
                        name="collectionName"
                        placeholder="collectionName"
                        defaultValue={item.collectionName}
                        readOnly
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        defaultValue={item.name}
                        readOnly
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        defaultValue={item.imageUrl}
                        readOnly
                    />
                    <textarea
                        name="description"
                        placeholder="description"
                        defaultValue={item.description}
                        readOnly
                    ></textarea>
                    <button type="submit">Delete</button>
                </form>
            </div>
        </section>
    );
}