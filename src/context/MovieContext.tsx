import { createContext, useContext, useState, ReactNode } from "react";
import { MovieProps } from "../@types/movie";
import { 
  fetchPopularMovies, fetchSearchMovies, fetchRatedMovies, fetchNowPlayingMovies, fetchUpcomingMovies, 
  fetchPopularTv, fetchRatedTv, fetchNowPlayingTv, fetchUpcomingTv, fetchSearchTv 
} from "../services/api";

type MovieContextData = {
  movies: MovieProps[];
  favorites: MovieProps[];
  picker: MovieProps[];
  setMovies: (movies: MovieProps[]) => void;
  isLoading: boolean;
  fetchMoviesByCategory: (
    media: "movie" | "tv",
    category: "popular" | "top_rated" | "now_playing" | "upcoming",
    pageNumber?: number 
  ) => Promise<void>;
  searchMovies: (query: string) => Promise<void>;
  addFavorite: (movie:MovieProps) => void;
  removeFavorite: (id:number) => void;
  addPicker: (movie:MovieProps) => void;
  removePicker: (id:number) => void;
  page: number;
};

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

export function MovieProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [favorites, setFavorites] = useState<MovieProps[]>([]);
  const [picker, setPicker] = useState<MovieProps[]>([]);
  const [page, setPage] = useState(1);

  const addFavorite = (movie:MovieProps) => {
    setFavorites( (prev) => [...prev, movie])
  }

  const removeFavorite = (id:number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  }

  const addPicker = (movie:MovieProps) => {
    setPicker( (prev) => [...prev, movie])
  }

  const removePicker = (id:number) => {
    setPicker((prev) => prev.filter((movie) => movie.id !== id));
  }

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

  const fetchMoviesByCategory = async (
    media: "movie" | "tv",
    category: "popular" | "top_rated" | "now_playing" | "upcoming",
    pageNumber: number = 1
  ) => {
    setIsLoading(true);
  
    try {
      const fetchedMedia = await fetchMediaByCategory[media][category](pageNumber);
  
      if (pageNumber === 1) {
        setMovies(fetchedMedia); 
      } else {
        setMovies((prevMovies) => [...prevMovies, ...fetchedMedia]);
      }
  
      setPage(pageNumber); 
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
    <MovieContext.Provider value={{ movies, setMovies, isLoading, fetchMoviesByCategory, searchMovies, addFavorite, removeFavorite, favorites, addPicker, removePicker, picker, page }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
