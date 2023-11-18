import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import HomePage from './components/HomePage';
import HeaderSection from './components/HeaderSection';
import Collections from './components/Collections';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {

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
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>

      

      <Footer />

      <CopyRight />
    </>
  );
}

export default App;
