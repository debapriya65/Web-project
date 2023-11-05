import * as React from 'react';
import { Link } from 'react-router-dom';
import './signin.css';

export default function SignIn() {

 function submit( x,y){
  var json={"email":x,"password":y};
  const xhr = new XMLHttpRequest();
  xhr.open("POST","http://localhost:8080/signin");
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
      let data = xhr.response;
     // console.log(data);
      data = JSON.parse(data);
      if(data==-1){
        alert('Invalid Account no or password');
      }else{
        
        localStorage.setItem('accountno',data.accountno)
        localStorage.setItem('password',y)
        window.location.href='/profile';
      }
      

      }
  xhr.send(JSON.stringify(json));

 }
  return (
    <>
     
    <div style={{ width: "100%", height: "790px", display: "flex", flexDirection: "column" }}>
      <div className="bank-name">Dutch-Bangla Bank</div> {/* Add the bank name here */}
      <div style={{ width: "100%", height: "600px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      <div className="container">
        <h2>Sign In</h2>
        <form id="signInForm">
          <div>
            <label htmlFor="username">Account No : </label>
            <input
              type="text"
              id="account_no"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              required
            />
          </div>
          <button  onClick={() => submit(document.getElementById("account_no").value,document.getElementById("password").value)} style={{margin:"10px"}} type="button" >Sign In</button>

        </form>
        
              <Link style={{marginLeft:"50px",margin:"30px"}}>
                  Forgot password?
                </Link>
                <Link >
                  {"Don't have an account?"}
                </Link> 
      </div>
    </div>
    </div>
    </>
  );
}
