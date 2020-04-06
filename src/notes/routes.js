import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, withRouter } from "react-router-dom";

import GApiService from "./components/gapi-service";
import Navbar from "./components/navbar";
import noteRoutes from "./notes.routes";
import {getNoteApplicationRoutes} from "./../store/actions/config-actions";

import "./notes.styles.scss";

const notesRouter = props => {

  React.useEffect(() => {
    props.getNoteApplicationRoutes();
  }, [])

  return (
    <GApiService {...props}>
      <Navbar {...props} />
      <div id="myDeveloperNotes" className="container-fluid mt-1">
        <HashRouter>
          {noteRoutes.map(entity => (
            <Route {...entity} />
          ))}
        </HashRouter>
      </div>
    </GApiService>
  );
};

const mapStateToProps = state => {
  return {
    configStore: state.ConfigStore
  };
};

export default withRouter(connect(mapStateToProps, {getNoteApplicationRoutes})(notesRouter));
