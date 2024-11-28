import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewUsers.css'; // Import the CSS file

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-container"> {/* Apply the CSS class here */}
      <h2>Users List</h2>
      {users.length === 0 ? ( // Check if there are no users
        <p>No users found.</p>
      ) : (
        users.map(user => (
          <div key={user._id} className="user-card"> {/* User card for styling */}
            <h4>{user.name} (ID: {user._id})</h4>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewUsers;
