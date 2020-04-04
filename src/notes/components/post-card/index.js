import React from "react";
import PostDisplayCard from "./post-display-card";

const PostCard = props => {
  const {
    values: { dataSet }
  } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12 m6 l3">
          {dataSet &&
            dataSet.map((item, index) => {
              const params = { item, index };
              return (
                <PostDisplayCard
                  {...params }
                  {...props }
                  key={`${item.name}_index_${index}`}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
