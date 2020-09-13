import React from "react";

const SearchBar = () => {
  return (
    <div className="container w-50">
      <form className="form-inline m-auto text-center rounded shadows">
        <i className="fas fa-search text_color_teal ml-5"></i>
        <input
          className="form-control ml-3 border-0 pr-5 w-75"
          type="text"
          placeholder="Search Photos"
          autoFocus
        />
      </form>
    </div>
  );
};

export default SearchBar;
