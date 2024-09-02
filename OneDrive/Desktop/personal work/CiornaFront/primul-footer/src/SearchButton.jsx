import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
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
        rotate: 30,
        transition: {
            duration: 0.5,
        }
    }
};

const SearchButton = () => {
    return (
        <motion.div className="button-search">
            <motion.svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants} 
                initial="hidden"
                animate="visible"
                whileHover="onHover"  
                transition={{ duration: 0.5 }} 
            >
                <motion.circle
                    cx="11"
                    cy="11"
                    r="6"
                    fill="#2A4157"
                    fillOpacity="0.24"
                    stroke="#222222"
                    strokeWidth="1.2"
                    variants={svgVariants} 
                />
                <motion.path
                    d="M20 20L17 17"
                    stroke="#222222"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    variants={svgVariants} // Ensure variants match
                />
            </motion.svg>
        </motion.div>
    );
};

export default SearchButton;
