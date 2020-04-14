import React from "react";
import $ from "jquery";
import M from "materialize-css";
import { useDispatch, useSelector } from "react-redux";

import { setYouTubeRecordByValues } from "store/actions/you-tube-actions";

export default props => {
  const {match} = props;
  const [title, setTitle] = React.useState();
  const [uId, setUId] = React.useState();
  const [description, setDescription] = React.useState();
  const [code, setCode] = React.useState();
  const [tag, setTag] = React.useState();
  const [tagList, setTagList] = React.useState([]);
  const [codeList, setCodeList] = React.useState([]);

  const dispatch = useDispatch();

  const { filters, dataTableStore } = useSelector(state => {
    return {
      filters:
        state.ConfigStore &&
        state.ConfigStore.notes &&
        state.ConfigStore.notes.codes &&
        state.ConfigStore.notes.codes.filters,
      dataTableStore:
        state.DataTableStore &&
        state.DataTableStore.values &&
        state.DataTableStore.values.dataSet
    };
  });

  React.useEffect(() => {
    if (filters) {
      const sections = [];
      Object.keys(filters).forEach(group => {
        sections.push(...filters[group].sections);
      });
      setCodeList(sections);
    }
  }, [filters]);

  React.useEffect(() => {
    M.FormSelect.init($("select"), {});
  });

  const addNewTag = React.useCallback(() => {
    const temp = [...tagList];
    temp.push(tag);
    setTag("");
    setTagList(temp);
  });

  const removeTag = React.useCallback(entity => {
    const temp = tagList.filter(item => item !== entity);
    setTagList(temp);
  });

  const persistYouTubeStoreRecord = React.useCallback(() => {
    const [youTubeTableInfo] = dataTableStore.filter(
      item => item.sheetName === "youtube"
    );

    dispatch(
      setYouTubeRecordByValues(
        {
          id: match && match.params.id,
          title,
          uId,
          description,
          code,
          tags: tagList.join(",")
        },
        youTubeTableInfo
      )
    );
  });

  const resetFormValues = React.useCallback(() => {
    console.log('--== resetFormValues ==--')
  })

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between mb-1">
        <a
          className="mt-1 btn waves-effect waves-light orange light-2"
          href="#/products/notes/admin/home"
        >
          <i className="material-icons">arrow_back</i>
        </a>
        <div className="d-flex flex-wrap">
          <button
            className="mt-1 mr-1 btn waves-effect waves-light orange light-2"
            onClick={resetFormValues}
          >
            <i className="material-icons">clear</i> Clear
          </button>
          <button
            className="mt-1 btn waves-effect waves-light red dark-2"
            onClick={persistYouTubeStoreRecord}
          >
            <i className="material-icons">save</i> Save
          </button>
        </div>
      </div>
      <div className="row m-1">
        <div className="col s12 m12 l6">
          <div className="input-field m-1">
            <input
              id="clipTitle"
              type="text"
              className="validate"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <label htmlFor="clipTitle">Title</label>
          </div>
          <div className="input-field m-1">
            <input
              id="clipUid"
              type="text"
              className="validate"
              value={uId}
              onChange={event => setUId(event.target.value)}
            />
            <label htmlFor="clipUid">UId</label>
          </div>
          <div className="input-field m-1">
            <textarea
              id="clipDescription"
              className="materialize-textarea"
              value={description}
              onChange={event => setDescription(event.target.value)}
            ></textarea>
            <label htmlFor="clipDescription">Description</label>
          </div>
          <div className="input-field m-1">
            {filters && (
              <React.Fragment>
                <select
                  value={code}
                  multiple={false}
                  onChange={event => setCode(event.target.value)}
                >
                  {codeList &&
                    codeList.map(section => {
                      return (
                        <optgroup key={section.code} label={section.value}>
                          {section.tags &&
                            section.tags.map(tag => {
                              return (
                                <option key={tag.id} value={tag.id}>
                                  {tag.value}
                                </option>
                              );
                            })}
                        </optgroup>
                      );
                    })}
                </select>
                <label>Code</label>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="col s12 m12 l6 border-left">
          <div className="m-1">
            <label>Tags</label>
            <div className="divider" tabIndex="-1"></div>
            <div className="d-flex flex-wrap m-1">
              <div className="m-1">
                {tagList &&
                  tagList.map((item, index) => {
                    return (
                      <div key={index} className="chip">
                        {item}
                        <i
                          className="material-icons"
                          onClick={() => removeTag(item)}
                        >
                          close
                        </i>
                      </div>
                    );
                  })}
                {tagList && tagList.length === 0 && (
                  <label>Add Matching Tags For Search</label>
                )}
              </div>
            </div>
          </div>
          <div className="input-field m-1">
            <input
              id="clipTag"
              type="text"
              className="validate"
              value={tag}
              onChange={event => setTag(event.target.value)}
            />
            <label htmlFor="clipTag">Add New Tag</label>
          </div>
          <div className="m-1">
            <div className="d-flex justify-content-end">
              <button
                className="waves-effect waves-light btn-small red dark-2"
                onClick={addNewTag}
              >
                Add Tag
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
