import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import * as itemsService from '../../services/itemsService';

export default function Collections() {
    const [collection, setCollection] = useState([]);
    const [currCollectionName, setCollectionName] = useState('');

    const locationName = useLocation().pathname;
    console.log(locationName);

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
        <div className="fashion_section">

            <h1 className="fashion_taital">{currCollectionName}</h1>

            <div id="main_slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">

                    {collection.map((item, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item._id}>
                            <div className="container">
                                <div className="fashion_section_2">
                                    <div className="row" style={{justifyContent: 'center'}}>
                                        <div className="col-lg-4 col-sm-4" style={{maxHeight: '353px'}}>
                                            <div className="box_main">
                                                <h4 className="shirt_text">{item.name}</h4>
                                                <p className="price_text">Price  <span style={{ color: '#262626' }}>£ {item.price}</span></p>
                                                <div className="tshirt_img"><img src={item.imageUrl} /></div>
                                                <div className="btn_main">
                                                    <div className="buy_bt"><Link to="#">Buy Now</Link></div>
                                                    <div className="seemore_bt"><Link to={`${locationName}/${item._id}/details`}>See More</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                        </div>
                        //   <CategoryItem
                        //      key={item._id}
                        //      {...item}
                        //   />
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