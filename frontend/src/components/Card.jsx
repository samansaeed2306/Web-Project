import React, { useState } from 'react';
import axios from 'axios';
import './card.css';

function Card({ id, title, description, role, onDeleteUser, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`http://localhost:5000/user/deleteUser/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });
        if (response.status === 200) {
          onDeleteUser(id);
        } else {
          console.error('Error deleting user:', response.status);
        }
      }
     
        catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:5000/user/updateUser/${id}`, {
        firstName: updatedTitle,
        email: updatedDescription
      }
      
      , {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      if (response.status === 200) {
        const updatedUser = response.data;
        setIsEditing(false);
        onUpdateUser(updatedUser); // Update the user in the UI with the updated user
      } else {
        console.error('Error updating user:', response.status);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="card">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img
          src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
          className="img-fluid"
          alt="Card Background"
        />
        <a href="#!">
          <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </div>
      <div className="card-body">
        {!isEditing ? (
          <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="button-container">
              <button className="btn-primary btn-dark edit" onClick={handleEdit}>
                <i className="fas fa-edit"></i>
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                className="form-control"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button className="btn btn-primary" onClick={handleUpdate}>
                Update
              </button>
              <button className="btn btn-secondary" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
