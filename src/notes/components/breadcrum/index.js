import React from "react";
import { connect } from "react-redux";

import noteRoutes from "notes/notes.routes";
import { compareRoutePaths } from "store/actions/utils";

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
    const { history } = configStore;
    const temp = {};
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
    
    const entity = [];
    noteRoutes.forEach(
      route => {
        if(route.routes ) {
           const subRoutes = []
           route.routes.forEach(item => {
            if (compareRoutePaths(item.path, location.pathname)) {
              subRoutes.push(item);
            }
          });
          entity.push(...subRoutes);
        } else if(compareRoutePaths(route.path, location.pathname)) {
          entity.push(route);
        }
      }
    );
    if (entity && entity.length > 0) {
      const [route] = entity;
      temp[route.path] = {
        ...route,
        path: null
      };
      setLocations(Object.values(temp));
    }
  }, [location]);

  return (
    <div className="container">
      <div className="d-flex p-1 red accent-2 white-text">
        {locations &&
          locations.map((item, index) => {
            return (
              <React.Fragment key={`route_${index}`}>
                <div>
                  {item.path ? (
                    <a href={`#${item.path}`} className="white-text">{item.label}</a>
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
            className="progress red"
            style={{ height: "6px", marginTop: "0px" }}
          >
            <div className="indeterminate amber"></div>
          </div>
        )}
      </div>
    </div>
  );
});
