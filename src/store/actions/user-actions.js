import {asyncFetch} from './../action-types/user-action-types.js';

export const initCurrentUserSession = (currentUserData) => (dispatch) => {
    console.log('--== 2) initCurrentUserSession ==--', currentUserData, asyncFetch, window.gapi.client.sheets.spreadsheets);
    dispatch({type: asyncFetch.ASYNC_FETCH})
    window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: "17ZRne-mMFe86ordb19E2TSqlnJM7tQp18-PAKkjfTFA",
        range: 'Class Data!A2:E',
     }).then((response) => {
       console.log('--== Google Spreadsheet --== ', response);
     });
  }
