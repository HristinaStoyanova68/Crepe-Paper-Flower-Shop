import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

import styles from './Navbar.module.css';
import Path from '../../paths';

export default function Navbar() {
    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

    return (
        <div className="container">
            <div className={styles["header_section_top"]}>
                <div className={styles["home_logo"]}>
                    <Link to={Path.Home}><img src="images/logo_HSflowers.jpg" alt="logoImage" /></Link>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className={styles["custom_menu"]}>
                            <ul>
                                <li><Link to={Path.NewReleases}>New Releases</Link></li>
                                {isAuthenticated &&
                                    <>
                                        <li><Link to="/create">Create</Link></li>
                                        <li><Link to="/logout">Logout</Link></li>
                                        <span >/ {username}</span>
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