import { configActionTypes } from "./../action-types/config-action-types";

export const ConfigStore = (state, action) => {
  if (typeof state === "undefined") {
    return {
      notes: {
        routes: []
      }
    };
  }
  switch (action.type) {
    case configActionTypes.ROUTES_CONFIG_FETCH_SUCCESS:
      return { ...state, notes: Object.assign({ route: action.payload }) };
    default:
      return state;
  }
};
