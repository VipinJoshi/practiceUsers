import React, { useState } from "react";
import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const handleAddUser = (userName, age) => {
    setUsers((prevState) => {
      return [...prevState, { userName: userName, age: age, id: Math.random().toString() }]
    });
  }
  return (
    <>
      <AddUsers onAddUser={handleAddUser} />
      <UsersList users={users} />
    </>
  );
}

export default App;
