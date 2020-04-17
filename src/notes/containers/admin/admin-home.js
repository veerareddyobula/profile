import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadYouTubeStore, searchInYouTubeStore } from "store/actions";

export default props => {
  const { history } = props;
  const dispatch = useDispatch();
  const [searchStr, setSearchStr] = React.useState();

  const {
    youTubeStoreSrc,
    youTubeStore,
    filters,
    dataTableStore
  } = useSelector(state => {
    return {
      youTubeStoreSrc: state.YouTubeStore,
      youTubeStore: state.YouTubeStore && state.YouTubeStore.renderSet,
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
    if (dataTableStore) {
      const [youTubeTableInfo] = dataTableStore.filter(
        item => item.sheetName === "youtube"
      );
      dispatch(loadYouTubeStore(youTubeTableInfo));
    }
  }, [dataTableStore]);

  const getCodeValue = React.useCallback(codeValueId => {
    const tags = [];
    if (filters) {
      Object.keys(filters).forEach(group => {
        filters[group].sections.forEach(section => {
          tags.push(...section.tags);
        });
      });
      const tag = tags.find(entity => entity.id === codeValueId);
      return tag.value;
    }
    return "";
  });

  return (
    <React.Fragment>
      <div className="d-flex justify-content-end mb-1">
        <a
          className="mt-1 btn waves-effect waves-light red dark-2"
          href={`#/products/notes/admin/${youTubeStore &&
            youTubeStore.length + 1}/edit`}
        >
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="white p-1">
        <div className="row">
          <div className="col s12 offset-m6 m6 offset-l6 l6">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: "1rem"
              }}
            >
              <div className="input-field" style={{ marginBottom: "0px" }}>
                <i className="material-icons prefix">search</i>
                <input
                  id="icon_prefix"
                  type="text"
                  className="validate"
                  placeholder="Search"
                  value={searchStr}
                  onChange={event => setSearchStr(event.target.value)}
                />
              </div>
              <button
                className="col s3 btn waves-effect waves-light red dark-2"
                onClick={() =>
                  dispatch(searchInYouTubeStore(youTubeStoreSrc, searchStr))
                }
              >
                <i className="material-icons">find_in_page</i> Find
              </button>
            </div>
          </div>
        </div>
        <table className="responsive-table striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Tags</th>
              <th>UId</th>
              <th>Code Value</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {youTubeStore &&
              youTubeStore.map((entity, index) => {
                return (
                  <tr key={`you_tube_store_${index}`}>
                    <td>{entity.id}</td>
                    <td>{entity.title}</td>
                    <td>{entity.tags}</td>
                    <td>{entity.uid}</td>
                    <td>{getCodeValue(entity.codeValueId)}</td>
                    <td>{entity.description}</td>
                    <td>
                      <button
                        className="waves-effect waves-teal btn-flat"
                        onClick={() =>
                          history.push({
                            pathname: `/products/notes/admin/${entity.id}/edit`,
                            state: entity
                          })
                        }
                      >
                        <i className="material-icons">edit</i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
