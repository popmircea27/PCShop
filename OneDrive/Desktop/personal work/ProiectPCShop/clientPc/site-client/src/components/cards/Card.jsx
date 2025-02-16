import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import TransparentButton from '../buttons/TransparentButton';
import TransparentWhite from '../buttons/TranspararentWhite';
import { useNavigate } from 'react-router-dom';

import "../cards/cardStyle.css";



function Card(props){
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
        console.log("ceva");
    };

    const handleClickAdaugaCos = () => {
        navigate(`/${props.id}`); 
    };
    return (
        <>
            <div className='card-body'> 
                <div className='photo'>
                <img src={props.photo} alt={props.model} />
                </div>
                <div className='info-body'>
                    <h3>{props.nume}</h3>
                    <h4>{props.price}$</h4>
                </div>
                <div className='button-container'>
                    
                    <button  className="button-card" onClick={handleClickAdaugaCos}>Adauga In Cos</button>
                    {/* tre sa vad aici daca dau redirectionare cos sau daca pastrez pagina. */}
                    
                    {/* path cu id u laptopului */}
                    <button  className="button-card" onClick={handleClickSee}>Vezi mai mult</button>
                </div>
            </div>
        </>
    );

}


export default Card;
