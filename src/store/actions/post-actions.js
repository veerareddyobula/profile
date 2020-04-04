import { asyncFetch } from "../action-types/async-action-types.js";
import { postActionTypes } from "../action-types/post-action-types";
import { sheetFetchRequest, buildSheetRangeByDataTable } from "./utils";

export const loadPosts = dataTable => dispatch => {
  dispatch({ type: asyncFetch.ASYNC_FETCH });
  const range = buildSheetRangeByDataTable(dataTable);
  sheetFetchRequest({ range, majorDimension: "ROWS" }, dispatch).then(
    result => {
      dispatch({ type: postActionTypes.POST_FETCH_SUCCESS, payload: result });
    }
  );
};
