import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const PostDetails = () => {

  return (
    <div className="container-fluid">
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
