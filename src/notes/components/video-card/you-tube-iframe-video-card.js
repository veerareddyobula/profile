import React from "react";

export default props => {
  const { payload, onClickHandler } = props;

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-image">
          <div className="video-container">
            <iframe
              className="player"
              type="text/html"
              width="100%"
              height="100%"
              src={`http://www.youtube.com/embed/${payload.uid}`}
              frameBorder="0"
              title={payload.title}
            />
          </div>
        </div>
        <div className="card-action">
          <div className="d-flex justify-content-end">
            <div className="red dark-2">
              <button
                className="waves-effect waves-teal btn-flat white-text"
                onClick={() => onClickHandler(payload)}
              >
                <i className="large material-icons">code</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
