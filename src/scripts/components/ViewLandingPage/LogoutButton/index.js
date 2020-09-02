import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style";
export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="logout__container">
      <button
        className="logout__btn"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Ut
      </button>
    </div>
  );
};
