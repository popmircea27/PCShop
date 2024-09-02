import React from 'react';
import { motion } from 'framer-motion';
import Logo from './logoFile/Logo';
import Button from './Button';
import SearchButton from './SearchButton';
import UserButton from './userFolder/UserButton';

function Header() {
    return (
        <header className='header-style'>
            <motion.div className='header'>
                <UserButton path={'/user-panel'} />
                <Button text={"Aventuri"} path={'/aventuri'} />
                <Button text={"Zone Activitate"} path={'/zone-activitate'} />
                
                <button className='button-logo'>
                    <motion.h1 className='nume-logo'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                    >
                        Carpato
                    </motion.h1>
                    <Logo />
                    <motion.h1 className='nume-logo'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                    >
                        Journey
                    </motion.h1>
                </button>
                
                <Button text={"Evenimente"} path={'/evenimente'} />
                <Button text={"Vouchere Cadou"} path={'/vouchere-cadou'} />
                <SearchButton className="button-search"/>
            </motion.div>
        </header>
    );
}

export default Header;
