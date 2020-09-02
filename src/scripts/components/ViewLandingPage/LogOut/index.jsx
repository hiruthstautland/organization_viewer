import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style";

export const LogOut = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="btn logout__btn"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Ut
    </button>
  );
};
