import React from "react";
import "./styles.scss";

const CategoryCard = props => {
  const {
    values: { dataSet }
  } = props;

  return (
    <div id="categoryCards">
      <div className="category-display">
        {dataSet &&
          dataSet.map(item => {
            return (
              <div className="card" key={item.id}>
                <div className="card-image">
                  <img alt={item.name} src={item.url} />
                </div>
                <div className="card-content">
                  <span className={`card-title ${item.className}`}>
                    {item.name}
                  </span>
                  <p className="flow-text">{item.description}</p>
                </div>
                <div className="card-action" style={{color: "rgb(29, 43, 54) !important", background: 'rgb(241, 243, 245) none repeat scroll 0% 0%' }}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <div className="chip">
                        {item.name}
                        <i className="close material-icons">close</i>
                      </div>
                    </div>
                    <button className="btn-floating pulse blue darken-3">
                      <i className="material-icons">navigate_next</i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategoryCard;
