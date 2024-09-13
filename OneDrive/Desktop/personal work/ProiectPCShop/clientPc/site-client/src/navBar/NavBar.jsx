import React from "react";
import Logo from "../components/logo/Logo";
import TransparentButton from "../components/buttons/TransparentButton";
import userIcon from '../navBar/navBarAssets/user.svg'; 
import searchIcon from '../navBar/navBarAssets/search.svg';

function NavBar() {
    const handleClickUser = () => {
        window.location.href = '/user';
    };

    const handleClickSearch = () => {
    
        
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
                    <TransparentButton text={"PC Office&Gaming"} path={'/'} />
                    <TransparentButton text={"Components"} path={'/'} />
                    <TransparentButton text={"Periferics"} path={'/'} />
                </div>

                <div className="user-container">
                    <button className="search-button" onClick={handleClickSearch}>
                        <img src={searchIcon} alt="Search Icon" />
                    </button>
                    <button className="user-button" onClick={handleClickUser}>
                        <img src={userIcon} alt="User Icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default NavBar;
