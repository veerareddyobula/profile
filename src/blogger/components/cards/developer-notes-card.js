import React from "react";
import { connect } from 'react-redux';

import { getHistory } from 'store/actions/config-actions'

const DeveloperNotesCard = props => {
  const [index, setIndex] = React.useState(0);
  const devNotesContent = [];
  devNotesContent.push({
    url: "assets/my-de-notes-slider/avatarSM-8.png",
    txt: "short videos meant to share development ways for common React.js components."
  })
  devNotesContent.push({
    url: "assets/my-de-notes-slider/avatarSM-12.png",
    txt:
      "is developed using React.js framework and google drive excel as backend store."
  });
  devNotesContent.push({
    url: "assets/my-de-notes-slider/avatarSM-9.png",
    txt:
      "Short videos are meant for common StackOverFlow questions"
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
          <div className="flow-text">
            <p>Veera`s</p>
            <p>Youtube Channel</p>
          </div>
          <div className="play"></div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {getHistory})(DeveloperNotesCard);
