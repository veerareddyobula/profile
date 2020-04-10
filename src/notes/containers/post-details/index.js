import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { YouTubeIFrameVideoCard } from "notes/components/video-card";
import { getHistory } from "store/actions/config-actions";

const PostDetails = props => {
  const [payload, setPayload] = React.useState();
  const { location } = props;

  const onClickHandler = React.useCallback(payload => {
    props.getHistory(props).push(`/products/notes/dashboard`, payload);
  });

  React.useEffect(() => {
    if (location && location.state) {
      setPayload(location.state);
    } else {
      onClickHandler();
    }
  }, [location]);

  return (
    <div className="container-fluid">
      <div className="row" style={{ marginTop: "1rem !important" }}>
        <div className="col s8">
          {payload && (
            <YouTubeIFrameVideoCard
              payload={payload}
              onClickHandler={onClickHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dataTableStore: state.DataTableStore
  };
};

const mapDispatchToProps = {
  getHistory
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetails)
);
