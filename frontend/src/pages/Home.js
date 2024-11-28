import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the User Management App</h1>
      <p>
        This application allows you to manage users easily. You can insert new users, update existing users, delete users, and view the list of all users.
      </p>
      <div className="navigation-links">
        <Link to="/insert" className="nav-link">Insert User</Link>
        <Link to="/update" className="nav-link">Update User</Link>
        <Link to="/delete" className="nav-link">Delete User</Link>
        <Link to="/view" className="nav-link">View Users</Link>
      </div>
    </div>
  );
};

export default Home;
