import { Link } from "react-router-dom";
import Path from "../../paths";

import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={`${styles["footer_section"]} ${styles["layout_padding"]}`}>
         <div className="container" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div className={styles["footer_logo"]}><Link to={Path.Home}>hristina&apos;s craft world</Link></div>
            
            <div className={styles["footer_menu"]}>
               <ul>
                  <li><Link to={Path.AboutUs}>About Us</Link></li>
                  <li><Link to={Path.ContactUs}>Contact Us</Link></li>
               </ul>
            </div>
         </div>
      </div>
    );
}