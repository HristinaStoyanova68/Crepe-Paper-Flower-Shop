import { Link } from "react-router-dom";

import styles from './CopyRight.module.css';

export default function CopyRight() {
    return (
        <div className={styles["copyright_section"]}>
         <div className="container">
            <p className={styles["copyright_text"]}>© 2020 All Rights Reserved. Design by <Link to="https://html.design">Free html  Templates</Link></p>
         </div>
      </div>
    );
}