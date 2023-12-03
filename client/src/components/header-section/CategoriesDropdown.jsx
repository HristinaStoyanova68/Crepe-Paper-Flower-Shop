import { Link } from 'react-router-dom';
import Path from '../../paths';

import '../../App.module.css';
import styles from './CategoriesDropdown.module.css';

export default function CategoriesDropdown() {
    return (
        <div className={styles["dropdown"]}>
            <button className={`btn ${styles["btn-secondary"]} ${styles["dropdown-toggle"]}`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to={Path.Collection_Bouquets}>Bouquets</Link>
                <Link className="dropdown-item" to={Path.Collection_Decorations}>Decoration</Link>
                <Link className="dropdown-item" to={Path.Collection_Gift_Boxes}>Gift Boxes</Link>
            </div>
        </div>
    );
}  