import React from "react";
import { connect } from 'react-redux';

import { getHistory } from 'store/actions/config-actions'

const DeveloperNotesCard = props => {
  const [index, setIndex] = React.useState(1);

  React.useEffect(() => {
    const clearSetInterval = setInterval(() => {
      if (index > 14) {
        setIndex(1);
      } else {
        setIndex(index + 1);
      }
    }, 30000);

    return () => {
      clearInterval(clearSetInterval);
    };
  }, []);

  const onClickHandler = React.useCallback(() => {
    props.getHistory(props).push(`/products/notes/dashboard`, {});
  })

  return (
    <div className="card horizontal">
      <div className="card-image z-depth-5">
        <img
          alt="Developer Notes"
          src={`assets/my-de-notes-slider/avatarSM-8.png`}
          className="card_horizontal__image"
        />
      </div>
      <div className="card-stacked" style={{ padding: "1rem" }}>
        <div className="interval-slide-text" style={{ height: "100%" }}>
          <div className="flow-text">
            <p>Veera`s</p>
            <p>Youtube Channel</p>
          </div>
          <div className="play" onClick={onClickHandler}></div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {getHistory})(DeveloperNotesCard);
