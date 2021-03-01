import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../utils/history";
import Community from "../pages/Community";
import AddCommunity from "../pages/AddCommunity";
import HelpCenter from "../pages/HelpCenter";
import MyCourses from "../pages/MyCourses";
import MyCurriculum from "../pages/MyCurriculum";
import Home from "../pages/Home";
import Quizzes from "../pages/Quizzes";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add-community" component={AddCommunity} />
        <Route path="/help-center" component={HelpCenter} />
        <Route path="/my-courses" component={MyCourses} />
        <Route path="/my-curriculum" component={MyCurriculum} />
        <Route path="/community" component={Community} />
        <Route path="/quizzes" component={Quizzes} />
      </Switch>
    </Router>
  );
};

export default Routes;
