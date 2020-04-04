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
