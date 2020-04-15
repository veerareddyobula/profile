import React from "react";
import $ from "jquery";
import M from "materialize-css";

import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { setYouTubeRecordByValues } from "store/actions/you-tube-actions";

export default props => {
  const { match, location } = props;
  const { state } = location;
  const [codeList, setCodeList] = React.useState([]);
  let initValues = {
    id: match && parseInt(match.params.id),
    title: undefined,
    uid: undefined,
    description: undefined,
    codeValueId: undefined,
    tag: undefined,
    tagList: []
  }
  if (state) {
    initValues = { ...state, isEdit: true, tagList: state.tags.split(',') }
  }
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

  const addNewTag = React.useCallback((values, setValues) => {
    const { tag, tagList} = values;
    const temp = [...tagList];
    temp.push(tag);
    setValues({...values, 'tag': '', tagList: temp});
  });

  const removeTag = React.useCallback((values, entity, setValues) => {
    const {tagList} = values;
    const temp = tagList.filter(item => item !== entity);
    setValues({...values, 'tag': '', tagList: temp});
  });
 
  const persistYouTubeStoreRecord = React.useCallback(values => {
    const [youTubeTableInfo] = dataTableStore.filter(
      item => item.sheetName === "youtube"
    );
    dispatch(
      setYouTubeRecordByValues(
        {
          ...values,
          tags: values.tagList.join(",")
        },
        youTubeTableInfo
      )
    );
  });

  return (
    <React.Fragment>
      <Formik
        initialValues={{...initValues}}
        validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = 'Please enter YouTube post title';
        }
        if (!values.uid) {
          errors.uid = 'Please enter YouTube post id (copy from the YouTube URL ex: www.youtube.com/watch?v=<b>Y6aYx_KKM7A</b>) ';
        }
        if (!values.description) {
          errors.description = 'Please add relative video description';
        }
        if (values.tagList.length === 0) {
          errors.tag = 'Please add tags to search the content';
        }
        if (!values.codeValueId) {
          errors.codeValueId = 'Please select appropriate group/category';
        }

        return errors;
      }}
        onSubmit={values => persistYouTubeStoreRecord(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
          setValues,
        }) => (
          <form onSubmit={handleSubmit}>
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
                  onClick={()=>setValues({})}
                >
                  <i className="material-icons">clear</i> Clear
                </button>
                <button
                  type="submit"
                  disabled={!isValid}
                  className="mt-1 btn waves-effect waves-light red dark-2"
                >
                  <i className="material-icons">save</i> Save
                </button>
              </div>
            </div>
            <div className="row m-1">
              <div className="col s12 m12 l6">
                <div className="input-field m-1">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="validate"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="clipTitle">Title</label>
                  <span className="helper-text">{errors.title && touched.title && errors.title}</span>
                </div>
                <div className="input-field m-1">
                  <input
                    id="uid"
                    name="uid"
                    type="text"
                    className="validate"
                    value={values.uid}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="clipuid">uid</label>
                  <span className="helper-text">{errors.uid && touched.uid && errors.uid}</span>
                </div>
                <div className="input-field m-1">
                  <textarea
                    id="description"
                    name="description"
                    className="materialize-textarea"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                  <label htmlFor="clipDescription">Description</label>
                  <span className="helper-text">{errors.description && touched.description && errors.description}</span>
                </div>
                <div className="input-field m-1">
                  {filters && (
                    <React.Fragment>
                      <select
                        id="codeValueId"
                        name="codeValueId"
                        value={values.codeValueId}
                        multiple={false}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {codeList &&
                          codeList.map(section => {
                            return (
                              <optgroup
                                key={section.code}
                                label={section.value}
                              >
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
                      <span className="helper-text">{errors.codeValueId && touched.codeValueId && errors.codeValueId}</span>
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
                      {values.tagList && values.tagList.map((item, index) => {
                          return (
                            <div key={`tagListEntity${index}`} className="chip">
                              {item}
                              <i
                                className="material-icons"
                                onClick={() => removeTag(values, item, setValues)}
                              >
                                close
                              </i>
                            </div>
                          );
                        })}
                      {(!values.tagList || values.tagList.length === 0) && (
                        <label>Add Matching Tags For Search</label>
                      )}
                    </div>
                  </div>
                </div>
                <div className="input-field m-1">
                  <input
                    id="tag"
                    name="tag"
                    type="text"
                    className="validate"
                    value={values.tag}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label htmlFor="clipTag">Add New Tag</label>
                  <span className="helper-text">{errors.tag && touched.tag && errors.tag}</span>
                </div>
                <div className="m-1">
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="waves-effect waves-light btn-small red dark-2"
                      onClick={() => addNewTag(values, setValues)}
                    >
                      Add Tag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
};
