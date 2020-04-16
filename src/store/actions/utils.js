import * as _ from "lodash";
import { updateSignInStatus } from "./profile-actions";

const spreadsheetId = "17ZRne-mMFe86ordb19E2TSqlnJM7tQp18-PAKkjfTFA";
export const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y"
];

const pivotRowDimension = response => {
  const dataSet = [];
  const columns = response[0];
  Object.keys(response).map(rowNumKey => {
    const row = {};
    if (rowNumKey > 0) {
      const item = response[rowNumKey];
      columns.map((column, index) => {
        row[column] = item[index];
        return column;
      });
      dataSet.push(row);
    }
    return row;
  });

  const result = {
    dataSet,
    columns,
    rows: response,
    total: response.length - 1
  };

  return result;
};

const findQueryParamIndex = path => {
  const queryParamsByIndex = {};
  path.split("/").map((item, index) => {
    if (item.indexOf(":") > -1) {
      queryParamsByIndex[index] = item;
    } else if (item.indexOf("*") > -1) {
      queryParamsByIndex[index] = item;
    }

    return item;
  });
  return queryParamsByIndex;
};

export const compareRoutePaths = (routePath, locationPath) => {
  const queryPrams = findQueryParamIndex(routePath);
  const response = [];
  Object.keys(queryPrams).map(entity => {
    locationPath.split("/").map((item, index) => {
      if (parseInt(entity) === index) {
        response.push(queryPrams[entity]);
      } else {
        response.push(item);
      }

      return item;
    });

    return entity;
  });
  if (response.length > 0) {

    return routePath === response.join("/").trim();
  }

  return routePath === locationPath;
};

export const sheetFetchRequest = async options => {
  return await new Promise(async (resolve, reject) => {
    try {
      const response = await window.gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId,
        ...options
      });
      const { result } = response;
      const dataSet = pivotRowDimension(result.values);
      resolve({ ...result, values: dataSet });
    } catch (error) {
      reject(error);
    }
  });
};

const addOrUpdateSpreadSheet = async (range, params) => {

  return await window.gapi.client.sheets.spreadsheets.values.update(
    { spreadsheetId, range, valueInputOption: "RAW" },
    {
      majorDimension: "ROWS",
      values: [
        [
          ...params
        ]
      ]
    }
  );
}

export const setMetaDataCodes = async (range, params, codesTableInfo) => {
  return await new Promise(async (resolve, reject) => {
    try {
      const mataDataCodes = await addOrUpdateSpreadSheet(range, [
        parseInt(params.id),
        params.codeRef,
        params.code,
        params.parentId,
        params.value,
        params.selected
      ]);
      if (!params.isEdit) {
        const dataTableUpdateStatus = await addOrUpdateSpreadSheet('dataTable!A3:C3', [
          codesTableInfo.sheetName,
          parseInt(codesTableInfo.noOfCols),
          parseInt(params.id) + 1
        ]);
        resolve({ mataDataCodes, dataTableUpdateStatus });
      } else {
        resolve({ mataDataCodes });
      }
      
    } catch (error) {
      reject(error);
    }
  });
};

export const addYouTubeRecordByValues = async payload => {
  return await new Promise(async (resolve, reject) => {
    try {
      const { params, youTubeTableInfo } = payload;
      const noOfRowsInSheet = parseInt(params.id)+1;
      const range = `${youTubeTableInfo.sheetName}!A${noOfRowsInSheet}:${letters[youTubeTableInfo.noOfCols]}${noOfRowsInSheet}`;

      const newYouTubeRec = await addOrUpdateSpreadSheet(range, [
        parseInt(params.id),
        params.uid,
        params.title,
        params.tags,
        parseInt(params.codeValueId),
        params.description
      ]);
      if (!params.isEdit) {
        const dataTableUpdateStatus = await addOrUpdateSpreadSheet('dataTable!A2:C2', [
          youTubeTableInfo.sheetName,
          parseInt(youTubeTableInfo.noOfCols),
          noOfRowsInSheet
        ]);
        resolve({ newYouTubeRec, dataTableUpdateStatus });
      } else {
        resolve({ newYouTubeRec });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const buildSheetRangeByDataTable = options => {
  const returnVal = `${options.sheetName}!A1:${letters[options.noOfCols]}${
    options.noOfRows
  }`;

  return returnVal;
};

export const loadGoogleDocApi = async dispatch => {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/client.js";
      script.onload = () => {
        window.gapi.load("client", () => {
          window.gapi.client
            .init({
              apiKey: "AIzaSyAOtvFK-xrogKuDBlG7QZck9Jb77XCvnVg",
              discoveryDocs: [
                "https://sheets.googleapis.com/$discovery/rest?version=v4"
              ],
              clientId:
                "342704324971-89a8ri3ijk6sksgub4hll38087fjrqbp.apps.googleusercontent.com",
              scope: "https://www.googleapis.com/auth/spreadsheets"
            })
            .then(
              () => {
                updateSignInStatus(
                  window.gapi.auth2.getAuthInstance().isSignedIn.get(),
                  dispatch
                );
                resolve({ status: 400 });
              },
              error => {
                console.warn(error);
              }
            );
        });
      };
      document.body.appendChild(script);
    } catch (exception) {
      reject(exception);
    }
  });
};

export const filtersBean = (codeTableInfo, codes) => {
  const filtersDataSet = _.get(codes, "values.dataSet");
  const groupNames = _.filter(filtersDataSet, o => parseInt(o.parentId) === 0);
  const filters = {};
  groupNames.forEach(item => {
    const sections = _.filter(filtersDataSet, o => o.parentId === item.id);
    sections.forEach(label => {
      label.tags = _.filter(filtersDataSet, o => o.parentId === label.id);
    });
    filters[item.code] = {
      ...item,
      displayLabel: item.value,
      sections
    };
  });

  return {
    codeTableInfo,
    codes,
    groupNames,
    filters
  };
};
