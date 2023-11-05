import * as React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const ResponsiveAppBar = () => {

  const logOut = (e)=>{

  }
  return (
    <div  className="navbar">
    <ul className="navbar-list">
    <div className="khali2"></div>
      <li className="navbar-item">
        <Link to="/about" className="navbar-link">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/" className="navbar-link">Profile</Link>
      </li>
      <div className="khali"></div>
      <li onClick = {logOut} className="navbar-item">
        <Link className="navbar-link">Logout</Link>
      </li>
    </ul>
  </div>
  );
};
 export default ResponsiveAppBar;