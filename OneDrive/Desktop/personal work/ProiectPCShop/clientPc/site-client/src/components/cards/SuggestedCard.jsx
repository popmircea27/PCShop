import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; 

import "../cards/cardStyle.css";



function SugestedCard(props) {
    const navigate = useNavigate();
    const handleClickSee = () => {
        navigate(`/laptops/details/${props.id}`, {
            state: {
                id: props.id,
                nume: props.nume,
                model: props.model,
                price: props.price,
                photo: props.photo,
                procesor: props.procesor,
                placaVideo: props.placaVideo,
            }
        });
        window.scrollTo(0, 0);

        console.log("nav");
    };

    return (
        <div className='card-body-suggested'> 
            <div className='photo'>
                <img src={props.photo} alt={props.model} />
            </div>
            <div className='info-body'>
                <h3>{props.nume}</h3>
                <h4>{props.price}$</h4>
            </div>
            <div className='button-container'>
                <button className="button-see-more" onClick={handleClickSee}>Vezi mai mult</button>
            </div>
            {/* console.log({props.model}); */}
        </div>
        
    );
}

SugestedCard.defaultProps = {
    model: "Unknown Model",
    nume: "Unknown Laptop",
    price: 0,
    photo: "default-image-path.png",
    procesor: "Unknown Processor",
    placaVideo: "Unknown Video Card",
};


export default SugestedCard;

