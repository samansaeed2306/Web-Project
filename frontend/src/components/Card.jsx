import React from 'react';
import './card.css';

function Card({ id, title, description, role, onDeleteUser }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:5000/user/deleteUser/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          onDeleteUser(id);
        } else {
          console.error('Error deleting user:', response.status);
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
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
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="button-container">
          <button className="btn btn-primary btn-dark edit">
            <i className="fas fa-edit"></i>
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
