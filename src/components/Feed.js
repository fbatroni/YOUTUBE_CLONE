import { useState, useEffect } from "react";
import fetchFromApi from "../utils/fetch-from-api";

const Feed = () => {
  const [category, setCategory] = useState("new");
  const [data, setData] = useState({});

  const url = `search?part=snippet&q=${category}`;
  const fetchFeedData = async () => {
    const response = await fetchFromApi(url);
    setData(response);
    console.log(response);
  };

  useEffect(() => {
    fetchFeedData();
  }, [category]);

  return <div></div>;
};

export default Feed;
