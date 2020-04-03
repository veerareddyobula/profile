import React from "react";

const GApiService = props => {
  const googleSignedInListen = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get() && !sessionStorage.getItem("currentUserData")) {
      const profile = auth2.currentUser.get().getBasicProfile();
      const currentUserData = {
        id: profile.getId(),
        fullName: profile.getName(),
        givenName: profile.getGivenName(),
        familyName: profile.getFamilyName(),
        url: profile.getImageUrl(),
        email: profile.getEmail()
      };
      sessionStorage.setItem(
        "currentUserData",
        JSON.stringify(currentUserData)
      );
    }
    props.history.push("/products/notes/dashboard");
  };

  const initializeGoogleApiClient = () => {
    window.gapi.load("client", () => {
      window.gapi.client
        .init({
          apiKey: "AIzaSyAOtvFK-xrogKuDBlG7QZck9Jb77XCvnVg",
          discoveryDocs: [
            "https://sheets.googleapis.com/$discovery/rest?version=v4"
          ],
          clientId:
            "342704324971-89a8ri3ijk6sksgub4hll38087fjrqbp.apps.googleusercontent.com",
          scope: "https://www.googleapis.com/auth/spreadsheets"
        })
        .then(
          () => {
            console.log('--== Google API Service is Initialized ==--');
            props.loadDataTables();
          },
          error => {
            console.warn(error);
          }
        );
    });
  };

  const loadGoogleDocApi = async () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    script.onload = () => {
      initializeGoogleApiClient();
    };
    document.body.appendChild(script);
  };

  React.useEffect(() => {
    console.log('***>> Google GAPI Service <<***');
    const initGoogleApiInstance = async () => {
      await loadGoogleDocApi();
    };
    if (!window.gapi) {
      initGoogleApiInstance();
    }
  });

  return <div>{props.children}</div>;
};

export default GApiService;
