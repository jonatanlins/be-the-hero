import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Logon from "./pages/Logon";
import NewIncident from "./pages/NewIncident";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
