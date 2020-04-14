import React from "react";
import { HashRouter, Route, withRouter } from "react-router-dom";

import AdminHomeContainer from "./admin-home";
import AdminEditContainer from "./admin-edit";

export default withRouter(() => {
  return (
    <React.Fragment>
      <HashRouter>
        <Route
          exact
          path="/products/notes/admin/home"
          component={AdminHomeContainer}
        />
        <Route
          exact
          path="/products/notes/admin/:id/edit"
          component={AdminEditContainer}
        />
      </HashRouter>
    </React.Fragment>
  );
});
