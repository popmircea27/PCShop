import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../navBar/NavBar";
import Card from '../components/cards/Card';
import laptop1 from "../laptopsDir/laptopAssets/laptop1.png";
import laptop2 from "../laptopsDir/laptopAssets/laptop2.png";
import laptop3 from "../laptopsDir/laptopAssets/laptop3.png";
import laptop4 from "../laptopsDir/laptopAssets/laptop4.png";
import laptop5 from "../laptopsDir/laptopAssets/laptop5.png";
import "../laptopsDir/laptopStyles.css";
const Laptops = () => {
  const [laptops, setLaptops] = useState([]);

  // Obiect care mapează ID-urile laptopurilor la imaginile corespunzătoare
  const laptopImages = {
    1: laptop1,
    2: laptop2,
    3: laptop3,
    4: laptop4,
    5: laptop5,
  };

  const getLaptops = async () => {
    console.log('Fetching Laptops...');
    try {
      const response = await axios.get("api/laptops");
      console.log(response.data);
      setLaptops(response.data); 
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLaptops();
  }, []);

  return (
    <>
      <NavBar />
      <div className="laptop-list">
        {laptops.map((laptop) => (
          <Card 
            key={laptop.id}
            photo={laptopImages[laptop.id] || "default-image-path.png"}
            nume={laptop.brand + " " + laptop.model} 
            price={laptop.price} 
          />
        ))}
      </div>
    </>
  );
};

export default Laptops;
