export default function CategoriesDropdown() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Bouquets</a>
                <a className="dropdown-item" href="#">Decoration</a>
                <a className="dropdown-item" href="#">Gift Boxes</a>
            </div>
        </div>
    );
}  