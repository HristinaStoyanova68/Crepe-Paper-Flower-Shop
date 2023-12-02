import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import * as itemsService from '../../services/itemsService';
import styles from './Collections.module.css';

export default function Collections() {
    const [collection, setCollection] = useState([]);
    const [currCollectionName, setCollectionName] = useState('');

    const locationName = useLocation().pathname;
    // console.log(locationName);

    useEffect(() => {
        itemsService.getCollection(locationName)
            .then(data => {
                setCollection(Object.values(data))
            })
            .catch(err => console.log(err))
    }, [locationName]);


    useEffect(() => {
        setCollectionName(c => c = collection[0]?.collectionName);
    }, [collection]);

    return (
        <div className={styles["fashion_section"]}>

            <h1 className={styles["fashion_taital"]}>{currCollectionName}</h1>

            <div id="main_slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">

                    {collection.map((item, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item._id}>
                            <div className="container">
                                <div className={styles["fashion_section_2"]}>
                                    <div className="row" style={{justifyContent: 'center'}}>
                                        <div className="col-lg-4 col-sm-4" style={{maxHeight: '353px'}}>
                                            <div className={styles["box_main"]}>
                                                <h4 className={styles["shirt_text"]}>{item.name}</h4>
                                                <div className={styles["tshirt_img"]}><img src={item.imageUrl} /></div>
                                                <div className={styles["btn_main"]}>
                                                    <div className={styles["seemore_bt"]}><Link to={`${locationName}/${item._id}/details`}>See More</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                </a>
                <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                </a>
            </div>
        </div>
    );
}