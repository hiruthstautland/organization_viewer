import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style";

import { Navigation } from "./common/Navigation";
import { ViewAutocomplete } from "./ViewAutocomplete";
import { ViewMediaQueries } from "./ViewMediaQueries";
import { ViewButtons } from "./ViewButtons";
import { ViewMyRoad } from "./ViewMyRoad";
import { ViewYourRoad } from "./ViewYourRoad";
import { ViewMyRadio } from "./ViewMyRadio";

// import { LoginView } from "./common/LoginView";
// import { ViewLandingPage } from "./ViewLandingpage";

// route with navbar
const NavbarRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <>
        <Navigation />
        <Component {...props} />
      </>
    )}
  />
);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* for working */}
        <NavbarRoute exact path="/" component={ViewMyRadio} />
        {/*  */}

        {/* <LoginView exact path="/" /> */}
        {/* <NavbarRoute
          exact
          path="/"
          component={ViewLandingPage}
        /> */}
        <NavbarRoute
          exact
          path="/view-autocomplete"
          component={ViewAutocomplete}
        />
        <NavbarRoute
          exact
          path="/view-mediaqueries"
          component={ViewMediaQueries}
        />
        <NavbarRoute exact path="/view-buttons" component={ViewButtons} />
        <NavbarRoute exact path="/view-myroad" component={ViewMyRoad} />
        <NavbarRoute exact path="/view-yourroad" component={ViewYourRoad} />
        <NavbarRoute exact path="/view-myradio" component={ViewMyRadio} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
