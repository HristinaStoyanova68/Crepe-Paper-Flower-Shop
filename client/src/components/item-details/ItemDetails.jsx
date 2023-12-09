
import { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from './ItemDetails.module.css';

import * as itemService from '../../services/itemsService';
import * as likeService from '../../services/likeService';
import AuthContext from '../../contexts/authContext';
import { pathToUrl } from '../../utils/pathUtils';
import Path from '../../paths';

export default function ItemDetails() {
    const [item, setItem] = useState({});
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const { collectionName, itemId } = useParams();
    const { userId, isAuthenticated } = useContext(AuthContext);  
    const isOwner = item._ownerId === userId;  

    useEffect(() => {
        itemService.getItem(collectionName, itemId)
            .then(setItem)
            .catch(error => {
                throw error;
            });           
    }, [itemId]);

    useEffect(() => {
        likeService.allLikes(itemId)
        .then(result => {
            setLikeCount(result.length);

            if (result.find(x => x._ownerId === userId)) {
                setLike(true);
            }
        })
        .catch(error => {
            throw error;
        });
    }, [like]);

    const likeHandler = async () => {
        try {
            await likeService.like(itemId);
    
            setLike(true);
        } catch (error) {
            setLike(false);
            throw error;
        }
    }
    
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
                        <p className={styles["more-info"]}>
                            Likes: {likeCount}
                        </p>
                    </div>

                    <div className={styles["action-buttons"]}>
                    {isAuthenticated && isOwner &&
                            <>
                                <Link to={pathToUrl(Path.ItemEdit, { collectionName, itemId })} className={styles["edit-btn"]}>Edit</Link>
                                <Link to={pathToUrl(Path.ItemRemove, { collectionName, itemId })} className={styles["delete-btn"]}>Delete</Link>
                            </>
                        } 
                    
                        {isAuthenticated && !like && !isOwner &&

                            <>
                                <button className={styles["like-btn"]} onClick={likeHandler}>Like</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}