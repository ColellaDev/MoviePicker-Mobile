import { useState, useEffect } from "react";
import { Container, Main, Title, Information, Banner, Poster, Raiting, Text } from "./styles";
import { useRoute } from "@react-navigation/native";
import { MovieProps } from "../../@types/movie";
import { fetchGenreMovies } from '../../services/api';
import Ionicons from '@expo/vector-icons/Ionicons';

type RouteParams = {
    movie: MovieProps;
  };

export function MovieDetails() {
     const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);

    const route = useRoute();
    const { movie } = route.params as RouteParams;

    const formattedVoteAverage  = Math.floor(movie.vote_average * 10) / 10;

      useEffect(() => {
        const loadGenres = async () => {
          const fetchedGenresMovies = await fetchGenreMovies();
          setGenres(fetchedGenresMovies);
        };
      
        loadGenres();
      }, []);
    
      const getGenres = (genreIds: number[]) => {
        return genreIds
          .map(id => genres.find(genre => genre.id === id)?.name) // Encontra os nomes
          .filter(Boolean) // Remove valores indefinidos
          .join(", "); // Junta os nomes separados por vírgula
      };

    return (
        <Container>
            <Banner source={{ uri: `https://image.tmdb.org/t/p/w400${movie.backdrop_path}` }}/>

            <Main>

            
            <Poster source={{ uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}` }} />  
            
            <Information>
            <Title>
                {movie.title}
            </Title>
            <Raiting>
           Nota:  <Ionicons name="star" size={13} color="#FFD447" />  {formattedVoteAverage}  ({movie.vote_count})
            </Raiting>
            <Text>
                Título Original: {movie.original_title}
            </Text>
            <Text>
                Data Lançamento: {movie.release_date}
            </Text>
            <Text>
                Generos: {getGenres(movie.genre_ids)}
            </Text>
            </Information>
            </Main>


            <Text>
                Sinopse: {movie.overview} 
            </Text>
        </Container>
    )
}