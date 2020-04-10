import React from "react";
import { connect } from "react-redux";

import { YouTubeIFrameVideoCard } from "notes/components/video-card";
import FilterCard from "notes/components/filter-card";
import { loadYouTubeStore } from "store/actions/you-tube-actions";
import PreLoader from "notes/components/pre-loader";
import { getHistory } from "store/actions/config-actions";

const Dashboard = props => {
  const [videoDetails, setVideoDetails] = React.useState([]);
  const [toggleFilters, setToggleFilters] = React.useState(true);
  const { dataTableStore, youTubeStore, asyncStore } = props;
  const { values } = dataTableStore;
  const { dataSet } = values;

  React.useEffect(() => {
    const { values } = youTubeStore;
    const { dataSet } = values;
    setVideoDetails(dataSet);
  }, [youTubeStore]);

  React.useEffect(() => {
    if (dataSet) {
      const [post] = dataSet.filter(item => item.sheetName === "youtube");
      props.loadYouTubeStore(post);
    }
  }, [dataSet]);

  const onClickHandler = React.useCallback(payload => {
    props
      .getHistory(props)
      .push(`/products/notes/post/${payload.uid}/details`, { ...payload });
  });

  return (
    <React.Fragment>
      {asyncStore && asyncStore.isLoading ? (
        <PreLoader />
      ) : (
        <div className="row" style={{ marginTop: "1rem !important" }}>
          <div className="col s12">
            <div className={toggleFilters ? "col s12 m12 l2" : "hide-on"}>
              <FilterCard />
            </div>
            <div
              className={toggleFilters ? "dashboard-border col s12 m12 l10" : "col s12 m12 l12"}
            >
              <div className="d-grid col-2-fr">
                <div>
                  <button
                    class="col s2 mt-1 btn waves-effect waves-light red dark-2"
                    onClick={() => setToggleFilters(!toggleFilters)}
                  >
                    <i className="material-icons">filter_list</i> Filters
                  </button>
                </div>
                <div className="input-field">
                  <i className="material-icons prefix">search</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div>
                {videoDetails &&
                  videoDetails.map(videoCard => (
                    <div key={videoCard.id} className="col s12 m6 l4">
                      <YouTubeIFrameVideoCard
                        payload={videoCard}
                        onClickHandler={onClickHandler}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    asyncStore: state.AsyncStore,
    dataTableStore: state.DataTableStore,
    youTubeStore: state.YouTubeStore
  };
};

const mapDispatchToProps = {
  loadYouTubeStore,
  getHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
