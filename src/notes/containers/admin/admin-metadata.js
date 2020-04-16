import React from "react";
import { useDispatch, useSelector } from "react-redux";
import M from "materialize-css";
import { letters } from "store/actions/utils";
import { getCodes, addUpdateMetaDataCodes, loadDataTables } from "store/actions";
import PreLoader from "notes/components/pre-loader";

export default () => {
  const [showEditForm, setShowEditForm] = React.useState({ show: false });
  const [toggleFilters, setToggleFilters] = React.useState({});
  const dispatch = useDispatch();
  const { filters, codes, dataTableStore, asyncStore } = useSelector(state => {
    return {
      filters:
        state.ConfigStore &&
        state.ConfigStore.notes &&
        state.ConfigStore.notes.codes &&
        state.ConfigStore.notes.codes.filters,
      codes:
        state.ConfigStore &&
        state.ConfigStore.notes &&
        state.ConfigStore.notes.codes &&
        state.ConfigStore.notes.codes.codes &&
        state.ConfigStore.notes.codes.codes.values,
      dataTableStore:
        state.DataTableStore &&
        state.DataTableStore.values &&
        state.DataTableStore.values.dataSet,
      asyncStore: state.AsyncStore
    };
  });

  const toggleFilterGroup = React.useCallback(item => {
    const temp = { ...toggleFilters };
    temp[item] = { isSelected: temp[item] ? !temp[item].isSelected : false };
    setToggleFilters(temp);
  });

  const setAddUpdateMetaData = React.useCallback(payload => {
    const [codesTableInfo] = dataTableStore.filter(
      item => item.sheetName === "codes"
    );
    const findParentId = () => {
      if (payload.context === "groups" && payload.action === "add") {
        return 0;
      } else if (payload.context === "groups") {
        return parseInt(payload.item.parentId);
      }

      return parseInt(payload.item.id);
    };
    let params = {
      codeRef: payload.context,
      code: payload.value
        .split(" ")
        .join("_")
        .toLowerCase(),
      value: payload.value,
      selected: 0
    };
    if (payload.selected) {
      params.selected = 1;
    }
    if (payload.action === "add") {
        params.id = parseInt(codesTableInfo.noOfRows);
        params.isEdit = false;
        params.rangeRowNum = parseInt(codesTableInfo.noOfRows) + 1;
        params.parentId = findParentId();
    } else {
        params.id = parseInt(payload.item.id);
        params.isEdit = true;
        params.rangeRowNum = parseInt(payload.item.id) + 1;
        params.parentId = parseInt(payload.item.parentId);
    }
    const range = `${codesTableInfo.sheetName}!A${parseInt(params.rangeRowNum)}:${letters[codesTableInfo.noOfCols]}${parseInt(params.rangeRowNum)}`;
    dispatch(addUpdateMetaDataCodes(range, params, codesTableInfo));
  });

  const postAddUpdateMetaData = React.useCallback(
    (labelText, context, action, itemId) => {
      const { dataSet } = codes;
      let selectedCode;
      if (itemId) {
        [selectedCode] = dataSet.filter(item => item.id === itemId);
      }
      const formValues = {
        show: true,
        context,
        action,
        labelText,
        item: selectedCode,
        selected:
          selectedCode &&
          selectedCode.selected &&
          parseInt(selectedCode.selected) === 1
            ? true
            : false
      };
      if (action !== "add") {
        formValues.value = selectedCode && selectedCode.value;
      }
      setShowEditForm(formValues);
    }
  );

  const fetchConfigDataTableStore = React.useCallback(() => {
    if (dataTableStore) {
      const [codesTableInfo] = dataTableStore.filter(
        item => item.sheetName === "codes"
      );
      dispatch(getCodes(codesTableInfo));
    }
  });


  React.useEffect(() => {
    const { status } = asyncStore;
    if (status && status.type === "ASYNC_REDIRECT_UPDATE_SUCCESS") {
      setShowEditForm({ show: false });
      dispatch(loadDataTables());
      fetchConfigDataTableStore();
    }
  }, [asyncStore]);

  React.useEffect(() => {
    fetchConfigDataTableStore();
  }, [dataTableStore]);

  React.useEffect(() => {
    M.Collapsible.init(document.querySelectorAll(".collapsible"), {});
  });

  React.useEffect(() => {
    if (filters) {
      M.Collapsible.init(document.querySelectorAll(".collapsible"), {});
      const temp = {};
      Object.keys(filters).forEach(item => {
        temp[item] = { isSelected: false };
      });
      setToggleFilters(temp);
    }
  }, [filters]);

  if (showEditForm && showEditForm.show) {
    return (
      <div className="row">
        <div className="col s12 offset-l3 l6 offset-m2 m8">
          <div className="input-field">
            <input
              placeholder={`Enter value`}
              value={showEditForm.value}
              id="metaDataInput"
              type="text"
              className="validate"
              onChange={event =>
                setShowEditForm({ ...showEditForm, value: event.target.value })
              }
            />
            <label htmlFor="metaDataInput">{showEditForm.labelText}</label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                class="filled-in"
                value={showEditForm.selected}
                checked={showEditForm.selected}
                onChange={() =>
                  setShowEditForm({
                    ...showEditForm,
                    selected: !showEditForm.selected
                  })
                }
              />
              <span>Select By Default</span>
            </label>
          </div>
          <div className="d-flex justify-content-end flex-wrap">
            <button
              className="waves-effect waves-light btn"
              onClick={() => setShowEditForm({ show: false })}
            >
              Cancel
            </button>
            <button
              className="waves-effect waves-light btn ml-1"
              onClick={() => setAddUpdateMetaData({ ...showEditForm })}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (asyncStore && asyncStore.isLoading) {
      return (
        <PreLoader />
      )
  }

  return (
    <div className="row">
      <div className="col s12">
        <div className="row m-1">
          <div className="col s12">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="close red-text"
                onClick={() =>
                  postAddUpdateMetaData("Add New Group", "groups", "add")
                }
              >
                <i className="material-icons left">add</i>
              </button>
            </div>
          </div>
        </div>
        {filters &&
          filters &&
          Object.keys(filters).map(item => {
            const filterSet = filters[item];
            return (
              <div className="row" key={filterSet.code}>
                <div className="col s12">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <button
                        className="waves-effect waves-teal btn-flat btn-small"
                        onClick={() => toggleFilterGroup(item)}
                      >
                        <i className="material-icons left">
                          {toggleFilters &&
                          toggleFilters[item] &&
                          toggleFilters[item].isSelected
                            ? "keyboard_arrow_down"
                            : "keyboard_arrow_right"}
                        </i>{" "}
                      </button>
                      <button
                        type="button"
                        className="waves-effect waves-teal btn-flat btn-small"
                        onClick={() => toggleFilterGroup(item)}
                      >
                        {item}
                      </button>
                    </div>
                    {toggleFilters &&
                      toggleFilters[item] &&
                      toggleFilters[item].isSelected && (
                        <div className="d-flex flex-wrap">
                          <button
                            type="button"
                            className="close red-text"
                            onClick={() =>
                              postAddUpdateMetaData(
                                `Add New Section Under ${item}`,
                                "sections",
                                "add",
                                filterSet.id
                              )
                            }
                          >
                            <i className="material-icons left">add</i>
                          </button>
                          <button
                            type="button"
                            className="close"
                            onClick={() =>
                              postAddUpdateMetaData(
                                `Edit Group Name`,
                                "groups",
                                "delete",
                                filterSet.id
                              )
                            }
                          >
                            <i className="material-icons left">edit</i>
                          </button>
                        </div>
                      )}
                  </div>
                  <ul className="collapsible">
                    {toggleFilters &&
                      toggleFilters[item] &&
                      toggleFilters[item].isSelected &&
                      filterSet &&
                      filterSet.sections.map(section => {
                        return (
                          <li>
                            <div className="collapsible-header d-flex justify-content-between">
                              <div>
                                <i className="material-icons left">
                                  filter_drama
                                </i>{" "}
                                <span>{section.value}</span>
                              </div>
                              <div className="d-flex flex-wrap">
                                <button
                                  type="button"
                                  className="close red-text"
                                  onClick={() =>
                                    postAddUpdateMetaData(
                                      `Add New Label Under ${section.value} section`,
                                      "labels",
                                      "add",
                                      section.id
                                    )
                                  }
                                >
                                  <i className="material-icons left">add</i>
                                </button>
                                <button
                                  type="button"
                                  className="close"
                                  onClick={() =>
                                    postAddUpdateMetaData(
                                      "Edit Section Name",
                                      "sections",
                                      "delete",
                                      section.id
                                    )
                                  }
                                >
                                  <i className="material-icons left">edit</i>
                                </button>
                              </div>
                            </div>
                            <div className="collapsible-body white">
                              <ol></ol>
                              <ul className="collection with-header">
                                <li className="collection-header">
                                  <div className="d-flex justify-content-between">
                                    <div>Labels</div>
                                  </div>
                                </li>
                                {section.tags.map(entity => {
                                  return (
                                    <li className="collection-item">
                                      <div className="d-flex justify-content-between">
                                        <div>{entity.value}</div>
                                        <button
                                          type="button"
                                          className="close"
                                          onClick={() =>
                                            postAddUpdateMetaData(
                                              `Edit Label Under ${section.value} section`,
                                              "labels",
                                              "delete",
                                              entity.id
                                            )
                                          }
                                        >
                                          <i className="material-icons left">
                                            edit
                                          </i>
                                        </button>
                                      </div>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
