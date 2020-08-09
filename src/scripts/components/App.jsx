import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.scss";
// import ReactDOM from "react-dom";
import { AutocompleteView } from "./AutocompleteView";
import { Navigation } from "./common/Navigation";
import { LoginView } from "./common/LoginView";
import { ViewLandingPage } from "./ViewLandingpage";

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
    <BrowserRouter>
      <Switch>
        {/* for working */}

        <NavbarRoute exact path="/" component={AutocompleteView} />

        {/*  */}
        
        {/* <LoginView exact path="/" /> */}
        {/* <NavbarRoute
          exact
          path="/"
          component={ViewLandingPage}
        /> */}
        {/* <NavbarRoute exact path="/autocomplete" component={AutocompleteView} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
