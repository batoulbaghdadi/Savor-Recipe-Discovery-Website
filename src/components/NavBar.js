import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoNav.png';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-logo-link">
        <img src={logo} alt="Savor Logo" className="navbar-logo-img" />
        <span className="navbar-logo-text">AVOR</span>
      </Link>

      <div className="navbar-links">
        <Link to="/home" className="nav-item">Home</Link>
        <Link to="/recipes" className="nav-item">Recipes</Link>
        <Link to="/Favorites" className="nav-item">Favorites</Link>
        <Link to="/about" className="nav-item">About</Link>
      </div>
    </nav>
  );
}

export default NavBar;