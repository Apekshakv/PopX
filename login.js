import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import sc from './Screenshot (121).png';
const Signup = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((formValue) => ({
      ...formValue,
      [name]: value
    }));
    
  };
  console.log(formValue)
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/re');
    localStorage.setItem( "user" ,JSON.stringify(formValue))
    const locatdata = JSON.parse(localStorage.getItem("user"));
    let array = [locatdata]
    console.log(array)
  };


  return (
    <>
    <div className="signup-container">

        <h2> PopX account</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ color: 'rgb(108, 37, 255)' }}>
  Full Name<span style={{ color: 'red' }}>*</span>
</label>

        <input type="text" name="name" onChange={handleChange} required />
<label style={{ color: 'rgb(108, 37, 255)' }}>
  Phone number<span style={{ color: 'red' }}>*</span>
</label>

        <input type="number" name="phone" onChange={handleChange} required />
      
      <label style={{ color: 'rgb(108, 37, 255)' }}>
        Email address<span style={{ color: 'red' }}>*</span>
        </label>

        <input type="email" name="email" onChange={handleChange} required />

        <label style={{ color: 'rgb(108, 37, 255)' }}>
  Password<span style={{ color: 'red' }}>*</span>
</label>

        <input type="password" name="password" onChange={handleChange} required />
        
       
      <label style={{ color: 'rgb(108, 37, 255)' }}>
       Company name<span style={{ color: 'red' }}>*</span>
      </label>
        <input type="text" name="company" onChange={handleChange} required />
       
        <label>Are you an Agency?<span style={{color : 'red'}}>*</span></label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              onChange={handleChange}
              required
            />{' '}
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              onChange={handleChange}
            />{' '}
            No
          </label>
        </div>

        <button type="submit">Create Account</button>
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
            marginTop: '100px',
            objectFit: 'cover',
          }}
        />
      </Link>
    </div>
     
    </>
  
  );
};

export default Signup;
