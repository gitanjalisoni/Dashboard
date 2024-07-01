import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#">cyber</a>
        </div>
        <div className="navbar-search">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbar-links">
          <a href="#" className="navbar-link-home">Home</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
          </div>
        <div className="navbar-icons">
          <a href="#"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
          <a href="#"><FontAwesomeIcon icon={faUser} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;