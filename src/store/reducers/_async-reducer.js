import { asyncFetch } from "../action-types/async-action-types.js";

export const AsyncStore = (state, action) => {
  const initialState = {
    isLoading: true
  };
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (action.type) {
    case asyncFetch.ASYNC_FETCH:
      return { ...state };
    case asyncFetch.ASYNC_FETCH_SUCCESS:
      return {
        isLoading: false
      };
    case asyncFetch.ASYNC_FETCH_FAILURE:
      return {
        isLoading: false
      };
    default:
      return state;
  }
};
