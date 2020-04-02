import React from "react";
import "./styles.scss";

const CategoryCard = props => {
  console.log("---=== CategoryCard --== ", props);
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
                  <span className={`card-title ${item.className}`}>
                    {item.name}
                  </span>
                </div>
                <div className="card-content">
                  <p className="flow-text">{item.description}</p>
                </div>
                <div className="card-action">
                  <div className="d-flex justify-content-between">
                    <div>
                      <div class="chip">
                        {item.name}
                        <i class="close material-icons">close</i>
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
