import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";

import "./Login.css";
import appLogo from "./studychat.jpg";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src={appLogo} alt="Study Channel" />
      </div>
      <Button onClick={signIn}>Sign In With Google</Button>
    </div>
  );
}

export default Login;
