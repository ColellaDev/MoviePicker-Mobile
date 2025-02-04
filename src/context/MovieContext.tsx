import { createContext, useContext, useState, ReactNode } from "react";
import { MovieProps } from "../@types/movie";
import { 
  fetchPopularMovies, fetchSearchMovies, fetchRatedMovies, fetchNowPlayingMovies, fetchUpcomingMovies, 
  fetchPopularTv, fetchRatedTv, fetchNowPlayingTv, fetchUpcomingTv, fetchSearchTv 
} from "../services/api";

type MovieContextData = {
  movies: MovieProps[];
  setMovies: (movies: MovieProps[]) => void;
  isLoading: boolean;
  fetchMoviesByCategory: (media: "movie" | "tv", category: "popular" | "top_rated" | "now_playing" | "upcoming") => Promise<void>;
  searchMovies: (query: string) => Promise<void>;
};

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

export function MovieProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchMediaByCategory = {
    movie: {
      popular: fetchPopularMovies,
      top_rated: fetchRatedMovies,
      now_playing: fetchNowPlayingMovies,
      upcoming: fetchUpcomingMovies
    },
    tv: {
      popular: fetchPopularTv,
      top_rated: fetchRatedTv,
      now_playing: fetchNowPlayingTv,
      upcoming: fetchUpcomingTv
    }
  };

  const fetchMoviesByCategory = async (media: "movie" | "tv", category: "popular" | "top_rated" | "now_playing" | "upcoming") => {
    setIsLoading(true);
    try {
      const fetchedMedia = await fetchMediaByCategory[media][category]();
      setMovies(fetchedMedia);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchMovies = async (query: string) => {
    if (!query.trim()) return;
    setIsLoading(true);
    try {
      const [moviesResults, seriesResults] = await Promise.all([
        fetchSearchMovies(query),
        fetchSearchTv(query),
      ]);
      setMovies([...moviesResults, ...seriesResults]);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MovieContext.Provider value={{ movies, setMovies, isLoading, fetchMoviesByCategory, searchMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
