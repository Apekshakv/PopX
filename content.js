import React from 'react';
import Redrict from './redrict';
import Signup from './login';
import o from './Screenshot (120).png';
import './Content.css';
import { Link } from 'react-router-dom';
import sc from './Screenshot (121).png';

export const Content = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  let img = localStorage.getItem('profileImageUrl');
  let textarea = localStorage.getItem('description');
  console.log(user);
  console.log(img);
  console.log(textarea);

  return (
    <>
   
    <h2>Account Settings</h2>
    <div className="content-container">
      
      <div className="profile-section">
    
        <div className="profile-image">
          <img src={img}  />
        </div>

      
        <div className="user-info">
          <h3>
            {user.name} <span><p>{user.email}</p></span>
          </h3>
          <p>{textarea}</p>
        </div>
      </div>
    </div>
     <Link to="/" style={{ display: 'block', textAlign: 'center' }}>
            <img
              src={sc}
              alt="Screenshot"
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                border: '1px solid #ccc',
                marginTop: '420px',
                objectFit: 'cover',
              }}
            />
          </Link>
     </>
  );
};