import { 
    INSERT_BLOGGER_POST_SUCCESS, 
    INSERT_BLOGGER_POST_FAILURE 
  } from "../admin/actions/blogger-posts-types";

export default (state = {}, action) => {
  console.log('--=== Curd Reducer --== ', state, action);
  switch (action.type) {
    case INSERT_BLOGGER_POST_SUCCESS:
      return action.payload;
    case INSERT_BLOGGER_POST_FAILURE:
      return action.payload;
    default:
      return state;
  }
};