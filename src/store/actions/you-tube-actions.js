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
      const {values} = result;
      dispatch({
        type: postActionTypes.YOU_TUBE_SHEET_FETCH_SUCCESS,
        payload: {...result, renderSet: values.dataSet}
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

export const searchInYouTubeStore = (youTubeStore, searchStr) => dispatch => {
  const { values } = youTubeStore;
  const { columns, dataSet } = values;
  console.log('--=== findInYouTubeStoreByColumns ===--', columns, dataSet);
  const searchResult = dataSet.filter(item => {
    let addTheRow = false;
    for (let i=0; i<columns.length; i++) {
      const col = columns[i];
      if (item[col] && item[col].toLowerCase().indexOf(searchStr) > -1) {
        addTheRow = true;
        return true
      }
    }
    return addTheRow;
  });
  console.log('--== SearchResult by Columns ', searchResult);
  dispatch({
    type: postActionTypes.YOU_TUBE_SHEET_SEARCH_SUCCESS,
    payload: {...youTubeStore, renderSet: searchResult}
  });
}
