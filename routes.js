import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './login';
import Redrict from './redrict';
import { Content } from './content';
import Create from './Create';
export const Routesy = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/create' element={<Login/>}/>
      <Route path='/re' element={<Redrict/>}/>
      <Route path='con' element={<Content/>}></Route>
      <Route path='/login' element={<Create/>}></Route>
    </Routes>
  );
};
