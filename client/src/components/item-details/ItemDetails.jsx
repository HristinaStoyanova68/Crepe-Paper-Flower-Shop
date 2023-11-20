
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import styles from './ItemDetails.module.css';

import * as itemService from '../../services/itemsService';

export default function ItemDetails() {
    const [item, setItem] = useState({});
    const { collectionName, itemId } = useParams();

useEffect(() => {
    itemService.getItem(collectionName, itemId)
        .then(setItem)
            .catch(err => console.log(err))
}, [itemId]);   

// const item = {};

    return (
        <section className={styles.details}>
            <div className={styles["details-wrapper"]}>
                <img className={styles["details-img"]} src={item.imageUrl} alt="example1" />
                <p className={styles["details-category"]}>{item.collectionName}</p>
                <div className={styles["info-wrapper"]}>
                    <div className={styles["details-description"]}>
                        <p className={styles["description"]}>
                        {item.name}
                        </p>
                        <p className={styles["more-info"]}>
                        {item.description}
                        </p>
                    </div>

                    <h3>Price:<span className={styles.likes}> £{item.price}</span></h3>

                    {/* <!--Edit and Delete are only for creator--> */}
                    <div className={styles["action-buttons"]}>
                        <Link to="/edit" className={styles["edit-btn"]}>Edit</Link>
                        <Link to="/remove" className={styles["delete-btn"]}>Delete</Link>

                        {/* <!--Bonus - Only for logged-in users ( not authors )--> */}
                        <Link to="/like" className={styles["like-btn"]}>Like</Link>

                    </div>
                </div>
            </div>
        </section>
    );
}