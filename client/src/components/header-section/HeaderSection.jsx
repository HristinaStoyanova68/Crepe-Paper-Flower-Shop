import CategoriesDropdown from './CategoriesDropdown';
import LogoSection from './LogoSection';
// import SearchItem from './SearchItem';
import UserMenu from './UserMenu';

import styles from './HeaderSection.module.css';

export default function HeaderSection() {

    // const openNav = () => {
    //     //TODO
    // }

    // const closeNav = () => {
    //     //TODO
    // }

    return (
        <>
            <LogoSection />
            <div className={styles["header_section"]}>
                <div className="container">
                    <div className={styles["containt_main"]}>

                        <CategoriesDropdown />

                        {/* <SearchItem /> */}

                        <UserMenu />

                    </div>
                </div>
            </div>
        </>
    );
}