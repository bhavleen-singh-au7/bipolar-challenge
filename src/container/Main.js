import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import PhotoGrid from "../components/PhotoGrid";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";

const Main = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchItems();
  }, [query]);

  const fetchItems = () => {
    const fetchedData = async () => {
      const API = "https://api.unsplash.com";
      const accessKey = process.env.REACT_APP_ACCESS_KEY;

      console.log("->", query);

      // console.log(err);
      var result;
      if (query) {
        console.log("not executed");
        result = await axios(
          `${API}/search/photos?client_id=${accessKey}&query=${query}&per_page=12&orientation=squarish`
        );
        setItems([...items, ...result.data.results]);
      } else {
        result = await axios(
          `${API}/photos/random?client_id=${accessKey}&count=12&orientation=squarish`
        );
        setItems([...items, ...result.data]);
      }

      setIsLoading(false);
    };
    fetchedData();
  };

  return (
    <div>
      <Navbar />
      <SearchBar getQuery={(q) => setQuery(q)} />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchItems}
        hasMore={true}
        loader={<Spinner />}
      >
        <PhotoGrid isLoading={isLoading} items={items} />
      </InfiniteScroll>
    </div>
  );
};

export default Main;
