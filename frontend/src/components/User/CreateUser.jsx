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
import AdminNavbar from '../Admin/AdminNavbar';

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

    // Input validations
    if (!firstName.match(/^[A-Za-z]+$/)) {
      setAlertType('alert-danger');
      setAlertMessage('First name should only contain letters');
      setShowAlert(true);
      return;
    }

    if (!lastName.match(/^[A-Za-z]+$/)) {
      setAlertType('alert-danger');
      setAlertMessage('Last name should only contain letters');
      setShowAlert(true);
      return;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setAlertType('alert-danger');
      setAlertMessage('Invalid email address');
      setShowAlert(true);
      return;
    }

    if (!password || password.length < 6) {
      setAlertType('alert-danger');
      setAlertMessage('Password should be at least 6 characters long');
      setShowAlert(true);
      return;
    }

    if (!role.match(/^(students|admin|instructor)$/)) {
      setAlertType('alert-danger');
      setAlertMessage('Invalid role. Allowed roles: students, admin, instructor');
      setShowAlert(true);
      return;
    }

    // Create a new user object with the form data
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      role
    };
    const token = localStorage.getItem('token');

    // Send the user data to the backend server with the token included in the headers
    axios
      .post('http://localhost:5000/user/createUser', newUser, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      })
      .then((response) => {
        // Handle the response from the server (e.g., display success message)
        setAlertType('alert-success');
        setAlertMessage('User created successfully!');
        setShowAlert(true);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        setAlertType('alert-danger');
        setAlertMessage('Error creating user. Please try again.');
        setShowAlert(true);
        console.error(error);
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="create-user-container ">
        {showAlert && (
          <div className={`alert ${alertType}`}>{alertMessage}</div>
        )}

        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <MDBCard className="p-5 shadow-5 custom-card-height">
                <MDBCardBody className="p-5 text-center">
                  <h2 className="fw-bold mb-5">Create New User</h2>

                  <MDBRow>
                    <MDBCol>
                      <MDBInput
                        wrapperClass="mb-4 custom-input"
                        label="First name"
                        id="form1"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </MDBCol>

                    <MDBCol>
                      <MDBInput
                        wrapperClass="mb-4 custom-input"
                        label="Last name"
                        id="form1"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    wrapperClass="mb-4 custom-input"
                    label="Email"
                    id="form1"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4 custom-input"
                    label="Password"
                    id="form1"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <MDBInput
                    wrapperClass="mb-4 custom-input"
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

                  <MDBBtn
                    className="w-70 mb-4 custom-input"
                    size="md"
                    onClick={handleSignUp}
                  >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
