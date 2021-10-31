import React from "react";
import { OAUTH_CLIENT_ID } from "../constants/global";
import { GoogleLogin } from "react-google-login";

function Login() {
  const onSuccess = (res) => {
    console.log("Login Success : ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login Failure : ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={OAUTH_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        buttonText="Login"
      />
    </div>
  );
}

export default Login;
