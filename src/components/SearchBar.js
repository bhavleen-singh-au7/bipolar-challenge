import React, { useState } from "react";

const SearchBar = ({ getQuery }) => {
  const [value, setValue] = useState("");

  const handleClick = (e, q) => {
    e.preventDefault();
    setValue(q);
    getQuery(q);
  };

  return (
    <div
      className="container z-depth-1 teal"
      style={{ width: "35%", position: "relative" }}
    >
      <div className="h-center teal-text text-darken-3">
        <i className="fas fa-search"></i>
      </div>
      <form onSubmit={handleClick}>
        <div className="row">
          <div className="input-field col s11 right">
            <input
              id="search_box"
              type="text"
              className="validate"
              autoComplete="off"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <label htmlFor="search_box">
              Search Photos
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
