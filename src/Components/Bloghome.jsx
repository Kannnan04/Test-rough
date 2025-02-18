// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import './Bloghome.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Bloghome = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hero-container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Inspiration by Trazler</a>

                    {/* Navbar Toggler */}

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNavbar} 
                        aria-controls="navbarNav"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar  */}

                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><a className="nav-link" href="#">DESTINATION</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">FOOD</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">WELL BEING</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">SPORT</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">FAMILY</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">LIFESTYLE</a></li>
                        </ul>

                        {/* Search Bar */}

                        <form className="d-flex ms-auto">
                            <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                            <input className="form-control me-5" type="search" placeholder="GET YOUR 120$ CHRISTMAS GIFT" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}

            <div className="hero-content">
                <h1 className="content display-4">INSPIRATION FOR TRAVEL BY REAL PEOPLE</h1>
                <p className="lead">Book smart, Travel simple</p>
                <button className='hero-btn '>Start planning your trip</button>
            </div>

            {/*logo section*/}

            <div className="logo-section">
                <ul className="logo-list">
                    <FontAwesomeIcon className='facebook' id='icon' icon={faFacebook} />
                    <li className="nav-item"><a className="nav-link" href="#">3.7M</a></li>
                    <FontAwesomeIcon className='insta' id='icon' icon={faInstagram} />
                    <li className="nav-item"><a className="nav-link" href="#">2.4M</a></li>
                    <FontAwesomeIcon  className='twitter'id='icon' icon={faTwitter} />
                    <li className="nav-item"><a className="nav-link" href="#">3.7M</a></li>
                    <FontAwesomeIcon  className='youtube'id='icon' icon={faYoutube} />
                    <li className="nav-item"><a className="nav-link" href="#">2.4M</a></li>
                </ul>
            </div>

            


        </div>











    );
};

export default Bloghome;
