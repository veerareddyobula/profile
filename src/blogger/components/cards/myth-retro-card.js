import React from "react";

export default (props) => {
  const [index, setIndex] = React.useState(0);
  const devNotesContent = [];
  devNotesContent.push({
    url: "assets/my-de-notes-slider/avatarSM-1.png",
    txt: "is a self funded application to help scrum teams retro discussions."
  });
  devNotesContent.push({
    url: "assets/my-de-notes-slider/avatarSM-3.png",
    txt:
      "is developed using React.js framework and google drive excel as backend store."
  });
  devNotesContent.push({
    url: "assets/my-de-notes-slider/avatarSM-6.png",
    txt:
      "myth retro helps scrum teams to discuss went wel, improve & actions"
  });

  React.useEffect(() => {
    const clearSetInterval = setInterval(() => {
      if (index > devNotesContent.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1)
      }
    }, 60000);

    return () => {
      clearInterval(clearSetInterval);
    };
  }, []);

  const googleSignedInListen = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get() && !sessionStorage.getItem('currentUserData')) {
      const profile = auth2.currentUser.get().getBasicProfile();
      const currentUserData = {
        id: profile.getId(),
        fullName: profile.getName(),
        givenName: profile.getGivenName(),
        familyName: profile.getFamilyName(),
        url: profile.getImageUrl(),
        email: profile.getEmail(),
      };
      sessionStorage.setItem('currentUserData', JSON.stringify(currentUserData))
    }
    props.history.push('/products/notes/dashboard');
  }

  const signInViaGoogle = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (!auth2.isSignedIn.get()) {
      window.gapi.auth2.getAuthInstance().signIn();
    } else {
      googleSignedInListen();
    }
  }

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
            window.gapi.auth2
              .getAuthInstance()
              .isSignedIn.listen(googleSignedInListen);
          },
          error => {
            console.warn(error);
          }
        );
    });
  }

  const loadGoogleDocApi = async () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    script.onload = () => {initializeGoogleApiClient()};
    document.body.appendChild(script);
  };

  React.useEffect(() => {
    const initGoogleApiInstance = async () => {
      await loadGoogleDocApi();
    }
    if (!window.gapi) {
      initGoogleApiInstance();
    }
  });


  return (
    <div className="card horizontal">
      <div className="card-image z-depth-5">
        <img
          alt="Developer Notes"
          src={devNotesContent[index].url}
          className="card_horizontal__image"
        />
      </div>
      <div className="card-stacked" style={{ padding: "1rem" }}>
        <div className="interval-slide-text" style={{ height: "100%" }}>
          <div className="v-center-wrapper">
            <div className="set-center">
              <p className="flow-text">
                <span>Myth Retro Board</span> <p className="show-on-large font-size-18">{devNotesContent[index].txt}</p>
              </p>
            </div>
          </div>
        </div>
        <div className="notes-card-btn-placement">
          <div
            className="google-btn"
            onClick={() => signInViaGoogle()}
          >
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                alt="Google"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
