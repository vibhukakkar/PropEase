import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">PropEase</h3>
          <p>Finding your perfect rental home made simple, smart, and verified.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/buy">Buy</Link></li>
            <li><Link to="/rent">Rent</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Cities</h4>
          <ul>
            <li>Gurgaon</li>
            <li>Noida</li>
            <li>Delhi</li>
            <li>Faridabad</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@propease.com</p>
          <p>Phone: +91 123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 PropEase – Smart Property Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
