import React from "react";
import Logo from "../components/logo/Logo";
import TransparentButton from "../components/buttons/TransparentButton";

import userIcon from '../navBar/navBarAssets/user.svg'; 
import searchIcon from '../navBar/navBarAssets/search.svg';
import cartIcon from '../navBar/navBarAssets/cart.svg';
import "../navBar/navBarStyle.css";
import TransparentWhite from "../components/buttons/TranspararentWhite";
function NavBar() {
    const handleClickUser = () => {
        window.location.href = '/user';
    };

    const handleClickSearch = () => {
    
        
    };

    const handleClickCart = () => {
    
        
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
                    <TransparentWhite  text={"PC Office&Gaming"} path={'/'}/>  
                    <TransparentWhite  text={"Components"} path={'/'} />      
                    <TransparentButton text={"Periferics"} path={'/'} />
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
        </>
    );
}

export default NavBar;
