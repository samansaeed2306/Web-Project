import React, { useState } from 'react';
import axios from 'axios';
import './createuser.css';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon
} from 'mdb-react-ui-kit';


function CreateUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
  
    const handleSignUp = (e) => {
      e.preventDefault();
      // Create a new user object with the form data
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        role
      };
      // Send the user data to the backend server
      axios.post('http://localhost:5000/user/createUser',newUser)
      .then(response => {
        // Handle the response from the server (e.g., display success message)
        setAlertType('alert-success');
        setAlertMessage('User created successfully!');
        setShowAlert(true);
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        setAlertType('alert-danger');
        setAlertMessage('Error creating user. Please try again.');
        setShowAlert(true);
        console.error(error);
      });
  };
  return (
    <div>
    {showAlert && (
      <div className={`alert ${alertType}`}>
        {alertMessage}
    </div>
    )}

    <MDBContainer fluid>
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)',
          height: '300px',
        }}
      ></div>

      <MDBCard
        className="mx-5 mb-5 p-5 shadow-5"
        style={{
          marginTop: '-100px',
          background: 'hsla(0, 0%, 100%, 0.8)',
          backdropFilter: 'blur(30px)',
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <h2 className="fw-bold mb-5">Create New User</h2>

          <MDBRow>
            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="First name"
                id="form1"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </MDBCol>

            <MDBCol col="6">
              <MDBInput
                wrapperClass="mb-4"
                label="Last name"
                id="form1"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </MDBCol>
          </MDBRow>

          <MDBInput
            wrapperClass="mb-4"
            label="Email"
            id="form1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <MDBInput
            wrapperClass="mb-4"
            label="Role"
            id="form1"
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Subscribe to our newsletter"
            />
          </div>

          <MDBBtn className="w-100 mb-4" size="md" onClick={handleSignUp}>
            create
          </MDBBtn>

          <div className="text-center">
            <p>or sign up with:</p>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: '#1266f1' }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: '#1266f1' }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: '#1266f1' }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: '#1266f1' }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>
  );
}


export default CreateUser;
