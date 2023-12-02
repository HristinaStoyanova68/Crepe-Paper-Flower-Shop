import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import CopyRight from "./components/footer/CopyRight";
import HomePage from './components/home-page/HomePage';
import HeaderSection from './components/header-section/HeaderSection';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import Collections from './components/collections/Collections';
import ItemDetails from './components/item-details/ItemDetails';
import ItemCreate from './components/item-create/ItemCreate';
import ItemEdit from './components/item-edit/ItemEdit';
import AuthGuard from './components/guards/AuthGuard';
import ItemRemove from './components/item-remove/ItemRemove';

function App() {

    return (
        <AuthProvider>
            <div className="banner_bg_main">
                <Navbar />

                <HeaderSection />

                <Routes>
                    <Route path={Path.Home} element={<HomePage />} />
                    <Route path={Path.Collection_Bouquets} element={<Collections />} />
                    <Route path={Path.Collection_Decorations} element={<Collections />} />
                    <Route path={Path.Collection_Gift_Boxes} element={<Collections />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.ItemDetails} element={<ItemDetails />} />

                    <Route element={<AuthGuard />}>
                        <Route path={Path.ItemCreate} element={<ItemCreate />} />
                        <Route path={Path.ItemEdit} element={<ItemEdit />} />
                        <Route path={Path.ItemRemove} element={<ItemRemove />} />
                        <Route path={Path.Logout} element={<Logout />} />
                    </Route>
                </Routes>
            </div>

            <Footer />

            <CopyRight />
        </AuthProvider>
    );
}

export default App;
