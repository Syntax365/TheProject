import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "";

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
        clientId={clientId}
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
