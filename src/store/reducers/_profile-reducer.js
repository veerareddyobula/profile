import { profileActionTypes } from "../action-types/profile-action-types";

export const ProfileStore = (state, action) => {
  if (typeof state === "undefined") {
    return {
        isSignedIn: false,
      dateLastModified: null
    };
  }
  switch (action.type) {
    case profileActionTypes.PROFILE_GOOGLE_SESSION_STATUS:
      return { ...action.payload, dateLastModified: new Date().getTime() };
    default:
      return state;
  }
};
