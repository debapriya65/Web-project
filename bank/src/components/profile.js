import React from 'react';
import './profile.css';
import ResponsiveAppBar from './Navigation.js';
import { useEffect, useState } from 'react';
const ProfilePage = () => {
  const [username, setUsername] = useState(null);
  const [account_no, setaccount_no] = useState("10000000000000000000000");
  const [email, setemail] = useState(null);
  const [ammount, setammount] = useState("10000000000000000");
  var json={"email":localStorage.getItem('accountno'),"password":localStorage.getItem('password')};
  const xhr = new XMLHttpRequest();
  xhr.open("POST","http://localhost:8080/signin");
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
      let data = xhr.response;
      data = JSON.parse(data);
      if(data==-1){
        alert('Invalid Account no or password');
      }else{
        setaccount_no(data.accountno);
        setUsername(data.username);
        //username=data.username;
        setemail(data.email);
        setammount(data.amount);
      }
      

      }
  xhr.send(JSON.stringify(json));
  
  const logout = () => {
    localStorage.setItem('password','')
    localStorage.setItem('accountno','')
    window.location.href='/';
  };
  return (
<div class="background">
  <nav class="navbar">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/profile">Profile</a></li>
      <li ><a style={{cursor:"pointer"}}onClick={logout} > Logout</a></li>
    </ul>
  </nav>
  <div class="profile-card">
  <div class="background">
      <div class="profile-card">
        <div class="profile-header">
          <h1>User Profile</h1>
        </div>
        <div class="profile-details">
          <div class="profile-row">
            <label>Username:</label>
            <span id="username">{username}</span>
          </div>
          <div class="profile-row">
            <label>User Account Number:</label>
            <span id="account-no">{account_no}</span>
          </div>
          <div class="profile-row">
            <label>Account Amount:</label>
            <span id="account-amount">${ammount}</span>
          </div>
          <div class="profile-row">
            <label>Email:</label>
            <span id="email">{email}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
    
    
    
  );
};

export default ProfilePage;