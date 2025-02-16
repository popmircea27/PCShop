import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import TransparentWhite from "../components/buttons/TranspararentWhite";
import TransparentButton from "../components/buttons/TransparentButton";
import userIcon from '../navBar/navBarAssets/user.svg'; 
import searchIcon from '../navBar/navBarAssets/search.svg';
import cartIcon from '../navBar/navBarAssets/cart.svg';
import Logo from "../components/logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import "../navBar/navBarStyle.css";



function NavBar() {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleClickUser = () => {
        window.location.href = '/user-panel';
    };

    const handleClickSearch = () => {
        setShowSearchBar(prevState => !prevState); 
    };

    const handleClickCart = () => {
        window.location.href = '/cart';
    };
    return (
        <>
            <div className="navbar">
                <div className="logo-container">
                    <Logo />
                    <h3>Shop</h3>
                </div>

                <div className="button-container">
                    <TransparentButton text={"Laptops"} path={'/laptops'} />
                    <TransparentWhite  text={"PC Office&Gaming"} path={'/pc-office-gaming'}/>  
                    <TransparentWhite  text={"Components"} path={'/components'} />      
                    <TransparentButton text={"Periferics"} path={'/periferics'} />
                </div>

                <div className="user-container">
                    <button className="search-button" onClick={handleClickSearch}>
                        <img src={searchIcon} alt="Search Icon" />
                    </button>
                    <button className="user-button" onClick={handleClickUser}>
                        <img src={userIcon} alt="User Icon" />
                    </button>
                    <button className="user-button" onClick={handleClickCart}>
                        <img src={cartIcon} alt="cart Icon" />
                    </button>
                </div>
            </div>
            {showSearchBar && (
                <motion.div
                    className="searchbar-container2"
                    initial={{
                        opacity: 0, 
                        y: '-100%',  // Start from the top
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%)',
                    }}  
                    animate={{
                        opacity: 1, 
                        y: 0,      // Slide down to the normal position
                        transition: { ease: "easeOut", duration: 1 },  // Smooth transition
                    }}     
                    exit={{
                        opacity: 0, 
                        y: '100%',  // Slide back up
                        transition: { ease: "easeIn", duration: 1.7 }, // Smooth exit
                    }}
                >
                <div>
                <SearchBar />
                </div>
                    
                </motion.div>
            )}
        </>
    );
}

export default NavBar;
