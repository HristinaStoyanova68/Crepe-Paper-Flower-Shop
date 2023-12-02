import { Link } from "react-router-dom";

export default function CopyRight () {
    return (
        <div className="copyright_section">
         <div className="container">
            <p className="copyright_text">© 2020 All Rights Reserved. Design by <Link to="https://html.design">Free html  Templates</Link></p>
         </div>
      </div>
    );
}