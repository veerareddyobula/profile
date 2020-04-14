import { profileActionTypes } from "./../action-types/profile-action-types";

export const updateSignInStatus = (isSignedIn, dispatch) => {
  if (isSignedIn) {
    dispatch(googleAuthInstanceSignIn());
  }
};

export const googleAuthInstanceSignIn = () => async dispatch => {
  const response = await window.gapi.auth2.getAuthInstance().signIn();
  const profile = response.getBasicProfile();
  dispatch({
    type: profileActionTypes.PROFILE_GOOGLE_SESSION_STATUS,
    payload: {
      id: profile.getId(),
      imageUrl: profile.getImageUrl(),
      name: profile.getName(),
      email: profile.getEmail(),
      familyName: profile.getFamilyName(),
      givenName: profile.getGivenName(),
      isSignedIn: true
    }
  });
};

export const googleAuthInstanceSignOut = () => async dispatch => {
  await window.gapi.auth2.getAuthInstance().signOut();
  dispatch({
    type: profileActionTypes.PROFILE_GOOGLE_SESSION_STATUS,
    payload: { isSignedIn: false }
  });
};
