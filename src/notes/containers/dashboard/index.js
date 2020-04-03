import React from "react";
import { connect } from "react-redux";

import CategoryCard from "../../components/category-card";
import GApiService from "../../components/gapi-service";
import { loadDataTables } from "../../../store/actions/data-table-actions";
import { loadCategories } from "../../../store/actions/categories-actions";
import Navbar from "./../../components/navbar";

const Dashboard = props => {
  const { asyncStore, dataTableStore, categoriesStore } = props;
  const { values } = dataTableStore;
  const { dataSet } = values;

  React.useEffect(() => {
    console.log('--=== loadCategories ===--');
    if (dataSet) {
      const [category] = dataSet.filter((item) => item.sheetName === 'categories');
      console.log('--=== category ', category);
      props.loadCategories(category);
    }
  }, [dataSet])

  return (
    <GApiService {...props}>
      <Navbar {...props} />
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
    </GApiService>
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
