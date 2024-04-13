import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "a9ad17a5a9msh1a9a2e041bc7a99p12b6ddjsnc831cb920e37",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(";;;;", data);
  return data;
};

export default fetchFromApi;
