import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from "framer-motion";
import './evenimenteStyle.css';
import { useNavigate } from 'react-router-dom';

function Evenimente() {
    return (
        <>
            <div className='body-center'>
                <div className='container'>
                    <div className='continut-pagina'>
                        <motion.div 
                            className="eveniment-info"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h1>Bun venit la Via Transilvanica Maraton!</h1>
                            <p>
                                VT MARATON este un proiect prin care am vrut să facem cunoscut drumul Via Transilvanica, 
                                iubitorilor de alergare montană și mountain-bike. Prima ediție a avut loc în anul 2020 și 
                                a avut următoarele probe: semimaraton, maraton, ultramaraton și bicicletă.
                            </p>
                            <p>
                                La proba de ultramaraton, alergătorii au parcurs 161 de km, distanța care este între Putna 
                                și Drobeta Turnu Severin.
                            </p>
                            <img 
                                src="assets/poza-1.jpg" 
                                alt="Via Transilvanica Maraton" 
                                className="eveniment-imagine" 
                            />
                        </motion.div>

                        <motion.div 
                            className="eveniment-harta"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h2>Harta Evenimentului</h2>
                            <MapContainer center={[45.9432, 24.9668]} zoom={7} scrollWheelZoom={false} className="harta-container">
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[47.8502, 25.6996]}>
                                    <Popup>
                                        Putna - Start Ultramaraton
                                    </Popup>
                                </Marker>
                                <Marker position={[44.6269, 22.6567]}>
                                    <Popup>
                                        Drobeta Turnu Severin - Finish Ultramaraton
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );   
}

export default Evenimente;
