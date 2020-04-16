import React from "react";
import { HashRouter, Route, withRouter } from "react-router-dom";

import AdminHomeContainer from "./admin-home";
import AdminEditContainer from "./admin-edit";
import AdminMetadataContainer from "./admin-metadata";

export default withRouter(props => {
  const { location } = props;

  const menuItem = React.useCallback((pathName, label) => {
    const classList = ["waves-effect", "waves-teal"];
    if (`#${location.pathname}` === pathName) {
      classList.push("btn")
      classList.push("red");
      classList.push("light-2");
    } else {
      classList.push("btn-flat");
    }

    return (
      <a className={classList.join(" ")} target="_self" href={pathName}>
        {label}
      </a>
    );
  });

  return (
    <React.Fragment>
      <div className="row">
        <div className="col s12">
          <ul className="d-flex">
            <li className="tab">
              {menuItem("#/products/notes/admin/home", "YouTube Store")}
            </li>
            <li className="tab">
              {menuItem("#/products/notes/admin/metadata", "Metadata Store")}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div className="divider" tabIndex="-1"></div>
        </div>
      </div>
      <div className="row" style={{padding: '1rem'}}>
        <div className="col s12">
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
            <Route
              exact
              path="/products/notes/admin/metadata"
              component={AdminMetadataContainer}
            />
          </HashRouter>
        </div>
      </div>
    </React.Fragment>
  );
});
