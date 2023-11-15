import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import HomePage from './components/HomePage';
import HeaderSection from './components/HeaderSection';
import Collections from './components/Collections';

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
        </Routes>
      </div>

      

      <Footer />

      <CopyRight />
    </>
  );
}

export default App;
