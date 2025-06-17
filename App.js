import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet,</p>
      <p>consectetur adipisicing elit.</p>

      <Link to='/create' className="purple-button">Create Account</Link>
      <Link to="/login"className='hj'>Already Registered? Login</Link>
    </div>
  );
};

export default App;