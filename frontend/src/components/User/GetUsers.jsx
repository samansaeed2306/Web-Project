import React, { useEffect, useState } from 'react';
import Card from '../Card';
import '../card.css';
import Navbar from '../Navbar';

function GetUsers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/user/getAllUsers');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteUser = (userId) => {
    setData((prevData) => prevData.filter((user) => user._id !== userId));
  };

  const handleUpdateUser = (updatedUser) => {
    setData((prevData) =>
      prevData.map((user) => (user._id === updatedUser._id ? updatedUser : user))
    );
  };

  return (
    <div>
      <Navbar />
      <div className="card-container">
        {data.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            title={item.firstName}
            description={item.email}
            role={item.role}
            onDeleteUser={handleDeleteUser}
            onUpdateUser={handleUpdateUser}
          />
        ))}
      </div>
    </div>
  );
}

export default GetUsers;
