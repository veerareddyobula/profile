import { configActionTypes } from "./../action-types/config-action-types";

export const ConfigStore = (state, action) => {
  if (typeof state === "undefined") {
    return {
      notes: {
        routes: [],
        filters: {
          categories: {
            displayLabel: 'Categories',
            section: [
              {
                label: "Programming",
                isExpand: true,
                tags: [
                  { label: "Javascript", isSelected: true },
                  { label: "React.js", isSelected: true },
                  { label: "Github", isSelected: true }
                ]
              },
              {
                label: "Politics",
                isExpand: false,
                tags: [
                  { label: "AndhraPradesh", isSelected: true },
                  { label: "Office", isSelected: true }
                ]
              }
            ]
          },
          books: {
            displayLabel: 'Books',
            section: [
              {
                label: "React JS Notes for Professionals",
                isExpand: false,
                tags: [
                  { label:"Getting started with React", isSelected:true },
                  { label:"Components", isSelected:true },
                  { label:"Using ReactJS with TypeScript", isSelected:true }
                ]
              }
            ]
          }
        }
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
    case configActionTypes.FILTERS_TOGGLE_EVENT:
      return {...state, notes: {...notes, filters:action.payload }}
    default:
      return state;
  }
};
