import { 
    INSERT_NEW_USER_SUCCESS, 
    INSERT_NEW_USER_FAILURE 
  } from "../actions/users-action-types";

export default (state = {}, action) => {
  console.log('--=== Users Curd Reducer --== ', state, action);
  switch (action.type) {
    case INSERT_NEW_USER_SUCCESS:
      return action.payload;
    case INSERT_NEW_USER_FAILURE:
      return action.payload;
    default:
      return state;
  }
};