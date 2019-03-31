import { 
    GET_NEW_USER_SUCCESS, 
    GET_NEW_USER_FAILURE,
  } from "../admin/actions/users-action-types"

export default (state = {}, action) => {
  console.log('--=== Data Reducer --== ', state, action)
  switch (action.type) {
    case GET_NEW_USER_SUCCESS:
        return action.payload
    case GET_NEW_USER_FAILURE:
        return action.payload
    default:
      return state
  }
}