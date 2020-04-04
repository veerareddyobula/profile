import { postActionTypes } from "../action-types/post-action-types";

export const PostStore = (state, action) => {
  if (typeof state === "undefined") {
    return {
      majorDimension: "ROWS",
      range: null,
      values: []
    };
  }
  switch (action.type) {
    case postActionTypes.POST_FETCH_SUCCESS:
      return { ...action.payload };
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
