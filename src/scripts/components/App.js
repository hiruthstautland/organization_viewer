import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import ReactDOM from "react-dom";
import "./style.scss";

import { AutocompleteView } from "./AutocompleteView";
import { Navigation } from "./common/Navigation";
import { LoginView } from "./common/LoginView";

// route with navbar
const NavbarRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <>
        <Navigation /> <Component {...props} />
      </>
    )}
  />
);

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <LoginView exact path="/" />
          <NavbarRoute
            exact
            path="/autocomplete"
            component={AutocompleteView}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
