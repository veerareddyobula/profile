import { configActionTypes } from "./../action-types/config-action-types";

export const ConfigStore = (state, action) => {
  if (typeof state === "undefined") {
    return {
      notes: {
        routes: [],
        codes: {}
      },
      history: []
    };
  }
  const {notes} = state;

  switch (action.type) {
    case configActionTypes.ROUTES_CONFIG_FETCH_SUCCESS:
      return { ...state, notes: { ...notes, routes: Object.assign({ route: action.payload }) }};
    case configActionTypes.LOCATION_HISTORY_PUSH_REDIRECT:
      const { history } = state;
      history.push(action.payload);
      return { ...state, history };
    case configActionTypes.FILTERS_FETCH_CODES_SUCCESS:
      return { ...state, notes:{ ...notes, codes: action.payload }}
    case configActionTypes.FILTERS_TOGGLE_EVENT:
      return {...state, notes: {...notes, filters:action.payload }}
    case configActionTypes.CODE_FILTERS_TOGGLE_EVENT:
      return {...state, notes: {...notes, codes: {...notes.codes, filters: action.payload} }}
    default:
      return state;
  }
};
