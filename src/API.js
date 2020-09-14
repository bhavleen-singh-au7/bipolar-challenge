import axios from "axios";

export const getImages = async () => {
  const API = "https://api.unsplash.com";
  const accessKey = process.env.REACT_APP_ACCESS_KEY;

  const result = await axios(
    `${API}/photos/random?client_id=${accessKey}&count=12`
  );
  return result.data;
};
