import React, { useState } from 'react';
import './create.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import sc from './Screenshot (121).png';
const Create = () => {
  const [formData, setFormData] = useState({
    password: '',
    email: ''
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      storedUser.password === formData.password &&
      storedUser.email === formData.email
    ) {
       navigate('/con');
    } else {
      alert('No account found')
    }
  };

  return (
    <div className="create-container">
   
    <h2> PopX account</h2>
     <p style={{
        color : 'gray'
     }}> Lorem ipsum dolor sit amet,</p>
    <p style={{
        color : 'gray'
     }}> consectetur adipisicing elit.</p>
      <form onSubmit={handleSubmit}>
        
        <label style={{
            color: 'rgb(108, 37, 255)'
        }}>Email address</label>
        <input type="email" name="email" onChange={handleChange} required />

         <label style={{
            color: 'rgb(108, 37, 255)'
        }}>Password</label>
        <input type="password" name="password"  placeholder='Enter password'      onChange={handleChange} required />

       
        <button type="submit">Login</button>
      </form>
       <Link to="/" style={{ display: 'block', textAlign: 'center' }}>
              <img
                src={sc}
                alt="Screenshot"
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  border: '1px solid #ccc',
                  marginTop: '320px',
                  objectFit: 'cover',
                }}
              />
            </Link>
    </div>
  );
};

export default Create;