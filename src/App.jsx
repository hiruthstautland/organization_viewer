import "@babel/polyfill";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style";
import * as Sentry from "@sentry/react";
import { ViewLogin } from "./ViewLogin";
import { ViewLandingPage } from "./ViewLandingPage";
import { Spinner } from "./Spinner";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Sentry.ErrorBoundary fallback={"An error has occured"}>
      <div className="app">
        {!isAuthenticated && <ViewLogin />}
        {isAuthenticated && user && <ViewLandingPage />}
      </div>
    </Sentry.ErrorBoundary>
  );
};

export default App;
