import logo from './logo.svg';
import Login from './components/User/Login'
import './App.css';
import CreateUser from './components/User/CreateUser';
import Navbar from './components/Navbar';
import GetUsers from './components/User/GetUsers';
import {Route, Routes, Link} from 'react-router-dom'
import Routers from './routes/Routes'
import Home from './components/Home';
import AdminPage from './components/Admin/AdminPage';
import LandingPage from './components/Home';

function App() {
  return (
  <>
  <Routers/>
    <Home/>
  </>
  );
}

export default App;
