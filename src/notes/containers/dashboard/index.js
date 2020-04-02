import React from "react";
import { connect } from "react-redux";

import CategoryCard from "../../components/category-card";
import { loadDataTables } from "../../../store/actions/data-table-actions";
import { loadCategories } from "../../../store/actions/categories-actions";
import Navbar from "./../../components/navbar";

const Dashboard = props => {
  const [profile, seProfile] = React.useState();
  const { asyncStore, dataTableStore, categoriesStore } = props;
  const { values } = dataTableStore;
  const { dataSet } = values;

  React.useEffect(() => {
    if (window.gapi && window.gapi.auth2) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      if (!auth2.isSignedIn.get()) {
        props.history.push("/");
      } else {
        const currentUserData = JSON.parse(
          sessionStorage.getItem("currentUserData")
        );
        seProfile(currentUserData);
        props.loadDataTables(currentUserData);
      }
    } else {
      props.history.push("/");
    }
  }, []);

  React.useEffect(() => {
    console.log('--=== loadCategories ===--');
    if (dataSet) {
      const [category] = dataSet.filter((item) => item.sheetName === 'categories');
      console.log('--=== category ', category);
      props.loadCategories(category);
    }
  }, [dataSet])

  return (
    <React.Fragment>
      <Navbar profile={profile} {...props} />
      <div className="container-fluid">
        <div>
        {asyncStore.isLoading && (
          <div
            className="progress blue"
            style={{ height: "6px", marginTop: "0px" }}
          >
            <div className="indeterminate grey"></div>
          </div>
        )}
        </div>
        <div className="row"  style={{marginTop:'1rem !important'}}>
          <div className="col s12">
            {categoriesStore && <CategoryCard {...categoriesStore} />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    asyncStore: state.AsyncStore,
    dataTableStore: state.DataTableStore,
    categoriesStore: state.CategoriesStore
  };
};

const mapDispatchToProps = {
  loadDataTables,
  loadCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
