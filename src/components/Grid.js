import React from "react";
import Spinner from "./Spinner";

const Grid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="row">
      {items.map((item) => (
        <div className="col-sm-1 col-md-3">
          <Item key={item.name} item={item} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
