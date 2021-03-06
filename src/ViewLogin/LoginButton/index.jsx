import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="login__button" onClick={() => loginWithRedirect()}>
      Logg In
    </button>
  );
};
