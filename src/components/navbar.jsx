import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-icon" style={{ display: 'flex', alignItems: 'center', color: 'var(--secondary, #0A1D37)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <path d="M12 2L2 10.6h3V22h5v-6h4v6h5V10.6h3L12 2z"/>
            </svg>
          </span> 
          <span style={{ marginLeft: '8px', color: 'var(--secondary, #0A1D37)', fontWeight: '900' }}>Home</span>
          <span style={{ color: 'var(--primary, #FF8C32)', fontWeight: '900' }}>Arc</span>
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/experts" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Our Experts
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-cta">
          <Link to="/contact#enquire-now" className="book-now-btn">
            Enquire Now <span className="btn-icon">➜</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
