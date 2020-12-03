import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import NewUser from "../pages/newUser/NewUser";
import Feed from "../pages/feed/Feed";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/about" component={About} />
    <Route exact path="/feed" component={Feed} />
    <Route exact pathe="/user/new" component={NewUser} />

  </Switch>
);
