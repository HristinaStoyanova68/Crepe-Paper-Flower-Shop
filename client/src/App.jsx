import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";
import HomePage from './components/HomePage';
import HeaderSection from './components/HeaderSection';
// import Bouquets from "./components/Bouquets";
// import Decoration from "./components/Decoration";
// import GiftBoxes from "./components/GiftBoxes";

function App() {

  return (

    <>
      <div className="banner_bg_main">
        <Navbar />

        <HeaderSection />


        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>

      <Footer />

      <CopyRight />
    </>
  );
}

export default App;
