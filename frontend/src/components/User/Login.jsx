import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Add isAdmin state

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/login', { email, password });
      console.log(response.data);
      setAlertType('alert-success');
      setAlertMessage('User logged in successfully!');
      setShowAlert(true);

      // Check if the user role is admin
      if (response.data.role === 'admin') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.error(error);
      setAlertType('alert-danger');
      setAlertMessage('Error logging in. Please try again.');
      setShowAlert(true);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto custom-card' style={{ maxWidth: '500px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className='fw-bold mb-2 text-uppercase'>Login</h2>
              <p className='text-white-50 mb-5'>Please enter your login and password!</p>
              <MDBInput
                wrapperClass='mb-4 mx-5 w-350'
                labelClass='text-white'
                label='Email address'
                id='formControlLg'
                type='email'
                size='lg'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-550'
                labelClass='text-white'
                label='Password'
                id='formControlLg'
                type='password'
                size='lg'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className='small mb-3 pb-lg-2'>
                <a className='text-white-50' href='#!'>
                  Forgot password?
                </a>
              </p>
              <Link to="/adminpage"> <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleLogin}>
                Login
              </MDBBtn></Link>
             
              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size='lg' />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size='lg' />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size='lg' />
                </MDBBtn>
              </div>
              <div>
                <p className='mb-0'>
                  Don't have an account? <a href='#!' className='text-white-50 fw-bold'>Sign Up</a>
                </p>
              </div>
              {showAlert && (
                <div className={`alert ${alertType}`} role='alert'>
                  {alertMessage}
                </div>
              )}
            </MDBCardBody>
          </MDBCard>
          {/* Add the Link component for AdminPage */}
       
            <div className='text-white-50 fw-bold mt-3'>
              
            </div>
         
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
