import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sugested from '../../components/suggested/Sugested';

import axios from 'axios';
import "../LaptopDetail/laptopViewStyle.css";
import TransparentButton from '../../components/buttons/TransparentButton';
import CartButton from '../../components/buttons/CartButton';

import amd from "../laptopAssets/amd.svg";
import apple from "../laptopAssets/apple.svg";
import intel from "../laptopAssets/intel.svg";
import linux from "../laptopAssets/linux.svg";
import nvidia from "../laptopAssets/nvidia.svg";
import windows from "../laptopAssets/windows.svg";
import LaptopReviews from '../../Reviews/LaptopReviews/LaptopReviews';




const animationsVars = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    }
  },
  onHover: {
    scale: 1.4,
    transition: {
      duration: 0.3,
    },
  }
};

function LaptopView() {
  const { id } = useParams();
  const location = useLocation();
  const { nume, model, price, photo, procesor, placaVideo } = location.state || {};
  const [laptopInfo, setLaptopsInfo] = useState(null);
  const [randomOS, setRandomOS] = useState("");

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    generateRandomOS();
  }, [procesor]);

  const getInfo = async () => {
    try {
      const response = await axios.get(`/api/laptops/details/${id}`);
      setLaptopsInfo(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const generateRandomOS = () => {
    const operatingSystems = ["Windows", "Linux", "Apple"];
    let selectedOS = operatingSystems[Math.floor(Math.random() * operatingSystems.length)];


    if (procesor === "Intel" && selectedOS === "Apple") {
      selectedOS = "Windows";
    } else if (procesor === "AMD" && selectedOS === "Apple") {
      selectedOS = "Linux";
    } else if (procesor === "Apple") {
      selectedOS = "Apple";
    }

    setRandomOS(selectedOS);
  };

  if (!laptopInfo) {
    return <div />;
  }
  const addToCart = (product) => {
    console.log("Adding to cart:", product);  // Verifică ce date primește funcția
    const existingCart = JSON.parse(sessionStorage.getItem("shoppingCart")) || [];
  
    const existingProduct = existingCart.find((item) => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        existingCart.push({ ...product, quantity: 1 });
    }
  
    sessionStorage.setItem("shoppingCart", JSON.stringify(existingCart));
    alert(`1 bucata adaugat in coș!`);
  };
  
  const { specificatii, descriere } = laptopInfo;

  return (
    <>
      <div className='main-body'>


        <div className='main-pannel'>
          <div className='view-photo'>
            <img src={photo} alt={model} />
          </div>
          <div className='info-aux'>
            <div className='smal-info'>
              <h1>Detalii pentru laptopul cu ID: {id}</h1>
              <h2>{model} {nume}</h2>
            </div>
            <div className='button-container-view'>
              <h2>{price} $</h2>
              <div className='add-to-cart-button'>
              <CartButton
                  onAddToCart={() => addToCart({ id, nume, model, price })}
                />

              </div>
            </div>
          </div>
          <div className='info-main-container'>
            <motion.div className='info-container'
              variants={animationsVars}
              initial="hidden"
              animate="visible"
            //  whileHover="onHover"
            >

              <h3>Specificații:</h3>
              <ul>
                <li>Procesor: {specificatii.procesor.tip} ({specificatii.procesor.numar_nuclee} nuclee)</li>
                <li>Memorie: {specificatii.memorie.capacitate} {specificatii.memorie.tip}</li>
                <li>Hard Disk: {specificatii.hard_disk.capacitate} {specificatii.hard_disk.tip}</li>
                <li>Placa video: {specificatii.placa_video.tip} - {specificatii.placa_video.chipset}</li>
                <li>Greutate: {specificatii.greutate}</li>
                <li>Dimensiuni: {specificatii.dimensiuni}</li>
                <li>Culoare: {specificatii.culoare}</li>
              </ul>

              <h4>Descriere:</h4>
              <p>{descriere}</p>
            </motion.div>
            <div className='side-info'>
              <div className='procesorInfo'>
                <h3>Procesor:</h3>
                <div>
                  {procesor === 'Intel' && <motion.img className='logo-svg' src={intel} alt="Intel Icon" variants={animationsVars}
                    initial="hidden"
                    animate="visible"
                    whileHover="onHover" />}
                  {procesor === 'AMD' && <motion.img className='logo-svg' src={amd} alt="AMD Icon" variants={animationsVars}
                    initial="hidden"
                    animate="visible"
                    whileHover="onHover" />}
                  {procesor === 'Apple' && <motion.img className='logo-svg' src={apple} alt="Apple Icon" variants={animationsVars}
                    initial="hidden"
                    animate="visible"
                    whileHover="onHover" />}
                </div>

              </div>

              <div className='VideoInfo'>
                <h3>Placa Video:</h3>
                <div>
                  {placaVideo === 'NVIDIA' && <motion.img className='logo-svg' src={nvidia} alt="NVIDIA Icon" variants={animationsVars}
                    initial="hidden"
                    animate="visible"
                    whileHover="onHover" />}
                  {placaVideo === 'Intel' && <motion.img className='logo-svg' src={intel} alt="Intel Icon" variants={animationsVars}
                    initial="hidden"
                    animate="visible"
                    whileHover="onHover" />}
                  {placaVideo === 'AMD' && <motion.img className='logo-svg' src={amd} alt="AMD Icon" variants={animationsVars}
                    initial="hidden"
                    animate="visible"
                    whileHover="onHover" />}
                </div>
              </div>

              <div className='OSsistem'>
                <h3>Sistem OS:</h3>
                <div>
                  {randomOS === 'Windows' && <motion.img className='logo-svg' src={windows} alt="Windows Icon" variants={animationsVars}
                    initial="hidden"
                    animate="visible"
                    whileHover="onHover" />}
                  {randomOS === 'Linux' && <motion.img className='logo-svg' src={linux} alt="Linux Icon" variants={animationsVars}
                    initial="hidden"
                    animate="visible"
                    whileHover="onHover" />}
                  {randomOS === 'Apple' && <motion.img className='logo-svg' src={apple} alt="Apple Icon" variants={animationsVars}
                    initial="hidden"
                    animate="visible"
                    whileHover="onHover" />}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <LaptopReviews laptopId={id} />
      <Sugested
        laptopType={laptopInfo.laptopType} // Poți ajusta acest lucru dacă ai un tip specific de laptop
        processorType={procesor}
        videoCardType={placaVideo}
      />
      
    </>
  );
}

export default LaptopView;
