import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(err);
    const API = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESS_KEY;

    // console.log(err);
    const result = await axios(
      `${API}/search/photos?client_id=${accessKey}&query=${value}&per_page=12&orientation=squarish`
    );

    console.log(result.data);

    setItems([...items, ...result.data.results]);
    setIsLoading(false);
  };

  return (
    <div
      className="container z-depth-1"
      style={{ width: "35%", position: "relative" }}
    >
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
