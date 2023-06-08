import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './home.css';
import {Route, Routes} from 'react-router-dom';
import Login from './User/Login'


function Home() {

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Welcome to Our Coursera!</h1>
       
        <div className="link-container">
          <Link to="/login" className="get-started-link">
           Get Started
          </Link>
        </div>
      </div>
      {/* Add your home page content here */}
    </div>
  );
}

function LoginHome (){
  return(
    <Login/>
  )
}
export default function LandingPage() {
  return (
      <div className="App ">
    <Routes>
         <Route path="/login" element={<LoginHome />} />
         <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}



