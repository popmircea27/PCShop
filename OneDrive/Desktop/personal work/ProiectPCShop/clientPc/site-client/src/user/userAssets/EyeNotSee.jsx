import React from 'react';
import { motion } from 'framer-motion';

const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 2 }
    },
};

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    }
};

const pathVariants2 = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeInOut",
            delay: 0.5
        }
    }
};

function EyeNotSee() {
    return (
        <motion.svg 
            width="50px" 
            height="50px" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants} // Add animation for the whole SVG
            initial="hidden"
            animate="visible"
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <motion.g id="SVGRepo_iconCarrier">
                {/* Add pathVariants to each path */}
                <motion.path 
                    d="M2.99902 3L20.999 21" 
                    stroke="#222d68" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    variants={pathVariants} // Apply first path animation
                />
                <motion.path 
                    d="M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133" 
                    stroke="#222d68" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    variants={pathVariants2} // Apply second path animation with delay
                />
                <motion.path 
                    d="M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184" 
                    stroke="#222d68" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    variants={pathVariants} // Apply first path animation
                />
                <motion.path 
                    d="M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" 
                    stroke="#222d68" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    variants={pathVariants2} // Apply second path animation with delay
                />
            </motion.g>
        </motion.svg>
    );
}

export default EyeNotSee;
