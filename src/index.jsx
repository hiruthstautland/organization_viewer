import React from "react";
import { render } from "react-dom";
import App from "./scripts/components/App";
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: use .env variables
render(
  <Auth0Provider
    domain="dev-tkc3o1a2.eu.auth0.com"
    clientId="wuCDM1h4Hva6e3mOwbPHy2Iuu5UNAlyJ"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("app")
);
