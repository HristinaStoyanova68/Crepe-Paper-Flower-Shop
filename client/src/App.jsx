import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import styles from './App.module.css';

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
import AboutUs from './components/footer/about-us/AboutUs';
import ContactUs from './components/footer/contact-us/ContactUs';
import MyProfilePage from './components/my-profile-page/MyProfilePage';
import ErrorBoundary from './ErrorBoundary';
import NotFoundPage from './components/not-found-page/NotFoundPage';
import NewReleases from './components/navbar/new-releases/NewReleases';

function App() {
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    }, [error]);

    const handleOnError = (error) => {
        setError(error);
    }

    return (
        <>
            <ErrorBoundary onError={handleOnError}>
                <AuthProvider>
                    <div className={styles["banner_bg_main"]}>
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
                            <Route path={Path.AboutUs} element={<AboutUs />} />
                            <Route path={Path.ContactUs} element={<ContactUs />} />
                            <Route path={Path.NewReleases} element={<NewReleases />} />

                            <Route element={<AuthGuard />}>
                                <Route path={Path.ItemCreate} element={<ItemCreate />} />
                                <Route path={Path.ItemEdit} element={<ItemEdit />} />
                                <Route path={Path.ItemRemove} element={<ItemRemove />} />
                                <Route path={Path.MyProfile} element={<MyProfilePage />} />
                                <Route path={Path.Logout} element={<Logout />} />
                            </Route>

                            <Route path={Path.NotFoundPage} element={<NotFoundPage />}/>
                            <Route path={Path.ForbiddenPaths} element={<NotFoundPage />} />
                        </Routes>
                    </div>

                    <Footer />

                    <CopyRight />
                </AuthProvider>
            </ErrorBoundary>
            {error && (
                <div>
                    <div className={styles.error}>
                        <p>{error.message}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
