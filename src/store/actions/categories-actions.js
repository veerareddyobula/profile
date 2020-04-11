import { asyncFetch } from "../action-types/async-action-types.js";
import { categoriesActionTypes } from "../action-types/categories-action-types";
import { sheetFetchRequest, buildSheetRangeByDataTable } from "./utils";

export const loadCategories = dataTable => dispatch => {
  dispatch({ type: asyncFetch.ASYNC_FETCH });
  const range = buildSheetRangeByDataTable(dataTable);
  sheetFetchRequest({ range, majorDimension: "ROWS" }, dispatch).then(
    result => {
      dispatch({ type: categoriesActionTypes.CATEGORIES_FETCH_SUCCESS, payload: result });
      dispatch({ type: asyncFetch.ASYNC_FETCH_SUCCESS });
    }
  );
};
