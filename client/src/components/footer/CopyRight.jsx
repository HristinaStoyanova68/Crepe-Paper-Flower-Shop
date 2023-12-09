
import styles from './CopyRight.module.css';

export default function CopyRight() {
    return (
        <div className={styles["copyright_section"]}>
         <div className="container">
            <p className={styles["copyright_text"]}>© 2023, HRISTINA STOYANOVA</p>
         </div>
      </div>
    );
}