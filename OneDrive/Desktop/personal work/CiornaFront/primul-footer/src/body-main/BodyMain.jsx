import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './body-main-style.css';
import image1 from '../body-main/pozeCarduri/rafting.jpg'; 
import image2 from '../body-main/pozeCarduri/escalada.jpeg'; 
import image3 from '../body-main/pozeCarduri/parapanta.jpg';
import image4 from '../body-main/pozeCarduri/viaferata.jpg'; 
import image5 from '../body-main/pozeCarduri/caiac.jpg'; 
import image6 from '../body-main/pozeCarduri/11.jpg'; 
import backgroundImage1 from '../assets/card1.jpg'; 
import backgroundImage2 from '../assets/card2.jpg';
import backgroundImage3 from '../assets/card3.jpg';
import backgroundImage4 from '../assets/card5.jpg';
import backgroundImage5 from '../assets/card6.jpg';

function BodyMain() {
    const [selectedId, setSelectedId] = useState(null);
    
    const items = [
        { id: 1, background: backgroundImage1, image: image1, subtitle: 'Rafting', title: 'Pret: 300 Ron', descriere: 'O experiență de rafting captivantă pe râuri repezi, potrivită atât pentru începători cât și pentru avansați.' },
        { id: 2, background: backgroundImage2, image: image2, subtitle: 'Via-Ferata', title: 'Pret: 180 Ron', descriere: 'Traseu de via-ferrata spectaculos, cu priveliști uimitoare și siguranță maximă.' },
        { id: 3, background: backgroundImage3, image: image3, subtitle: 'Salt Parapanta', title: 'Pret: 300 Ron', descriere: 'Sari în gol și simte adrenalina unui zbor cu parapanta de la înălțimi amețitoare.' },
        { id: 4, background: backgroundImage4, image: image4, subtitle: 'Escalada', title: 'Pret: 180 Ron', descriere: 'Testează-ți abilitățile de cățărător pe trasee de escaladă de diferite dificultăți.' },
        { id: 5, background: backgroundImage5, image: image5, subtitle: 'Caiac', title: 'Pret: 280 Ron', descriere: 'Explorează peisaje naturale uimitoare într-o aventură de neuitat cu caiacul.' },
        { id: 6, background: backgroundImage1, image: image6, subtitle: 'Drumetii', title: 'Pret: 130 Ron', descriere: 'O drumeție revigorantă prin munți, perfectă pentru iubitorii de natură.' },
    ];

    const selectedItem = items.find(item => item.id === selectedId);

    return (
        <div className="body-main">
            {items.map(item => (
                <motion.div 
                    className='card-display' 
                    key={item.id} 
                    layoutId={item.id} 
                    onClick={() => setSelectedId(item.id)}
                    style={{
                        backgroundImage: `url(${item.background})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center' 
                    }}
                >
                    <motion.img 
                        className='image-style' 
                        src={item.image} 
                        alt={`photo-card-${item.id}`} 
                        height={200} 
                    />
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && selectedItem && (
                    <motion.div className='card-focus' layoutId={selectedId}>
                        <motion.img 
                            className='image-style-focus' 
                            src={selectedItem.image} 
                            alt={`photo-card-${selectedItem.id}`} 
                            height={200} 
                        />
                        <motion.h5>{selectedItem.descriere}</motion.h5>
                        <motion.h2>{selectedItem.title}</motion.h2>
                        <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
                        <motion.button 
                            onClick={() => window.location.href='/checkout'} 
                            className='checkout-button'
                        >
                            Checkout
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default BodyMain;
