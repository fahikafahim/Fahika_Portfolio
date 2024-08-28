import React, { useState } from 'react';
import MobileNav from './../Components/MobileNav/MobileNav';
import './Navbar.css';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className='nav-wrapper'>
                <div className='nav-content'>
                    <img src="./assets/Logo.png" alt="logo" className='logo' />
                    <ul className='desktop-menu'>
                        <li>
                            <a href="#" className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a href="#" className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a href="#" className='menu-item'>Work Experience</a>
                        </li>
                        <li>
                            <a href="#" className='menu-item'>Contact Me</a>
                        </li>
                        
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
