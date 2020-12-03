import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import NewUser from "../pages/newUser/NewUser";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact pathe="/user/new" component={NewUser} />
  </Switch>
);
