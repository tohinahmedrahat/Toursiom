import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/UseAuth";

const Regester = () => {
  const {
    signInWithGoogle,
    signOutInGoogle,
    regesterForm,
    userEmail,
    userPassword,
    error,
  } = useAuth();
  return (
    <div className="container">
      <h2>Please Regester Your Account</h2>
      <div>
        <form onSubmit={regesterForm}>
          <label>Please Enter Your Email</label>
          <br />
          <input type="email" onBlur={userEmail}></input>
          <br />
          <label>Please Enter Your Password</label>
          <br />
          <input type="password" onBlur={userPassword}></input>
          <br />
          <span>{error}</span>
          <button type="submit">Please Regester</button>
        </form>
      </div>
      <Link to="/login">Already Regester</Link>
      <div>
        <button onClick={signInWithGoogle}>Sign IN With Google</button>
        <button onClick={signOutInGoogle}>Sign Out With Google</button>
      </div>
    </div>
  );
};

export default Regester;
