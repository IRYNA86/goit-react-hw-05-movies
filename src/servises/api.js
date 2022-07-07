import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const api_key = '255c87d9189641f6fa37fc4c55a9531c';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${api_key}`);
  console.log(response);
  return response;
};

export const getNameImages = async nameImages => {
  const response = await axios.get(
    `/search/movie?api_key=${api_key}&query=${nameImages}&language=en-US&page=1&include_adult=false`
  );
  console.log(response);
  return response;
};

export const getMoviesId = async moviesId => {
  const response = await axios.get(`/movie/${moviesId}?api_key=${api_key}`);
  console.log(response);
  return response.data;
};