import React from 'react';
import './AddUser.css';

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = '';
    e.target.email.value = '';
  };

  return (
    <div className="add-user-container">
      <form onSubmit={handleOnSubmit}>
        <h3>Add User</h3>
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
