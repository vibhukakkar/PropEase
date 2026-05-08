import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><Link style={{textDecoration: 'none', color: 'inherit'}} to="/">PropEase</Link></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/rent">Rent</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
