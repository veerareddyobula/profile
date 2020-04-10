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
    case postActionTypes.POST_FETCH_SUCCESS:
      return { ...action.payload, dateLastModified: new Date().getTime() };
    case postActionTypes.POST_FETCH_FAILURE:
      return {
        majorDimension: "ROWS",
        range: null,
        values: [],
        error: action.payload
      };
    default:
      return state;
  }
};
