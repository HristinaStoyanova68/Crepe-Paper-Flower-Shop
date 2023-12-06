import { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import convertCollectionName from "../../../utils/convertCollectionName";

import * as itemService from '../../../services/itemsService';

import styles from './NewReleases.module.css';

export default function NewReleases() {
    const [newReleases, setNewReleases] = useState([]);

    useEffect(() => {
        itemService.getAll()
        .then(result => {
            const sortedNewReleases = result.sort((a, b) => a._createdOn - b._createdOn).slice(-3).reverse();
            setNewReleases(state => state = [...sortedNewReleases]);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className={styles["collection_section"]}>
            {newReleases.length > 0 &&
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {newReleases.map((newRelease, index) => {
                            const collectionName = convertCollectionName(newRelease.collectionName);

                            return (
                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={newRelease._id} style={{ minHeight: "50vh" }}>
                                    <div className="container">
                                        <div className={styles["collection_section_2"]}>
                                            <div className="row" style={{ justifyContent: 'center' }}>
                                                <div className="col-lg-4 col-sm-4" style={{ maxHeight: '353px' }}></div>
                                                <div className={styles["box_main"]}>
                                                    <h4 className={styles["item_text"]}>{newRelease.name}</h4>
                                                    <div className={styles["item_img"]}><img src={newRelease.imageUrl} /></div>
                                                    <div className={styles["btn_main"]}>
                                                        <div className={styles["seemore_bt"]}><Link to={`/${collectionName}/${newRelease._id}/details`}>See More</Link></div>
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
            {!newReleases.length &&
                <p>Sorry, no items to display...</p>
            }
        </div>
    );
}