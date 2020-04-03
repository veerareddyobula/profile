import { asyncFetch } from "../action-types/async-action-types.js";
import { dataTableActionTypes } from '../action-types/data-table-action-types';
import { sheetFetchRequest } from './utils';


export const loadDataTables = () => dispatch => {
  dispatch({ type: asyncFetch.ASYNC_FETCH });
  sheetFetchRequest({ range: "dataTable!A1:D4", majorDimension: "ROWS" }, dispatch).then((result) => {
    dispatch({type: dataTableActionTypes.DATA_TABLE_FETCH_SUCCESS, payload: result});
  }, (error) => {
    console.log('--== Fetch Failure ==--', error);
  });
};
