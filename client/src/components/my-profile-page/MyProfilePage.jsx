import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as itemService from '../../services/itemsService';
import AuthContext from "../../contexts/authContext";
import convertCollectionName from "../../utils/convertCollectionName";

import styles from './MyProfilePage.module.css';

export default function MyProfilePage() {
    const [items, setItems] = useState([]);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        itemService.getOwnerItems(userId)
            .then(result => setItems(result))
            .catch(error => {
                throw error;
            });
    }, []);

    return (
        <div className={styles["collection_section"]}>
            {items.length > 0 &&
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {items.map((item, index) => {
                            const collectionName = convertCollectionName(item.collectionName);

                            return (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item._id} style={{ minHeight: "50vh" }}>
                                    <div className="container">
                                        <div className={styles["collection_section_2"]}>
                                            <div className="row" style={{ justifyContent: 'center' }}>
                                                <div className="col-lg-4 col-sm-4" style={{ maxHeight: '353px' }}></div>
                                                <div className={styles["box_main"]}>
                                                    <h4 className={styles["item_text"]}>{item.name}</h4>
                                                    <div className={styles["item_img"]}><img src={item.imageUrl} /></div>
                                                    <div className={styles["btn_main"]}>
                                                        <div className={styles["seemore_bt"]}><Link to={`/${collectionName}/${item._id}/details`}>See More</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </div>
                    <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            }
            {!items.length &&
                <p>Your list is empty. Add new item please!</p>
            }
        </div>
    );
};