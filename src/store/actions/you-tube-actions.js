import { asyncFetch } from "../action-types/async-action-types.js";
import { postActionTypes } from "../action-types/you-tube-action-types";
import { sheetFetchRequest, buildSheetRangeByDataTable, addYouTubeRecordByValues } from "./utils";

export const loadYouTubeStore = dataTable => dispatch => {
  const range = buildSheetRangeByDataTable(dataTable);
  sheetFetchRequest({ range, majorDimension: "ROWS" }, dispatch).then(
    result => {
      dispatch({ type: postActionTypes.YOU_TUBE_SHEET_FETCH_SUCCESS, payload: result });
      dispatch({type: asyncFetch.ASYNC_FETCH_SUCCESS});
    },
    error => {
      dispatch({type: asyncFetch.ASYNC_FETCH_FAILURE, payload: error});
    }
  );
};

export const setYouTubeRecordByValues = (params, youTubeTableInfo) => dispatch => {
  console.log('--==> setYouTubeRecordByValues <==-- ', params, youTubeTableInfo);
  addYouTubeRecordByValues({  params, youTubeTableInfo}).then(
    response => {
      console.log('--== addYouTubeRecordByValues --==> ', response);
    }
  )
}
