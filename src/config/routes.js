import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import Feed from "../pages/feed/Feed";
import UserProfile from "../pages/userProfile/UserProfile";
import About from "../pages/about/About";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/about" component={About} />
    <Route exact path="/feed" component={Feed} />
    <Route path="/user/:id" component={UserProfile} />
  </Switch>
);
