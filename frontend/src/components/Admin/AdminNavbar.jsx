import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './adminnavbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleUsersClick = () => {
    setIsActive(true);
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
      <div className="container-fluid">
        <a className="navbar-brand funky-font" href="#">Our Coursera</a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className={`nav-item ${isActive ? 'active' : ''}`}>
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Courses</a>
            </li>
            <li className={`nav-item dropdown ${isActive ? 'active' : ''}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                onClick={handleUsersClick}
              >
                Users
              </a>
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/getUser">Users List</Link>
                </li>
                <li>
                <Link className="dropdown-item" to="/createUser">Create User</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="avatar-container">
            <img
              src="https://img.myloview.com/stickers/default-avatar-profile-icon-vector-social-media-user-image-700-205124837.jpg"
              alt="Avatar"
              className="avatar-image"
              onClick={handleAvatarClick}
            />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Sign In</a>
                {/* Add other dropdown items for signing in */}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
