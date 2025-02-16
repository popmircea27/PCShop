import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SugestedCard from '../cards/suggestedCard';
import "../suggested/sugestedStyle.css";

import laptop1 from "../../laptopsDir/laptopAssets/laptop1.png";
import laptop2 from "../../laptopsDir/laptopAssets/laptop2.png";
import laptop3 from "../../laptopsDir/laptopAssets/laptop3.png";
import laptop4 from "../../laptopsDir/laptopAssets/laptop4.png";
import laptop5 from "../../laptopsDir/laptopAssets/laptop5.png";
import laptop6 from "../../laptopsDir/laptopAssets/laptop6.png";

import laptop7 from "../../laptopsDir/laptopAssets/laptop7.png";
import laptop8 from "../../laptopsDir/laptopAssets/laptop8.png";
import laptop9 from "../../laptopsDir/laptopAssets/laptop9.png";
import laptop10 from "../../laptopsDir/laptopAssets/laptop10.png";

import laptop11 from "../../laptopsDir/laptopAssets/laptop11.png";
import laptop12 from "../../laptopsDir/laptopAssets/laptop12.png";
import laptop13 from "../../laptopsDir/laptopAssets/laptop13.png";
import laptop14 from "../../laptopsDir/laptopAssets/laptop14.png";

import laptop15 from "../../laptopsDir/laptopAssets/laptop15.png";
import laptop16 from "../../laptopsDir/laptopAssets/laptop16.png";
import laptop17 from "../../laptopsDir/laptopAssets/laptop17.png";
import laptop18 from "../../laptopsDir/laptopAssets/laptop18.png";
import laptop19 from "../../laptopsDir/laptopAssets/laptop19.png";

import laptop20 from "../../laptopsDir/laptopAssets/laptop20.png";
import laptop21 from "../../laptopsDir/laptopAssets/laptop21.png";
import laptop22 from "../../laptopsDir/laptopAssets/laptop22.png";
import laptop23 from "../../laptopsDir/laptopAssets/laptop23.png";
import laptop24 from "../../laptopsDir/laptopAssets/laptop24.png";

const responsive = {
    superLarge: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    large: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    medium: { breakpoint: { max: 768, min: 464 }, items: 2 },
    small: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

function Sugested({ laptopType, processorType, videoCardType }) {
    const [laptops, setLaptops] = useState([]);
    const getLaptops = async () => {
        try {
            const params = {
                processorType,
                videoCardType,
            };
            if (laptopType) {
                params.laptopType = laptopType;
            }
            const response = await axios.get("/api/laptops", { params });
            console.log("Response data:", response.data); // Adaugă această linie
            setLaptops(response.data); 
        } catch (err) {
            console.error(err);
        }
    };
    
    

    useEffect(() => {
        getLaptops();
    }, [laptopType, processorType, videoCardType]);

    useEffect(() => {
        console.log("Updated laptops state:", laptops);
    }, [laptops]);

    const laptopImages = {
        1: laptop1,
        2: laptop2,
        3: laptop3,
        4: laptop4,
        5: laptop5,
        6: laptop6,
        7: laptop7,
        8: laptop8,
        9: laptop9,
        10: laptop10,
        11: laptop11,
        12: laptop12,
        13: laptop13,
        14: laptop14,
        15: laptop15,
        16: laptop16,
        17: laptop17,
        18: laptop18,
        19: laptop19,
        20: laptop20,
        21: laptop21,
        22: laptop22,
        23: laptop23,
        24: laptop24,
    };
    return (
        <div className='center-body'>
            <h2 className='suggested-text'>We also recommend you</h2>
            <div className='suggested-body'>
                <div className='slideshow-body'>
                    <Carousel responsive={responsive}>
                        {laptops.length > 0 ? (
                            laptops.map((laptop) => (

                                <SugestedCard
                                    key={laptop.id}
                                    photo={laptopImages[laptop.id] || "default-image-path.png"}
                                    nume={`${laptop.brand || "Unknown"} ${laptop.model || ""}`}
                                    model={laptop.model || "No Model"}
                                    price={laptop.price || 0}
                                    id={laptop.id}
                                    procesor={laptop.processorType || "Unknown Processor"}
                                    placaVideo={laptop.videoCardType || "Unknown Video Card"}
                                />

                            ))
                        ) : (
                            <p>No laptops available</p>
                        )}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Sugested;
