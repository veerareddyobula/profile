import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Route, withRouter } from "react-router-dom";

import Navbar from "./components/navbar";
import noteRoutes from "./notes.routes";
import {
  getNoteApplicationRoutes,
  loadDataTables,
  getCodes,
  loadYouTubeStore
} from "store/actions";
import { loadGoogleDocApi } from "store/actions/utils";

import { Breadcrum } from "notes/components/breadcrum";
import PreLoader from "notes/components/pre-loader";

import "./notes.styles.scss";

const notesRouter = props => {
  const [googleDocApiReady, setGoogleDocApiReady] = React.useState(false);
  const dispatch = useDispatch();
  const { asyncStore, dataTableStore } = useSelector(state => {
    return {
      asyncStore: state.AsyncStore,
      dataTableStore: state.DataTableStore
    };
  });
  const { values } = dataTableStore;
  const { dataSet } = values;

  React.useEffect(() => {
    const setGoogleDocApi = async () => {
      await loadGoogleDocApi(dispatch);
      await dispatch(loadDataTables());
      await dispatch(getNoteApplicationRoutes());
      setGoogleDocApiReady(true);
    };
    setGoogleDocApi();
  }, []);

  React.useEffect(() => {
    if (dataSet) {
      const [codesTableInfo] = dataSet.filter(
        item => item.sheetName === "codes"
      );
      dispatch(getCodes(codesTableInfo));
      const [youTubeTableInfo] = dataSet.filter(
        item => item.sheetName === "youtube"
      );
      dispatch(loadYouTubeStore(youTubeTableInfo));
    }
  }, [dataSet]);

  if (!googleDocApiReady) {
    return <PreLoader />;
  }

  return (
    <React.Fragment>
      <Navbar {...props} />
      <div id="myDeveloperNotes" className="container-fluid">
        <Breadcrum {...props} />
        <div
          className="container-fluid m-1 grey lighten-3"
        >
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
    </React.Fragment>
  );
};

export default withRouter(notesRouter);
