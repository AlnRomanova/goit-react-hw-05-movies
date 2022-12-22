import axios from 'axios';

const KEY = '29b76cd9b0991523792722269df1c2b5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios('trending/movie/day', {
    params: { api_key: KEY },
  });
  return response.data.results;
};

export const fetchSearchMovies = async keyword => {
  const response = await axios('search/movie/', {
    params: { api_key: KEY, query: keyword },
  });
  return response.data.results;
};

export const fetchMoviesById = async movieId => {
  const response = await axios(`movie/${movieId}`, {
    params: { api_key: KEY },
  });
  return response.data;
};

export const fetchCredits = async movieId => {
  const response = await axios(`movie/${movieId}/credits`, {
    params: { api_key: KEY },
  });
  return response.data.cast;
};

export const fetchReviews = async movieId => {
  const response = await axios(`movie/${movieId}/reviews`, {
    params: { api_key: KEY },
  });
  return response.data.results;
};
