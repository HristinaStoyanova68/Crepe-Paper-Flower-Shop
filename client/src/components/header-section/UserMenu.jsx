import { Link } from 'react-router-dom';
import Path from '../../paths';

import styles from './UserMenu.module.css';

export default function UserMenu() {
    return (
        <div className={styles["header_box"]}>

            <div className={styles["login_menu"]}>
                <Link to={Path.MyProfile}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className={styles["padding_10"]}>Profile</span>
                </Link>
            </div>
        </div>
    );
}