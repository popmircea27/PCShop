import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../navBar/NavBar";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);

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
      <ul>
        {laptops.map((laptop) => (
          <li key={laptop.id}>
            <h2>{laptop.brand}</h2>
            <p>Model: {laptop.model}</p>
            <p>Price: {laptop.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Laptops;
