import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Umiya Exports</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/process">Process</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/submit-product">Submit Product</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
