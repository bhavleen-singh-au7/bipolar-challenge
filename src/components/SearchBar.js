import React, { useState } from "react";

const SearchBar = ({ getQuery }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e, q) => {
    e.preventDefault();
    setText(q);
    getQuery(q);
  };

  return (
    <div className="container z-depth-1 searchbar">
      <div className="h-center teal-text text-darken-3">
        <i className="fas fa-search"></i>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s11 right">
            <input
              id="search_box"
              type="text"
              className="validate"
              autoComplete="off"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
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
