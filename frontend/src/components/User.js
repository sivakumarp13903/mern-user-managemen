import React from 'react';
import './User.css';

const User = ({ id, name, email, onDelete }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <h4 className="user-name">{name}</h4>
        <p className="user-email">{email}</p>
      </div>
      <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default User;
