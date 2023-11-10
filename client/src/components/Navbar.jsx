export default function Navbar() {
    return (
            <div className="container">
                <div className="header_section_top">
                    <div className="home_logo">
                        {/* <img src="" alt="logoImage" /> */}
                        <p>Home</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="custom_menu">
                                <ul>
                                    <li><a href="#">Best Sellers</a></li>
                                    <li><a href="#">New Releases</a></li>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Register</a></li>
                                    <li><a href="#">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}