import * as _ from "lodash";
import { configActionTypes } from "./../action-types/config-action-types";
import {
  sheetFetchRequest,
  buildSheetRangeByDataTable,
  filtersBean
} from "./utils";

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

export const getHistory = props => dispatch => {
  return {
    push: (pathname, state) => {
      dispatch({
        type: configActionTypes.LOCATION_HISTORY_PUSH_REDIRECT,
        payload: { ...props.location, ...state }
      });
      props.history.push({
        pathname: pathname,
        state: { ...state, history: { ...props.location, ...state } }
      });
    }
  };
};

export const toggleCategories = (filters, groupName, section) => dispatch => {
  const temp = _.find(
    filters[groupName].sections,
    item => item.id === section.id
  );
  if (temp.selected) {
    temp.selected = false;
  } else {
    temp.selected = true;
  }
  dispatch({
    type: configActionTypes.CODE_FILTERS_TOGGLE_EVENT,
    payload: filters
  });
};

export const toggleSubCategories = (
  filters,
  groupName,
  section,
  label
) => dispatch => {
  const temp = _.find(
    filters[groupName].sections,
    item => item.id === section.id
  );
  const selectedLabel = _.find(temp.tags, item => item.id === label.id);
  if (selectedLabel.selected) {
    selectedLabel.selected = false;
  } else {
    selectedLabel.selected = true;
  }
  dispatch({ type: configActionTypes.FILTERS_TOGGLE_EVENT, payload: filters });
};

export const getCodes = codesTableInfo => dispatch => {
  const range = buildSheetRangeByDataTable(codesTableInfo);
  sheetFetchRequest({ range, majorDimension: "ROWS" }, dispatch).then(
    result => {
      dispatch({
        type: configActionTypes.FILTERS_FETCH_CODES_SUCCESS,
        payload: filtersBean(codesTableInfo, result)
      });
    }
  );
};
