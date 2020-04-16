import { asyncFetch } from "../action-types/async-action-types.js";

export const AsyncStore = (state, action) => {
  const initialState = {
    isLoading: true,
    details: null
  };
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case asyncFetch.ASYNC_FETCH:
      return { isLoading: true };
    case asyncFetch.ASYNC_FETCH_SUCCESS:
      return {
        isLoading: false
      };
    case asyncFetch.ASYNC_FETCH_FAILURE:
      return {
        isLoading: false,
        details: action.payload
      };
    case asyncFetch.ASYNC_REDIRECT_UPDATE_SUCCESS:
      return {
        isLoading: false,
        status: {...action}
      }
    default:
      return state;
  }
};
