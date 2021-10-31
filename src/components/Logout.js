import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "";

function Logout() {
  const onSuccess = () => {
    console.log("Logout Success");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={onSuccess}
        buttonText="Logout"
      />
    </div>
  );
}

export default Logout;
