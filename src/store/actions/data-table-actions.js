import { asyncFetch } from "../action-types/async-action-types.js";
import { dataTableActionTypes } from '../action-types/data-table-action-types';
import { sheetFetchRequest } from './utils';


export const loadDataTables = () => async dispatch => {
  try {
    dispatch({ type: asyncFetch.ASYNC_FETCH });
    const result = await sheetFetchRequest({ range: "dataTable!A1:C3", majorDimension: "ROWS" }, dispatch);
    dispatch({type: dataTableActionTypes.DATA_TABLE_FETCH_SUCCESS, payload: result});
  } catch(error) {
    dispatch({ type: asyncFetch.ASYNC_FETCH_FAILURE, payload: error });
  }
};
