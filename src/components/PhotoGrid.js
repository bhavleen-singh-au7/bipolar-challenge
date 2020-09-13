import React from "react";
import Photo from "./Photo";
import Spinner from "./Spinner";

const PhotoGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col s4">
            {/* {console.log("val ", item.urls.regular)} */}
            <Photo key={item.id} item={item.urls.regular} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;
