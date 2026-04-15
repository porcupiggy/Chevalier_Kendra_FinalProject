import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
console.log("API KEY:", API_KEY);
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export async function searchMovies(query) {
  const res = await axios.get(`${BASE_URL}&s=${query}`);
  return res.data.Search || [];
}

export async function getMovieById(id) {
  const res = await axios.get(`${BASE_URL}&i=${id}`);
  return res.data;
}
