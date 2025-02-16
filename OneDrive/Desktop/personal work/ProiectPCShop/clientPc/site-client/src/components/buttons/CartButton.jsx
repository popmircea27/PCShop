import React from "react";
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import cartIcon from "../../navBar/navBarAssets/cart2.svg";

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
    scale: 1.4,
    transition: {
      duration: 0.3,
    },
  }
};

function CartButton({ onAddToCart }) {
  return (
    <motion.button
      className="add-cart-button"
      variants={buttonVars}
      initial="hidden"
      animate="visible"
      whileHover="onHover"
      onClick={onAddToCart} // Apelează funcția onAddToCart când butonul este apăsat
    >
      <img src={cartIcon} alt="cart Icon" />
      <h2>Add to Cart</h2>
    </motion.button>
  );
}

CartButton.propTypes = {
  onAddToCart: PropTypes.func.isRequired,  // Definirea funcției ca prop
};

export default CartButton;
