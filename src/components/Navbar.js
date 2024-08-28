import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" exact activeClassName="active">Umiya Exports</NavLink>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/process" activeClassName="active">Process</NavLink></li>
        <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
        <li><NavLink to="/submit-product" activeClassName="active">Submit Product</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
