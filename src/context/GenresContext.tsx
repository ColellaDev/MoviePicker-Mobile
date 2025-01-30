import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { fetchGenreMovies } from "../services/api";

type Genre = {
  id: number;
  name: string;
};

type GenresContextData = {
  genres: Genre[];
  getGenres: (genreIds: number[]) => string;
};

const GenresContext = createContext<GenresContextData>({} as GenresContextData);

export function GenresProvider({ children }: { children: ReactNode }) {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const fetchedGenres = await fetchGenreMovies();
        setGenres(fetchedGenres);
      } catch (error) {
        console.error("Erro ao buscar gêneros:", error);
      }
    };

    loadGenres();
  }, []);

  const getGenres = (genreIds: number[]) => {
    return genreIds
      .map((id) => genres.find((genre) => genre.id === id)?.name)
      .filter(Boolean)
      .join(", ");
  };

  return (
    <GenresContext.Provider value={{ genres, getGenres }}>
      {children}
    </GenresContext.Provider>
  );
}

export function useGenres() {
  return useContext(GenresContext);
}
