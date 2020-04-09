import React from "react";
import { connect } from "react-redux";

import PostCard from "notes/components/post-card";
import { loadPosts } from "store/actions/post-actions";

const Dashboard = props => {
  const { dataTableStore, postStore } = props;
  const { values } = dataTableStore;
  const { dataSet } = values;

  React.useEffect(() => {
    if (dataSet) {
      const [post] = dataSet.filter(item => item.sheetName === "post");
      props.loadPosts(post);
    }
  }, [dataSet]);

  return (
    <div className="row" style={{ marginTop: "1rem !important" }}>
      <div className="col s12">
        {postStore && <PostCard {...postStore} {...props} />}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dataTableStore: state.DataTableStore,
    postStore: state.PostStore
  };
};

const mapDispatchToProps = {
  loadPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
