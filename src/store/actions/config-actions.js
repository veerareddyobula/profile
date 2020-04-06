import { configActionTypes } from "./../action-types/config-action-types";

export const getNoteApplicationRoutes = () => dispatch => {
  dispatch({
    type: configActionTypes.ROUTES_CONFIG_FETCH_SUCCESS,
    payload: [
      {
        exact: true,
        path: "/products/notes/dashboard",
        key: "dashboard",
        label: "Dashboard",
        component: "DashboardContainer"
      },
      {
        exact: true,
        path: "/products/notes/post/:id/details",
        key: "postDetails",
        label: "Details",
        component: "PostDetailsContainer"
      }
    ]
  });
};

export const getHistory =  (props) => (dispatch) =>{
  return {
    push: (pathname, state) => {
      console.log('--== locationHistoryPush ', props, pathname, state);
      dispatch({ type: configActionTypes.LOCATION_HISTORY_PUSH_REDIRECT, payload: {...props.location, ...state}});
      props.history.push({pathname: pathname, state:{...state, history: {...props.location, ...state} } });
    }
  }
}
