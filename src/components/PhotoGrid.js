import React from "react";
import Photo from "./Photo";
import Spinner from "./Spinner";

const PhotoGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="row">
        {items &&
          items.map((item) => (
            <div className="col s12 m6 l3">
              <Photo
                key={item.id}
                item={item.urls.regular}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
