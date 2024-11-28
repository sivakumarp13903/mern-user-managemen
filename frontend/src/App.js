// // src/App.js
// import React, { useEffect, useState } from 'react';
// import './App.css';
// import User from './components/User';
// import AddUser from './components/AddUser';
// import axios from 'axios';

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/mydatabase/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   const onAdd = async (name, email) => {
//     try {
//       const response = await axios.post('http://localhost:3001/api/users', {
//         name,
//         email,
//       });
//       // Use the newly added user data returned from the server
//       setUsers((prevUsers) => [...prevUsers, response.data]);
//     } catch (error) {
//       console.error('Error adding user:', error);
//     }
//   };
  

//   const onDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3001/api/users/${id}`);
//       // Filter out the deleted user from the state
//       setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   return (
//     <div className='App'>
//       <h3>React CRUD with Express and MongoDB</h3>
//       <AddUser onAdd={onAdd} />
//       <div>
//         {users.map((user) => (
//           <User
//             id={user._id} // Use _id instead of id
//             key={user._id}
//             name={user.name}
//             email={user.email}
//             onDelete={onDelete}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Insert from './pages/Insert';
import Update from './pages/Update';
import Delete from './pages/Delete';
import View from './pages/ViewUsers';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/view" element={<View />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
