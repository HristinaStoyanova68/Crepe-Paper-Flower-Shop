import { Link } from 'react-router-dom';
import Path from '../../paths';

export default function UserMenu() {
    return (
        <div className="header_box">

            <div className="login_menu">
                <Link to={Path.MyProfile}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span className="padding_10">Profile</span>
                </Link>
            </div>
        </div>
    );
}