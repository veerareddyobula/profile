import { asyncFetch } from "../action-types/async-action-types.js";
const spreadsheetId = "17ZRne-mMFe86ordb19E2TSqlnJM7tQp18-PAKkjfTFA";

const pivotRowDimension = (response) => {
    const dataSet = [];
    const columns = response[0];
    Object.keys(response).map((rowNumKey) => {
        const row = {}
        if (rowNumKey > 0) {
            const item = response[rowNumKey]
            columns.map((column, index) => {
                row[column] = item[index]
                return column;
            });
            dataSet.push(row);
        }
        return row;
    })

    const result = {
        dataSet,
        columns,
        rows: response,
        total: response.length - 1
    }
    
    return result;
}

export const sheetFetchRequest = async (options, dispatch) => {
  return await new Promise(async (resolve, reject) => {
    try {
      const response = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId,
        ...options
      });
      dispatch({type: asyncFetch.ASYNC_FETCH_SUCCESS});
      const {result} = response;
      const dataSet = pivotRowDimension(result.values);
      resolve({...result, values: dataSet});
    } catch(error) {
      dispatch({type: asyncFetch.ASYNC_FETCH_FAILURE, payload: error});
      reject(error);
    }
  })
};

export const sheetPostRequest = async options => {
  return await window.gapi.client.sheets.spreadsheets.values.update({
    spreadsheetId,
    ...options
  });
};

export const buildSheetRangeByDataTable = options => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y'];
  const returnVal = `${options.sheetName}!A1:${letters[options.noOfCols]}${options.noOfRows}`;

  return returnVal;
}

