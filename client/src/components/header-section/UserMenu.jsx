export default function UserMenu() {
    return (
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
    );
}