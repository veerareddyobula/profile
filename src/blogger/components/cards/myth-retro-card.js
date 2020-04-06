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

  const signInViaGoogle = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (!auth2.isSignedIn.get()) {
      window.gapi.auth2.getAuthInstance().signIn();
    }
  }


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
                <span>Myth Retro Board</span> <span className="show-on-large font-size-16">{devNotesContent[index].txt}</span>
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
