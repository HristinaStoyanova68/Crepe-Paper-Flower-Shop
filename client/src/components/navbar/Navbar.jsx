import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';



export default function Navbar() {
    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

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
                                <li><Link to="#">Best Sellers</Link></li>
                                <li><Link to="#">New Releases</Link></li>
                                {isAuthenticated &&
                                    <>
                                        <li><Link to="/create">Create</Link></li>
                                        <li><Link to="/logout">Logout</Link></li>
                                        <span>| {username}</span>
                                    </>
                                }

                                {!isAuthenticated &&
                                    <>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}