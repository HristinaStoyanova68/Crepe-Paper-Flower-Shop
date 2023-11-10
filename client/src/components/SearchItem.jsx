export default function SearchItem() {
    return (
        <div className="main">

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search item..." />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" style={{ backgroundColor: '#f26522', borderColor: '#f26522' }}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}