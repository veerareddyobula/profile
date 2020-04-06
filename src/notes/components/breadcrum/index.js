import React from "react";
import { connect } from "react-redux";

import noteRoutes from "notes/notes.routes";
import { replacePathParams } from "store/actions/utils";

const mapStateToProps = state => {
  return {
    asyncStore: state.AsyncStore,
    configStore: state.ConfigStore
  };
};

export const Breadcrum = connect(
  mapStateToProps,
  null
)(props => {
  const [locations, setLocations] = React.useState([]);
  const { configStore, asyncStore, location } = props;

  React.useEffect(() => {
    const temp = {};
    const { history } = configStore;
    history &&
      history.forEach(item => {
        if (item.pathname === "/") {
          temp["/"] = {
            path: "/",
            label: "Home"
          };
        } else {
          const [entity] = noteRoutes.filter(
            route => route.path === item.pathname
          );
          if (entity) {
            temp[entity.path] = entity;
          }
        }
      });

    const [entity] = noteRoutes.filter(
      route => route.path === replacePathParams(location.pathname)
    );
    temp[entity.path] = {
      ...entity,
      path: null
    };
    console.log('--== Breadcrum --== ', temp , Object.values(temp), entity, location)
    setLocations(Object.values(temp));
  }, [configStore]);

  return (
    <div className="container">
      <div className="d-flex p-1 blue lighten-5">
        {locations &&
          locations.map((item, index) => {
            return (
              <React.Fragment key={`route_${index}`}>
                <div>
                  {item.path ? (
                    <a href={`#${item.path}`}>{item.label}</a>
                  ) : (
                    item.label
                  )}
                </div>
                {index + 1 < locations.length && (
                  <div>
                    <i className="material-icons left">chevron_right</i>
                  </div>
                )}
              </React.Fragment>
            );
          })}
      </div>
      <div>
        {asyncStore && asyncStore.isLoading && (
          <div
            className="progress blue"
            style={{ height: "6px", marginTop: "0px" }}
          >
            <div className="indeterminate grey"></div>
          </div>
        )}
      </div>
    </div>
  );
});
