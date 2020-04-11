import { asyncFetch } from "../action-types/async-action-types.js";
import { dataTableActionTypes } from '../action-types/data-table-action-types';
import { sheetFetchRequest } from './utils';


export const loadDataTables = () => dispatch => {
  dispatch({ type: asyncFetch.ASYNC_FETCH });
  sheetFetchRequest({ range: "dataTable!A1:C3", majorDimension: "ROWS" }, dispatch).then((result) => {
    dispatch({type: dataTableActionTypes.DATA_TABLE_FETCH_SUCCESS, payload: result});
    dispatch({ type: asyncFetch.ASYNC_FETCH_SUCCESS });
  }, (error) => {
    dispatch({ type: asyncFetch.ASYNC_FETCH_FAILURE, payload: error });
  });
};
