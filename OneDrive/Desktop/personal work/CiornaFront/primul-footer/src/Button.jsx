import React from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

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

function Button(props) {
    const handleClick = () => {
        if (props.path) {
            window.location.href = props.path;
        }
    };

    return (
        <motion.button className="header-button"
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

Button.propTypes = {
    text: PropTypes.string,
    path: PropTypes.string, 
};

Button.defaultProps = {
    text: "Default Text",
    path: "#", 
};

export default Button;
