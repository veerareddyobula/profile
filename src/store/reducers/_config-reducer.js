import { configActionTypes } from "./../action-types/config-action-types";

export const ConfigStore = (state, action) => {
  if (typeof state === "undefined") {
    return {
      notes: {
        routes: []
      },
      history: []
    };
  }
  switch (action.type) {
    case configActionTypes.ROUTES_CONFIG_FETCH_SUCCESS:
      return { ...state, notes: Object.assign({ route: action.payload }) };
    case configActionTypes.LOCATION_HISTORY_PUSH_REDIRECT:
      const {history} = state;
      history.push(action.payload);
      return { ...state, history};
    default:
      return state;
  }
};
