import React, { useState } from 'react';
import axios from 'axios';
import './Delete.css'; // Import the CSS file

const Delete = () => {
  const [id, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/api/users/${id}`);
      setId('');
      alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user. Please check the User ID and try again.');
    }
  };

  return (
    <div className="delete-container"> {/* Apply the CSS class here */}
      <h2>Delete User</h2>
      <input
        type="text"
        placeholder="User ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <button onClick={handleDelete}>Delete User</button>
    </div>
  );
};

export default Delete;
