import { Link } from 'react-router-dom';
import Path from '../../paths';

export default function CategoriesDropdown() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to={Path.Collection_Bouquets}>Bouquets</Link>
                <Link className="dropdown-item" to={Path.Collection_Decorations}>Decoration</Link>
                <Link className="dropdown-item" to={Path.Collection_Gift_Boxes}>Gift Boxes</Link>
            </div>
        </div>
    );
}  