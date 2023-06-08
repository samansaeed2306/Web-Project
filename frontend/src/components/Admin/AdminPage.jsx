import React from 'react';
import AdminNavbar from './AdminNavbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './adminnavbar.css';

function AdminPage() {

  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <h1 style={{ color: 'black' }}>ADMIN PANEL</h1>
        <div className="link-container">
          {/* <Link to="/login" className="get-started-link">Get Started</Link> */}
        </div>
      </div>
      {/* Add your home page content here */}
    </div>
  );
}

export default AdminPage;
