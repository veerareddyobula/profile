import React, { Component, Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";

import LoginContainer from "../container/login/login-container";
import DashboardContainer from '../container/dashboard/dashboard-container'

class FrontEndRouter extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Route
            exact
            path="/profile/frontend/login"
            component={LoginContainer}
          />
          <Route
            exact
            path="/profile/frontend/dashboard"
            component={DashboardContainer}
          />
        </HashRouter>
      </Fragment>
    );
  }
}

export default FrontEndRouter;
