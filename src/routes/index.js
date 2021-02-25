import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../utils/history";
import Community from "../pages/Community";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Community} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
