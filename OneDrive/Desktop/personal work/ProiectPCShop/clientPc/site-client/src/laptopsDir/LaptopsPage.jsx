import React, { useState } from 'react';
import NavBar from '../navBar/NavBar.jsx'; 
import FilterPanel from '../laptopsDir/filter/FilterPanel.jsx'; 
import Laptops from '../laptopsDir/Laptops.jsx'; 
import Footer from '../footer/Footer.jsx';
import LaptopReviews from '../Reviews/LaptopReviews/LaptopReviews.jsx';
const LaptopPage = () => {
  const [price, setPrice] = useState(null);
  const [laptopType, setLaptopType] = useState(null);  
  const [processorType, setProcessorType] = useState(null);
  const [videoCardType, setVideoCardType] = useState(null);

  const handleFilterChange = (newPrice, newLaptopType, newProcessorType, newVideoCardType) => {
    setPrice(newPrice || null);
    setLaptopType(newLaptopType || null);
    setProcessorType(newProcessorType || null);
    setVideoCardType(newVideoCardType || null);
  };
  

  return (
    <>
      
      <div className='body-laptop-page'>
        <FilterPanel 
          price={price} 
          laptopType={laptopType} 
          processorType={processorType}
          videoCardType={videoCardType}
          onFilterChange={handleFilterChange}
        />
        <Laptops 
          maxPrice={price} 
          laptopType={laptopType} 
          processorType={processorType} 
          videoCardType={videoCardType}
        />
      </div>
      <Footer />
    </>
  );
};

export default LaptopPage; 
