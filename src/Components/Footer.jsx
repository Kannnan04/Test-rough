// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Footer.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <p>Designed & Developed by <span className="xp-design">XP DESIGN</span></p>
                    </div>

                    {/* Right Section */}

                    <div className="footer-right">
                        <div className="social-icons">
                            <div><FaFacebookF /><span>29</span></div>
                            <div><FaTwitter /><span>70K</span></div>
                            <div><FaInstagram /><span>40</span></div>
                            <div><FaPinterestP /><span>13K</span></div>
                            <div><FaYoutube /><span>168K</span></div>
                        </div>
                    </div>

                    <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <IoIosArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;