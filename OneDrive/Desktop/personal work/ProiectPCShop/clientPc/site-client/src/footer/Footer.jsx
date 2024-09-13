import React from "react";
import bearIcon from '../footer/footerAssets/bear.svg'; 
import linkedinIcon from '../footer/footerAssets/linkedin.svg';

import instagramIcon from '../footer/footerAssets/instagram.svg';
import facebookIcon from '../footer/footerAssets/facebook.svg';
import reactIcon from '../footer/footerAssets/react.svg';
import springbootIcon from '../footer/footerAssets/spring-boot.svg';
import mongodbIcon from '../footer/footerAssets/mongodb.svg';
import mysqlIcon from '../footer/footerAssets/mysql.svg';

import "../footer/footer-style.css";

function Footer() {
    return (
        <>
            <div className="footer"> 
                <div className="bear-icon"> 
                    <img src={bearIcon} alt="Bear Icon" />
                </div>

                <div className="pers-container">
                    <h3>&copy; Project made by Pop Mircea</h3>
                    <h4>My Socials</h4>
                    <div className="social-icons">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                    </div>
                </div>
                <h3>Made With</h3>
                <div className="project-icons">
                    <img src={reactIcon} alt="React" />
                    <img src={springbootIcon} alt="Spring Boot" />
                    <img src={mongodbIcon} alt="MongoDB" />
                    <img src={mysqlIcon} alt="MySQL" />
                </div>
            </div>
        </>
    );
}

export default Footer;
