import { Routes, Route, useNavigate } from 'react-router-dom';

import usePersistedState from './hooks/usePersistedState';

import * as authService from './services/authService';
import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import HomePage from './components/HomePage';
import HeaderSection from './components/HeaderSection';
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
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        // navigate(Path.Home);
        navigate(-1);
    };

    const registerSubmitHandler = async (values) => {
        // console.log(values);
        const result = await authService.register(values.email, values.password);

        //TODO validations for repeating password

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate(Path.Home);
    }

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    }

    // console.log(values.userId);

    return (
        <AuthProvider value={values}>
            <div className="banner_bg_main">
                <Navbar />

                <HeaderSection />

                <Routes>
                    <Route path={Path.Home} element={<HomePage />} />
                    <Route path={Path.Collection_Bouquets} element={<Collections />} />
                    <Route path={Path.Collection_Decorations} element={<Collections />} />
                    <Route path={Path.Collection_Gift_Boxes} element={<Collections />} />
                    <Route path={Path.Login} element={<Login loginSubmitHandler={loginSubmitHandler} />} />
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
