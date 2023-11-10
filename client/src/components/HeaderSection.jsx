import CategoriesDropdown from './CategoriesDropdown';
import LogoSection from './LogoSection';
import SearchItem from './SearchItem';

export default function HeaderSection() {

    const openNav = () => {
        //TODO
    }

    const closeNav = () => {
        //TODO
    }

    return (

        <>

            <LogoSection />
            
            <div className="header_section">
                <div className="container">
                    <div className="containt_main">
                        {/* <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                        <a href="index.html">Home</a>
                        <a href="fashion.html">Fashion</a>
                        <a href="electronic.html">Electronic</a>
                        <a href="jewellery.html">Jewellery</a>
                    </div> */}
                        {/* <span className="toggle_icon" onClick={openNav}><img src="images/toggle-icon.png" /></span> */}

                        <CategoriesDropdown />

                        <SearchItem />
                        <div className="header_box">

                            <div className="login_menu">
                                <ul>
                                    <li><a href="#">
                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        <span className="padding_10">Shopping Cart</span></a>
                                    </li>
                                    <li><a href="#">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <span className="padding_10">Profile</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}