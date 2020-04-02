import { categoriesActionTypes } from "../action-types/categories-action-types";

export const CategoriesStore = (state, action) => {
  if (typeof state === "undefined") {
    return {
      majorDimension: "ROWS",
      range: null,
      values: []
    };
  }
  switch (action.type) {
    case categoriesActionTypes.CATEGORIES_FETCH_SUCCESS:
      return { ...action.payload };
    case categoriesActionTypes.CATEGORIES_FETCH_FAILURE:
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
