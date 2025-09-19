import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
  params: {
    api_key: "98d3ad13f4ed2907aea8449af0fbd54b",
    language: "ko-KR",
  }
});

export default instance;