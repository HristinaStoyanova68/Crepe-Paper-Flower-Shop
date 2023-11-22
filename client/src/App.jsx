import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import HomePage from './components/HomePage';
import HeaderSection from './components/HeaderSection';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ItemDetails from './components/item-details/ItemDetails';
import Collections from './components/collections/Collections';
import ItemCreate from './components/item-create/ItemCreate';
import ItemEdit from './components/item-edit/ItemEdit';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        console.log(values);
        const {
            accessToken,
            email,
            username,
            _id,
        } = await authService.login(values.email, values.password);

        setAuth({
            accessToken,
            email,
            username,
            _id,
        });

        navigate(Path.Home);
    };

    const values = {
        loginSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.username,
    }

    return (
        <AuthContext.Provider value={values}>
            <div className="banner_bg_main">
                <Navbar />

                <HeaderSection />

                <Routes>
                    <Route path={Path.Home} element={<HomePage />} />
                    <Route path='/bouquets' element={<Collections />} />
                    <Route path='/decorations' element={<Collections />} />
                    <Route path='/gift-boxes' element={<Collections />} />
                    <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/:collectionName/:itemId/details' element={<ItemDetails />} />
                    <Route path='/create' element={<ItemCreate />} />
                    <Route path='/edit' element={<ItemEdit />} />
                </Routes>
            </div>

            <Footer />

            <CopyRight />
        </AuthContext.Provider>
    );
}

export default App;
