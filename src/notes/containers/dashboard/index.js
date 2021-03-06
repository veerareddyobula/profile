import React from "react";
import { connect } from "react-redux";

import FilterCard from "notes/components/filter-card";
import PreLoader from "notes/components/pre-loader";
import { YouTubeIFrameVideoCard } from "notes/components/video-card";
import { loadYouTubeStore, getCodes, searchInYouTubeStore } from "store/actions";
import { getHistory } from "store/actions/config-actions";

const Dashboard = props => {
  const [videoDetails, setVideoDetails] = React.useState([]);
  const [toggleFilters, setToggleFilters] = React.useState(true);
  const [searchStr, setSearchStr] = React.useState();
  const { dataTableStore, youTubeStore, youTubeStoreSrc, asyncStore, filters } = props;
  const { values } = dataTableStore;
  const { dataSet } = values;

  const filterYouTubeStoreByCodes = React.useCallback(params => {
    const tags = [];
    Object.keys(params).forEach(group => {
      params[group].sections.forEach(section => {
        tags.push(...section.tags);
      });
    });
    const filteredVideoList = youTubeStore.filter(item => {
      const temp = tags.filter(
        entity => entity.id === item.codeValueId && entity.selected
      );
      return temp.length > 0;
    });
    setVideoDetails(filteredVideoList);
  });

  React.useEffect(() => {
    if (youTubeStore && filters) {
      filterYouTubeStoreByCodes(filters);
    }
  }, [youTubeStore, filters]);

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
        <div
          id="dashboard"
          className="row"
          style={{ marginTop: "1rem !important" }}
        >
          <div className="col s12">
            <div className={toggleFilters ? "col s12 m12 l2" : "hide-on"}>
              <FilterCard
                dataTablesInfo={dataSet}
                onApplyFilter={filterYouTubeStoreByCodes}
              />
            </div>
            <div
              className={
                toggleFilters
                  ? "dashboard-border col s12 m12 l10"
                  : "col s12 m12 l12"
              }
            >
              <div className="d-grid col-2-fr">
                <div>
                  <button
                    className="col s2 mt-1 btn waves-effect waves-light red dark-2"
                    onClick={() => setToggleFilters(!toggleFilters)}
                  >
                    <i className="material-icons">filter_list</i> Filters
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    marginBottom: "1rem"
                  }}
                >
                  <div className="input-field" style={{ marginBottom: "0px" }}>
                    <i className="material-icons prefix">search</i>
                    <input
                      id="icon_prefix"
                      type="text"
                      className="validate"
                      placeholder="Search"
                      value= {searchStr}
                      onChange={event => setSearchStr(event.target.value)}
                    />
                  </div>
                  <button className="col s3 btn waves-effect waves-light red dark-2" onClick={() => props.searchInYouTubeStore(youTubeStoreSrc, searchStr)}>
                    <i className="material-icons">find_in_page</i> Find
                  </button>
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
    youTubeStoreSrc:
      state.YouTubeStore,
    youTubeStore:
      state.YouTubeStore &&
      state.YouTubeStore.renderSet,
    filters:
      state.ConfigStore &&
      state.ConfigStore.notes &&
      state.ConfigStore.notes.codes &&
      state.ConfigStore.notes.codes.filters
  };
};

const mapDispatchToProps = {
  loadYouTubeStore,
  searchInYouTubeStore,
  getHistory,
  getCodes
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
