import HeaderSection from './HeaderSection';
import LogoSection from './LogoSection';


export default function HomePage() {

    

    return (
        <>

            <LogoSection />

            <HeaderSection />


            <div className="banner_section layout_padding">
                <div className="container">
                    <div id="my_slider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">Get Start <br />Your favorite shopping</h1>
                                        <div className="buynow_bt"><a href="#">Buy Now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">Get Start <br />Your favriot shoping</h1>
                                        <div className="buynow_bt"><a href="#">Buy Now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">Get Start <br />Your favriot shoping</h1>
                                        <div className="buynow_bt"><a href="#">Buy Now</a></div>
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
        </>
    )
}