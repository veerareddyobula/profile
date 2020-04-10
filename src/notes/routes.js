import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, withRouter } from "react-router-dom";

import GApiService from "./components/gapi-service";
import Navbar from "./components/navbar";
import noteRoutes from "./notes.routes";
import { getNoteApplicationRoutes } from "./../store/actions/config-actions";

import { Breadcrum } from "notes/components/breadcrum";
import PreLoader from "notes/components/pre-loader";

import "./notes.styles.scss";

const notesRouter = props => {
  const { asyncStore } = props;
  React.useEffect(() => {
    props.getNoteApplicationRoutes();
  }, []);

  return (
    <GApiService {...props}>
      <Navbar {...props} />
      <div id="myDeveloperNotes" className="container-fluid">
        <Breadcrum {...props} />
        <div
          className="container-fluid m-1 grey lighten-3"
          style={{ minHeight: "100vh" }}
        >
          <div className="row">
            {asyncStore && asyncStore.isLoading ? (
              <PreLoader />
            ) : (
              <React.Fragment>
                <HashRouter>
                  {noteRoutes.map(entity => (
                    <Route {...entity} />
                  ))}
                </HashRouter>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </GApiService>
  );
};

const mapStateToProps = state => {
  return {
    asyncStore: state.AsyncStore,
    configStore: state.ConfigStore,
    dataTableStore: state.DataTableStore
  };
};

export default withRouter(
  connect(mapStateToProps, { getNoteApplicationRoutes })(notesRouter)
);
