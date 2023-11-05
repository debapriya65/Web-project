import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {pgs} from './Pages'
import { Routes,Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios'
import { Margin, Widgets } from '@mui/icons-material';
const pages = ['My Cart'];
const settings = ['Profile','Logout'];

const ResponsiveAppBar = () => {
  const navigate = useNavigate()
    console.log('pages',pgs)
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const menuClick = (e,b)=>{
    e.preventDefault()
    navigate(`/${b}`)    
  }
  const checkout = (e)=>{
    e.preventDefault()
    navigate('/cart')
}
  const logOut = (e)=>{
    e.preventDefault()
    let token = localStorage.getItem('token')
      console.log('logout page token: ',token)
        axios.get('http://localhost:5000/users/logout',{
          headers:{
            'Authorization':token
          }
        })
        .then(res=>{
          console.log('logout ',res.data)
          localStorage.setItem('token','')
          localStorage.setItem('id','')
          localStorage.setItem('acc','')
          localStorage.setItem('user','')
          localStorage.setItem('state','')
          
          navigate('/')
        })
  }
  return (
    <div  className="navbar">
    <ul className="navbar-list">
    <div className="khali2"></div>
      <li className="navbar-item">
        <Link to="/about" className="navbar-link">About</Link>
      </li>
      <li className="navbar-item">
        <Link to="/home" className="navbar-link">Home</Link>
      </li> 
      <li onClick = {checkout} className="navbar-item">
        <Link className="navbar-link">Checkout</Link>
      </li>
      <div className="khali"></div>
      <li className="navbar-item">
        <Link to="/profile" className="navbar-link">Profile</Link>
      </li>
      <li onClick = {logOut} className="navbar-item">
        <Link className="navbar-link">Logout</Link>
      </li>
    </ul>
  </div>
  );
};
 export default ResponsiveAppBar;
