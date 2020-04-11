import React from "react";
import { connect } from "react-redux";
import {
  toggleCategories,
  toggleSubCategories,
  getCodes
} from "store/actions";

const mapStateToProps = state => {
  return {
    configStore: state.ConfigStore,
  };
};

export default connect(mapStateToProps, {
  toggleCategories,
  toggleSubCategories,
  getCodes
})(props => {
  const { configStore, toggleCategories } = props;
  const { notes } = configStore;
  const { codes } = notes;

  const applyFilters = React.useCallback(async params => {
    const { toggleSubCategories, onApplyFilter } = props;
    const { groupName, section, label } = params;
    await toggleSubCategories(codes.filters, groupName, section, label);
    onApplyFilter(codes.filters);
  });

  return (
    <div className="d-flex flex-column">
      {codes &&
        codes.filters &&
        Object.keys(codes.filters).map(entity => {
          const group = codes.filters[entity];

          return (
            <React.Fragment key={group.code}>
              <div className="mb-1 mt-1">{group.displayLabel}</div>
              {group.sections.map(section => {
                if (section.selected) {
                  section.selected = true;
                } else {
                  section.selected = false;
                }
                return (
                  <React.Fragment key={section.code}>
                    <div className="row">
                      <div className="col s12">
                        <div
                          className="d-flex"
                          style={{ cursor: "pointer" }}
                          onClick={() => toggleCategories(codes.filters, group.code, section)}
                        >
                          <i className="material-icons">
                            {section.selected ? "expand_more" : "chevron_right"}
                          </i>{" "}
                          {section.value}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col s10 offset-s2">
                        <div className="d-flex flex-column">
                          {section.selected &&
                            section.tags.map(label => {
                              if (label.selected) {
                                label.selected = true;
                              } else {
                                label.selected = false;
                              }
                              return (
                                <div key={label.code}>
                                  <label className="black-text">
                                    <input
                                      type="checkbox"
                                      className="filled-in checkbox-red"
                                      checked={label.selected && "checked"}
                                      onChange={() =>
                                        applyFilters({
                                          groupName: group.code,
                                          section,
                                          label
                                        })
                                      }
                                    />
                                    <span>{label.value}</span>
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
            </React.Fragment>
          );
        })}
    </div>
  );
});
