import axios from 'axios';

const API_KEY = '5b33c050266690bfa5550e8b4d65e2c5';
const BASE_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR'
  },
});

export const fetchPopularMovies = async (page: number = 1) => {
    const response = await api.get('/movie/popular', { params: { page } });
    return response.data.results;
  };