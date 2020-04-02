import { dataTableActionTypes } from "../action-types/data-table-action-types";

export const DataTableStore = (state, action) => {
  if (typeof state === "undefined") {
    return {
      majorDimension: "ROWS",
      range: null,
      values: []
    };
  }
  switch (action.type) {
    case dataTableActionTypes.DATA_TABLE_FETCH_SUCCESS:
      return { ...action.payload };
    case dataTableActionTypes.DATA_TABLE_FETCH_FAILURE:
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
