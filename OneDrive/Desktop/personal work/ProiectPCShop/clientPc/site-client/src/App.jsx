import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './navBar/NavBar';
import Footer from './footer/Footer';

import Laptops from './laptopsDir/Laptops';
import Card from './components/cards/Card';
import FilterPanel from './laptopsDir/filter/FilterPanel';
function App() {
  

  return (
    <>
      <NavBar/>
      <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/laptops" element={<Laptops/>} />
        {/* <Route path="/pc-office-gaming" element={<PcOfficeGaming />} /> */}
        {/* <Route path="/components" element={<Components />} /> */}
        {/* <Route path="/periferics" element={<Periferics />} /> */}
        {/* <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/search" element={<Search />} /> */}
        
      </Routes>
    </Router>
    <FilterPanel></FilterPanel>
    {/* <Footer /> */}
    

    </>
  )
}

export default App
