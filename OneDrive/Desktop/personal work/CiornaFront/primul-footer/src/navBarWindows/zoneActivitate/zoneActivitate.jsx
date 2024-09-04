import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from "framer-motion";
import './zoneActivitateStyle.css';
import BullIcon from 'C:/Users/stefa/OneDrive/Desktop/personal work/CiornaFront/primul-footer/src/assets/bull.svg';
import WolfIcon from 'C:/Users/stefa/OneDrive/Desktop/personal work/CiornaFront/primul-footer/src/assets/wolf.svg';
import RomanIcon from 'C:/Users/stefa/OneDrive/Desktop/personal work/CiornaFront/primul-footer/src/assets/roman.svg';
import waterIcon from 'C:/Users/stefa/OneDrive/Desktop/personal work/CiornaFront/primul-footer/src/assets/water.svg';
import { useNavigate } from 'react-router-dom';

const bucovinaInfo = "Bukovina is a historical region in Eastern Europe. The region is located on the northern slopes of the central Eastern Carpathians and the adjoining plains, today divided between Romania and Ukraine. Habited by many cultures and peoples, settled by both Ukrainians (Ruthenians) and Romanians (Moldavians), it became part of the Kievan Rus' and Pechenegs' territory early on during the 10th century and an integral part of the principality of Moldavia in the 14th century where the capital of Moldavia, Suceava, was founded, eventually expanding its territory all the way to the Black Sea.";
const daciaInfo = "Dacia  was the land inhabited by the Dacians, its core in Transylvania, stretching to the Danube in the south, the Black Sea in the east, and the Tisza in the west. The Carpathian Mountains were located in the middle of Dacia. It thus roughly corresponds to present-day Romania, as well as parts of Moldova, Bulgaria, Serbia, Hungary, Slovakia, and Ukraine.";
const romanaInfo = " o ultimă parte a județului Caraș-Severin (începând din Crușovăț) și în rest pe teritoriul județului Mehedinți, parte denumită de către noi Terra Romana. O zonă care are un specific climatic unic în România, ce a permis dezvoltarea unui peisaj natural care îți taie respirația. Istoria locurilor, începând cu mii de ani în urmă, face din acest teritoriu o comoară care așteaptă să fie descoperită. De la povești cu daci și romani, la comori ascunse în peșteri sau sub pământ, la drumuri umblate de regii României și până la povești mai recente, cu și despre oamenii care locuiesc aici, totul se descoperă celui care își deschide mintea și sufletul. Podișul Mehedinți oferă o priveliște demnă de un final epic al drumului Via Transilvanica.";
const infoDunare = "Dunărea este al doilea cel mai lung fluviu din Europa (după Volga care curge în întregime în Rusia). Izvorăște din Munții Pădurea Neagră din Germania, de unde provin două râuri, Brigach și Breg, care se întâlnesc la Donaueschingen, punct de unde râul ia denumirea de Dunăre.Lungimea Dunării depinde de punctul de pornire considerat: 2.852 km";
function ZoneActivitate() {
    const navigate = useNavigate();

    const redirectBucovina = (e) => {
        e.preventDefault();
        window.open('https://en.wikipedia.org/wiki/Bukovina', '_blank');
    };

    const redirectDacia = (e) => {
        e.preventDefault();
        window.open('https://ro.wikipedia.org/wiki/Dacia', '_blank');
    };
    const redirectRomana = (e) => {
        e.preventDefault();
        window.open('https://www.viatransilvanica.com/ro/tinuturi/terra-romana/', '_blank');
    };
    const redirectDunare = (e) => {
        e.preventDefault();
        window.open('https://www.viatransilvanica.com/ro/tinuturi/terra-romana/', '_blank');
    };
    return (
        <div className='center-main'>
            <div className='body-ac'>
                <motion.div className="body-zone-activitate">
                    <div style={{ height: '500px', width: '80%', border: '2px solid black', margin: 'auto', borderRadius: 5 }}>
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
                            <center><h1>Zone Activitate</h1></center>
                            <motion.div className='rand-zone'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 3 }}
                                viewport={{ once: true }}
                            >
                                <div className='zona'>
                                    <motion.div className='nume-zona'
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        <img src={BullIcon} alt="Bull Icon" className='bull-icon' />
                                        <h3>Bucovina</h3>
                                    </motion.div>
                                    <motion.h4
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        {bucovinaInfo}
                                    </motion.h4>
                                    <motion.button className='buton-zone'
                                        onClick={redirectBucovina}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        Vezi Mai mult...
                                    </motion.button>
                                </div>

                                <div className="zona">
                                    <motion.div className='nume-zona'
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        <img src={WolfIcon} alt="Wolf Icon" className='bull-icon' />
                                        <h3>Dacia</h3>
                                    </motion.div>
                                    <motion.h4
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        {daciaInfo}
                                    </motion.h4>
                                    <motion.button className='buton-zone'
                                        onClick={redirectDacia}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        Vezi Mai mult...
                                    </motion.button>
                                </div>

                                <div className="zona">
                                    <motion.div className='nume-zona'
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        <img src={RomanIcon} alt="Roman Icon" className='roman-icon' />
                                        <h3>Terra Romana</h3>
                                    </motion.div>
                                    <motion.h4
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        {romanaInfo}
                                    </motion.h4>
                                    <motion.button className='buton-zone'
                                        onClick={redirectRomana}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        Vezi Mai mult...
                                    </motion.button>
                                </div>

                                <div className="zona">
                                    <motion.div className='nume-zona'
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        <img src={waterIcon} alt="Water Icon" className='water-icon' />
                                        <h3>Dunarea</h3>
                                    </motion.div>
                                    <motion.h4
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        {infoDunare}
                                    </motion.h4>
                                    <motion.button className='buton-zone'
                                        onClick={redirectDunare}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 3 }}
                                        viewport={{ once: true }}
                                    >
                                        Vezi Mai mult...
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ZoneActivitate;