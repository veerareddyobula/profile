import { asyncFetch } from "../action-types/async-action-types";
import { apiStatusCodes } from "../action-types/api-status-codes";
import { postActionTypes } from "../action-types/you-tube-action-types";
import {
  sheetFetchRequest,
  buildSheetRangeByDataTable,
  addYouTubeRecordByValues
} from "./utils";

export const loadYouTubeStore = dataTable => dispatch => {
  const range = buildSheetRangeByDataTable(dataTable);
  sheetFetchRequest({ range, majorDimension: "ROWS" }, dispatch).then(
    result => {
      dispatch({
        type: postActionTypes.YOU_TUBE_SHEET_FETCH_SUCCESS,
        payload: result
      });
      dispatch({ type: asyncFetch.ASYNC_FETCH_SUCCESS });
    },
    error => {
      dispatch({ type: asyncFetch.ASYNC_FETCH_FAILURE, payload: error });
    }
  );
};

export const setYouTubeRecordByValues = (
  params,
  youTubeTableInfo
) => dispatch => {
  dispatch({ type: asyncFetch.ASYNC_FETCH });
  addYouTubeRecordByValues({ params, youTubeTableInfo }).then(response => {
    dispatch({
      type: asyncFetch.ASYNC_REDIRECT_UPDATE_SUCCESS,
      payload: {
        status: apiStatusCodes.GOOGLE_SHEET_UPDATE_SUCCESS,
        params,
        youTubeTableInfo,
        response
      }
    });
  });
};
