
import React, { useState } from 'react';
import './Header.css';
import CartButton from '../CartButton/Cartbutton';
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`maincontainer ${menuOpen ? 'open' : ''}`}>
      <div className="logo">
        {/* <img src={mainlogo} alt="Logo" /> */}
        CodeGama
      </div>
      <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
        <a className='dropdown' href="#">How to</a>
        <a className='dropdown' href="#">Product</a>
        <a className='dropdown' href="#">Solution</a>
        <a className='dropdown' href="#">Feature</a>
        <a className='dropdown' href="#">Pricing</a>
        <a className='dropdown' href="#">Login</a>
        <CartButton/>
        
      </nav>
      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
