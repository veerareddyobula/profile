import React from "react";
import {connect} from 'react-redux';
import { getHistory } from 'store/actions/config-actions'

const PostDisplayCard = props => {
  const { item } = props;

  const navigateToDetails = React.useCallback(() => {
    props.getHistory(props).push(`post/${item.id}/details`, { ...item });
  });

  return (
    <div className="container-fluid">
      <div className="card" key={item.id}>
        <div className="card-image">
          <img alt={item.name} src={item.url} />
        </div>
        <div className="card-content">
          <span className={`card-title ${item.className}`}>{item.name}</span>
          <p className="flow-text font-size-12">{item.description}</p>
          <div className="d-flex justify-content-end">
            <span className="new badge green" data-badge-caption="Vote">
              {item.votes}
            </span>
            <span className="new badge red" data-badge-caption="Comments">
                {item.comments}
            </span>
          </div>
        </div>
        <div
          className="card-action"
          style={{
            color: "rgb(29, 43, 54) !important",
            background: "rgb(241, 243, 245) none repeat scroll 0% 0%"
          }}
        >
          <div className="d-flex justify-content-between">
            <div>
              <div className="chip">
                {item.name}
                <i className="close material-icons">close</i>
              </div>
            </div>
            <button onClick={navigateToDetails} className="btn-floating pulse blue darken-3">
              <i className="material-icons">navigate_next</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { getHistory })(PostDisplayCard);
