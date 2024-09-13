import React from "react";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import "../buttons/buttonsStyle.css";
const buttonVars = {
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
        scale: 1.1,
        transition: {
            duration: 0.3,
        },
    }
};

function TransparentWhite(props) {
    const handleClick = () => {
        if (props.path) {
            window.location.href = props.path;
        }
    };

    return (
        <motion.button
            className="transparent-button-white"
            variants={buttonVars}
            initial="hidden"
            animate="visible"
            whileHover="onHover"
            onClick={handleClick}
        >
            <h2>{props.text}</h2>
            
        </motion.button>
    );
}

// Corrected propTypes and defaultProps for TransparentButton
TransparentWhite.propTypes = {
    text: PropTypes.string,
    path: PropTypes.string, 
};

TransparentWhite.defaultProps = {
    text: "Default Text",
    path: "#", 
};

export default TransparentWhite;
