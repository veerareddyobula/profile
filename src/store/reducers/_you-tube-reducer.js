import { postActionTypes } from "../action-types/you-tube-action-types";

export const YouTubeStore = (state, action) => {
  if (typeof state === "undefined") {
    return {
      majorDimension: "ROWS",
      range: null,
      values: [],
      dateLastModified: null
    };
  }
  switch (action.type) {
    case postActionTypes.YOU_TUBE_SHEET_FETCH_SUCCESS:
      return { ...action.payload, dateLastModified: new Date().getTime() };
    case postActionTypes.YOU_TUBE_SHEET_FETCH_FAILURE:
      return {
        majorDimension: "ROWS",
        range: null,
        values: [],
        error: action.payload
      };
    case postActionTypes.YOU_TUBE_SHEET_SEARCH_SUCCESS:
      return { ...action.payload, dateLastModified: new Date().getTime() };
    default:
      return state;
  }
};
