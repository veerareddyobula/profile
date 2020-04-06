import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Breadcrum } from "notes/components/breadcrum";

const PostDetails = props => {
  const { dataTableStore } = props;
  const { values } = dataTableStore;
  const { dataSet } = values;

  return (
    <div className="container-fluid">
      <Breadcrum {...props} />
      <div className="row" style={{ marginTop: "1rem !important" }}>
        <div className="col s12">I am post Details</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dataTableStore: state.DataTableStore
  };
};

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));
