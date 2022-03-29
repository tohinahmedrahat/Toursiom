import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";
import './Login.css';

const Login = () => {
  const { userEmail, userPassword, loginForm, error } = useAuth();
  return (
    <div id="form_section">
       <div className="container" id="form_container" >
      <div>
        <h2>Please Login</h2>
      
      <form onSubmit={loginForm} className="form">
        <label>Please Enter Your Email</label>
        <br />
        <input type="email" onBlur={userEmail}></input>
        <br />
        <label>Please Enter Your Password</label>
        <br />
        <input type="password" onBlur={userPassword}></input>
        <br />
        <span>{error}</span>
        <button className="button1" type="submit">Please Login</button>
        <button className="button2">
        <Link to="/regester">Create Account</Link>
      </button>
      </form>
      </div>
      
    </div>
    </div>
   
  );
};

export default Login;
