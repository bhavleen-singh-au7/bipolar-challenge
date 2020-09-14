import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import PhotoGrid from "../components/PhotoGrid";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
// import { getImages } from "../API";

const Main = () => {
  // const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    const fetchedData = async () => {
      const API = "https://api.unsplash.com";
      const accessKey = process.env.REACT_APP_ACCESS_KEY;

      // // console.log(err);
      const result = await axios(
        `${API}/photos/random?client_id=${accessKey}&count=12&orientation=squarish`
      );

      setItems([...items, ...result.data]);
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
