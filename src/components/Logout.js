import React from "react";
import { OAUTH_CLIENT_ID } from "../constants/global";
import { GoogleLogout } from "react-google-login";

function Logout() {
  const onSuccess = () => {
    console.log("Logout Success");
  };

  return (
    <div>
      <GoogleLogout
        clientId={OAUTH_CLIENT_ID}
        onLogoutSuccess={onSuccess}
        buttonText="Logout"
      />
    </div>
  );
}

export default Logout;
