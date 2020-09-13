import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// import SearchBar from "../components/SearchBar";
import axios from "axios";
import PhotoGrid from "../components/PhotoGrid";

const Main = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchedData = async () => {
      const accessKey = process.env.REACT_APP_ACCESS_KEY;

      const result = await axios(
        `https://api.unsplash.com/photos?client_id=${accessKey}&per_page=12`
      );

      // console.log(result);
      // console.log(result.data.results[0].urls.regular);
      setItems(result.data);
      setIsLoading(false);

      // console.log("--> Line number 30", result.data);
      // console.log("--> Line number 31", result.data[0].id);
      // console.log("--> Line number 32 ", result.data.id);
    };

    fetchedData();
  }, []);

  return (
    <div>
      <Navbar />
      {/* <SearchBar getQuery={(q) => setQuery(q)} /> */}
      <PhotoGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default Main;
