import { 
    FETCH_BLOGGER_POSTS, 
  } from "../admin/actions/blogger-posts-types";

export default (state = {}, action) => {
  console.log('--=== Data Reducer --== ', state, action);
  switch (action.type) {
    case FETCH_BLOGGER_POSTS:
      return action.payload;
    default:
      return state;
  }
};