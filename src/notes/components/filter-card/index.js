import React from "react";
import { connect } from "react-redux";

import {
  toggleCategories,
  toggleSubCategories
} from "store/actions/config-actions";

const mapStateToProps = state => {
  return {
    configStore: state.ConfigStore
  };
};

export default connect(mapStateToProps, {
  toggleCategories,
  toggleSubCategories
})(props => {
  const { configStore, toggleCategories, toggleSubCategories } = props;
  const { notes } = configStore;
  const { filters } = notes;

  return (
    <div className="d-flex flex-column">
      {filters &&
        Object.keys(filters).map(section => {
          const list = filters[section];
          return (
            <React.Fragment key={section}>
              <div className="mb-1 mt-1">{list.displayLabel}</div>
              <div>
                {list && list.section &&
                  list.section.map(item => {
                    return (
                      <React.Fragment key={item.label}>
                        <div className="row">
                          <div className="col s12">
                            <div
                              className="d-flex"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                toggleCategories(filters, section, item)
                              }
                            >
                              <i className="material-icons">
                                {item.isExpand
                                  ? "expand_more"
                                  : "chevron_right"}
                              </i>{" "}
                              {item.label}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col s10 offset-s2">
                            <div className="d-flex flex-column">
                              {item.isExpand &&
                                item.tags.map(entity => {
                                  return (
                                    <div key={entity.label}>
                                      <label className="black-text">
                                        <input
                                          type="checkbox"
                                          className="filled-in checkbox-red"
                                          checked={
                                            entity.isSelected && "checked"
                                          }
                                          onChange={() =>
                                            toggleSubCategories(
                                              filters,
                                              section,
                                              item,
                                              entity
                                            )
                                          }
                                        />
                                        <span>{entity.label}</span>
                                      </label>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
              </div>
              <div className="divider"></div>
            </React.Fragment>
          );
        })}
    </div>
  );
});
