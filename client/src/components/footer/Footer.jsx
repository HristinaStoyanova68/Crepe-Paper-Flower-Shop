import { Link } from "react-router-dom";
import Path from "../../paths";

export default function Footer () {
    return (
        <div className="footer_section layout_padding">
         <div className="container" style={{display: "flex", justifyContent: "space-between"}}>
            <div className="footer_logo"><Link to={Path.Home}>hristina&apos;s craft world</Link></div>
            
            <div className="footer_menu">
               <ul>
                  <li><Link to={Path.NewReleases}>New Releases</Link></li>
                  <li><Link to={Path.AboutUs}>About Us</Link></li>
                  <li><Link to={Path.ContactUs}>Contact Us</Link></li>
               </ul>
            </div>
         </div>
      </div>
    );
}