import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


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
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (

    <>
      <div className="banner_bg_main">
        <Navbar />

        <HeaderSection />


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/bouquets' element={<Collections />} />
          <Route path='/decorations' element={<Collections />} />
          <Route path='/gift-boxes' element={<Collections />} />
          <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/:collectionName/:itemId/details' element={<ItemDetails />} />
          <Route path='/create' element={<ItemCreate />} />
          <Route path='/edit' element={<ItemEdit />} />
        </Routes>
      </div>

      

      <Footer />

      <CopyRight />
    </>
  );
}

export default App;
