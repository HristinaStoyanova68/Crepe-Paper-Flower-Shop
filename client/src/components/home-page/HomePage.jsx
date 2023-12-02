import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="banner_section layout_padding">
            <div className="container">
                <div id="my_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className="banner_taital">bouquets<br />collection</h1>
                                    <div className="buynow_bt"><Link to="/bouquets">View</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className="banner_taital">decoration<br />collection</h1>
                                    <div className="buynow_bt"><Link to="/decorations">View</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className="banner_taital">gift boxes<br />collection</h1>
                                    <div className="buynow_bt"><Link to="/gift_boxes">View</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}