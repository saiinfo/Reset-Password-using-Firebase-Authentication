import React from "react";
import { useUserContext } from "../context/userContext";
import '../index.css';
import '../App';

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();

  return (
    <div className="welcome-container">
      <h2>Welcome to Our Website</h2>
      <p>
        This is an example of an attractive welcome page in React.
      </p>
      
     
      
      <h3>Name: {user.displayName}</h3>
      <h3>Email: {user.email}</h3>
      <button onClick={logoutUser}>Log out</button>
    </div>
  );
};

export default Dashboard;
