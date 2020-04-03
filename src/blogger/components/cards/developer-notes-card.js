import React from "react";

const DeveloperNotesCard = props => {
  const [index, setIndex] = React.useState(0);
  const devNotesContent = [];
  devNotesContent.push({
    url: "assets/my-de-notes-slider/avatarSM-8.png",
    txt: "is a self funded application to help my developer life."
  });
  devNotesContent.push({
    url: "assets/my-de-notes-slider/avatarSM-12.png",
    txt:
      "is developed using React.js framework and google drive excel as backend store."
  });
  devNotesContent.push({
    url: "assets/my-de-notes-slider/avatarSM-9.png",
    txt:
      "the idea behind this is to note my bookmarks and findings for feature help."
  });

  React.useEffect(() => {
    const clearSetInterval = setInterval(() => {
      if (index > devNotesContent.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 60000);

    return () => {
      clearInterval(clearSetInterval);
    };
  }, []);

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
                <span>My Dev Notes</span>{" "}
                <span className="show-on-large font-size-18">
                  {devNotesContent && devNotesContent[index].txt}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="notes-card-btn-placement">
          <button
            className="waves-effect waves-light btn-large orange dark-1"
            onClick={() => props.history.push("/products/notes/dashboard")}
          >
            <i className="material-icons left">chrome_reader_mode</i> Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperNotesCard;
