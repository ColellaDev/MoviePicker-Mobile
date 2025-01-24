import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY
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

export const fetchSearchMovies = async (query: string, page: number = 1) => {
    const response = await api.get('/search/movie', { params: { query, page } });
    return response.data.results;
};
  