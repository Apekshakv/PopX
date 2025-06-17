import React, { useState } from 'react';
import './Redirct.css'
import { Link, useNavigate } from 'react-router-dom';
import sc from './Screenshot (121).png';
const Redrict = () => {

  const navigate = useNavigate();

  const obj ={
    img :'',
    textarea : ''
  }
  const [imageUrl, setImageUrl] = useState(obj);
  const [text, setText] = useState(localStorage.getItem('description') )

  const handleUrlChange = (e) => {
    const url = e.target.value;
      setImageUrl((formValue) => ({
      ...formValue,
      url
    }));
    localStorage.setItem('profileImageUrl', url);
  };


  const handleTextChange = (e) => {
    const value = e.target.value;
     setText(value)
    localStorage.setItem('description', value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate('/con');
    console.log('Image URL:', imageUrl);
    console.log('Text:', text);
  };

  return (
    <>
    <div className="redrict-container">
      <h2>PopX account</h2>
      <form onSubmit={handleSubmit}>
        <h5 style={{ color: 'rgb(108, 37, 255)' }}>Enter your Profile image URL*</h5>
        <input className='op'
          type="text"
          placeholder="https://example.com/image.jpg"
          name='img'
          onChange={handleUrlChange}
          required
        />

        <textarea
          name="textarea"
          placeholder="Enter a description..."
          onChange={handleTextChange}
        />

        <button type="submit">Submit</button>
      </form>
   
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
            marginTop: '320px',
            objectFit: 'cover',
          }}
        />
      </Link>
    </>
  );
};

export default Redrict;