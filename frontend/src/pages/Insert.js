// src/pages/Insert.js
import React, { useState } from 'react';
import axios from 'axios';
import './Insert.css';

const Insert = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/api/users', { name, email });
    setName('');
    setEmail('');
    alert('User added successfully!');
  };

  return (
    <div className="insert-container">
      <h2>Insert User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Insert;
