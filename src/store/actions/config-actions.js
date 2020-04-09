import { configActionTypes } from "./../action-types/config-action-types";

export const getNoteApplicationRoutes = () => dispatch => {
  dispatch({
    type: configActionTypes.ROUTES_CONFIG_FETCH_SUCCESS,
    payload: [
      {
        exact: true,
        path: "/products/notes/dashboard",
        key: "dashboard",
        label: "Dashboard",
        component: "DashboardContainer"
      },
      {
        exact: true,
        path: "/products/notes/post/:id/details",
        key: "postDetails",
        label: "Details",
        component: "PostDetailsContainer"
      }
    ]
  });
};

export const getHistory =  (props) => (dispatch) =>{
  return {
    push: (pathname, state) => {
      dispatch({ type: configActionTypes.LOCATION_HISTORY_PUSH_REDIRECT, payload: {...props.location, ...state}});
      props.history.push({pathname: pathname, state:{...state, history: {...props.location, ...state} } });
    }
  }
}

export const toggleCategories = (list, item) => (dispatch) => {
  const temp = [...list];
  const [selectedItem] = temp.filter(entity => entity.label === item.label);
  selectedItem.lastUpdatedDate = new Date().getTime();
  selectedItem.isExpand = !selectedItem.isExpand;
  dispatch({ type: configActionTypes.CATEGORY_TOGGLE_EVENT, payload: temp});
}; 

export const toggleSubCategories = (list, item, param) => (dispatch) => {
  console.log('--== toggleSubCategories ==--');
  const temp = [...list];
  const [selectedItem] = temp.filter(entity => entity.label === item.label);
  selectedItem.lastUpdatedDate = new Date().getTime();
  const [selectedSubItem] = selectedItem.tags.filter(
    entity => entity.label === param.label
  );
  selectedSubItem.isSelected = !selectedSubItem.isSelected;
  dispatch({ type: configActionTypes.CATEGORY_TOGGLE_EVENT, payload: temp});
};
