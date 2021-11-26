import React, { useCallback } from "react";
import { withRouter } from "react-router";

import app from "../firebase/initfirebase";
import key from "./SignUpKey/key"

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, inputkey } = event.target.elements;
    console.log(key, inputkey)
    if(key[0] === inputkey.value){
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/account");
      } catch (error) {
        alert(error);
      }
    }else{
      alert("Wrong Key. Contact the Admin in order to get one.")
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <br />
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br />
        <label>
          Please enter Key from Admin to Sign Up
          <input name="inputkey" type="text" placeholder="Key" />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
