import CategoriesDropdown from './CategoriesDropdown';
import LogoSection from './LogoSection';
import SearchItem from './SearchItem';
import UserMenu from './UserMenu';

export default function HeaderSection() {

    const openNav = () => {
        //TODO
    }

    const closeNav = () => {
        //TODO
    }

    return (

        <>

            <LogoSection />

            <div className="header_section">
                <div className="container">
                    <div className="containt_main">

                        <CategoriesDropdown />

                        <SearchItem />
                        
                        <UserMenu />
                        
                    </div>
                </div>
            </div>
        </>
    );
}