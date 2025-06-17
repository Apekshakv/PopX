import React from 'react'
import ReactDom from 'react-dom/client'
import {BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { Routesy } from './routes'
const Rootelement = document.getElementById('root')
const root = ReactDom.createRoot(Rootelement)
root.render(<Router>
   <Routesy/>
</Router>)