import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from "framer-motion";
import './zoneActivitateStyle.css';
import BullIcon from 'C:/Users/stefa/OneDrive/Desktop/personal work/CiornaFront/primul-footer/src/assets/bull.svg'; 
import WolfIcon from 'C:/Users/stefa/OneDrive/Desktop/personal work/CiornaFront/primul-footer/src/assets/wolf.svg'; 
import { useNavigate } from 'react-router-dom';

const bucovinaInfo = "Bukovina is a historical region in Eastern Europe. The region is located on the northern slopes of the central Eastern Carpathians and the adjoining plains, today divided between Romania and Ukraine. Habited by many cultures and peoples, settled by both Ukrainians (Ruthenians) and Romanians (Moldavians), it became part of the Kievan Rus' and Pechenegs' territory early on during the 10th century and an integral part of the principality of Moldavia in the 14th century where the capital of Moldavia, Suceava, was founded, eventually expanding its territory all the way to the Black Sea.";

function ZoneActivitate() {
    const navigate = useNavigate();

    const redirectBucovina = (e) => {
        e.preventDefault();
        window.open('https://en.wikipedia.org/wiki/Bukovina', '_blank'); 
    };

    return (
        <motion.div className="body-zone-activitate">
            <div style={{ height: '500px', width: '80%', border: '2px solid black', margin: 'auto' }}>
                <MapContainer center={[45.9432, 24.9668]} zoom={7} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* Marker pentru Cluj-Napoca */}
                    <Marker position={[46.7712, 23.6236]}>
                        <Popup>
                            Cluj-Napoca
                        </Popup>
                    </Marker>
                    {/* Marker pentru Bucovina (Suceava) */}
                    <Marker position={[47.6513, 26.2555]}>
                        <Popup>
                            Bucovina (Suceava)
                        </Popup>
                    </Marker>
                    {/* Marker pentru Cazanele Dunării */}
                    <Marker position={[44.6308, 22.3691]}>
                        <Popup>
                            Cazanele Dunării
                        </Popup>
                    </Marker>
                </MapContainer>
                <div className='zone-activitate'>
                    <h1>Zone Activitate</h1>
                    <div className='rand-zone'>
                        <div className='zona'>
                            <div className='nume-zona'>
                                <img src={BullIcon} alt="Bull Icon" className='bull-icon' />
                                <h3>Bucovina</h3>
                            </div>
                            <h4>{bucovinaInfo}</h4>
                            <button onClick={redirectBucovina}>Vezi Mai mult...</button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ZoneActivitate;
