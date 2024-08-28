import React from 'react';
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className='mobile-menu-container' onClick={(e) => e.stopPropagation()}>
          <img src="./../assets/Logo.png" alt="logo" className='logo' />
          <ul>
            <li>
              <a href="#" className='menu-item' onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="#" className='menu-item' onClick={toggleMenu}>Skills</a>
            </li>
            <li>
              <a href="#" className='menu-item' onClick={toggleMenu}>Work Experience</a>
            </li>
            <li>
              <a href="#" className='menu-item' onClick={toggleMenu}>Contact Me</a>
            </li>
            <button className='contact-btn' onClick={toggleMenu}>Hire Me</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
