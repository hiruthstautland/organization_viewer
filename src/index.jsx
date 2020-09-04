import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import ErrorBoundary from "./ErrorBoundary";

Sentry.init({
  dsn: process.env.SENTRY_DSN_FRONT,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

render(
  <Auth0Provider
    domain={process.env.AUTH_DOMAIN}
    clientId={process.env.AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Auth0Provider>,
  document.getElementById("app")
);
