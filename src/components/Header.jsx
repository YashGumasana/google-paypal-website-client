// src/components/Header.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useDispatch } from 'react-redux';

import SignInModal from './SignInModal';
import { logout } from '../redux/actions/AuthAction';

function Header() {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const isAuth = localStorage.getItem('eonToken')



    useEffect(() => {
        // Function to handle clicks outside the modal box
        const handleClickOutside = (event) => {
            const menuTrigger = document.querySelector('.menu-trigger');
            // Check if the click occurred outside the menu area and the menu trigger button
            if (menuTrigger && !menuTrigger.contains(event.target) && (event.target.tagName !== 'A') && !(event.target.classList.contains('sign-in-button-li')) && !(event.target.classList.contains('gradient-button')) && (event.target.id !== 'modal_trigger')) {
                setShowMenu(false);
            }

        };

        // Add the event listener when the menu is displayed
        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up the event listener when the menu is closed
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu]);

    const handleGetButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };
    return (
        <>
            <header className=" header-area header-sticky  bg-light wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav style={!showMenu ? { display: "flex", alignItems: "center", justifyContent: "space-between" } : {}} className={!showMenu ? "main-nav main-nav-flex" : "main-nav"} >
                                <Link to="/" className="logo" >
                                    <img src="/assets/images/logo.png" alt="Chain App Dev" />
                                </Link>
                                <ul className={showMenu ? "nav nav-flex" : "nav"} id='header-nav-ul' >
                                    {/* Use ScrollLink from react-scroll */}
                                    {/* <li style={{ cursor: "pointer" }}>
                                        <ScrollLink
                                            activeClass="active"
                                            to="top"
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={1000}
                                        >
                                            Home
                                        </ScrollLink>
                                    </li>
                                    <li style={{ cursor: "pointer" }}>
                                        <ScrollLink
                                            activeClass="active"
                                            to="pricing"
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={1000}
                                        >
                                            Pricing
                                        </ScrollLink>
                                    </li>

                                    <li style={{ cursor: "pointer" }}>
                                        <ScrollLink
                                            activeClass="active"
                                            to="services"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={1000}
                                        >
                                            Services
                                        </ScrollLink>
                                    </li>
                                    <li style={{ cursor: "pointer" }}>
                                        <ScrollLink
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={1000}
                                        >
                                            About
                                        </ScrollLink>
                                    </li>
                                    <li style={{ cursor: "pointer" }}>
                                        <ScrollLink
                                            activeClass="active"
                                            to="clients"
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={1000}
                                        >
                                            History
                                        </ScrollLink>
                                    </li>
                                    <li style={{ cursor: "pointer" }}>
                                        <ScrollLink
                                            activeClass="active"
                                            to="newsletter"
                                            spy={true}
                                            smooth={true}
                                            offset={-50}
                                            duration={1000}
                                        >
                                            Contact Us
                                        </ScrollLink>
                                    </li> */}

                                    <li style={{ cursor: "pointer" }}>
                                        <Link to="/about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li style={{ cursor: "pointer" }}>
                                        <Link to="/history">
                                            History
                                        </Link>
                                    </li>
                                    <li style={{ cursor: "pointer" }}>
                                        <Link to="/setting">
                                            Setting
                                        </Link>
                                    </li>
                                    <li className='sign-in-button-li'>
                                        <div className="gradient-button">
                                            {isAuth ?
                                                // <Link id="modal_trigger" to="/" >
                                                <div id="modal_trigger" onClick={() => dispatch(logout())}>Sign Out</div>
                                                // </Link>
                                                : <>
                                                    <div id="modal_trigger" onClick={handleGetButtonClick}>Sign In Now</div>
                                                    <SignInModal display={showModal} onClose={handleCloseModal} />
                                                </>
                                            }
                                        </div>

                                    </li>
                                    {/* Add other navigation items with smooth scrolling */}
                                </ul>
                                <Link className="menu-trigger" onClick={handleMenuToggle}>
                                    <span>Menu</span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>


            {/* <div id="modal_trigger" > */}
            {/* </div> */}
        </>
    );
}

export default Header;
