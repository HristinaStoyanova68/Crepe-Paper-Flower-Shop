import CategoriesDropdown from './CategoriesDropdown';
import LogoSection from './LogoSection';
// import SearchItem from './SearchItem';
import UserMenu from './UserMenu';

import styles from './HeaderSection.module.css';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

export default function HeaderSection() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <LogoSection />
            <div className={styles["header_section"]}>
                <div className="container">
                    <div className={styles["containt_main"]}>

                        <CategoriesDropdown />

                        {/* <SearchItem /> */}

                        {isAuthenticated && <UserMenu />}

                    </div>
                </div>
            </div>
        </>
    );
}