// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/insert">Insert</Link>
        <Link to="/update">Update</Link>
        <Link to="/delete">Delete</Link>
        <Link to="/view">View</Link>
      </nav>
    </header>
  );
};

export default Header;
