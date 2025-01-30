import {
  Container,
  Main,
  Title,
  Information,
  Banner,
  Poster,
  Raiting,
  Text,
  Overview
} from "./styles";
import { useRoute } from "@react-navigation/native";
import { MovieProps } from "../../@types/movie";
import { useGenres } from "../../context/GenresContext";
import Ionicons from "@expo/vector-icons/Ionicons";

type RouteParams = {
  movie: MovieProps;
};

export function MovieDetails() {

  const { getGenres } = useGenres();

  const route = useRoute();
  const { movie } = route.params as RouteParams;

  const formattedVoteAverage = Math.floor(movie.vote_average * 10) / 10;

  return (
    <Container>
      <Banner
        source={{
          uri: `https://image.tmdb.org/t/p/w400${movie.backdrop_path}`,
        }}
      />
      <Title>{movie.title}</Title>
      <Main>
        <Poster
          source={{
            uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
          }}
        />

        <Information>
          <Raiting>
            Nota: <Ionicons name="star" size={13} color="#FFD447" />{" "}
            {formattedVoteAverage}  ( {movie.vote_count} )
          </Raiting>
          <Text>Título Original: {movie.original_title}</Text>
          <Text>Data Lançamento: {movie.release_date}</Text>
          <Text>Generos: {getGenres(movie.genre_ids)}</Text>
        </Information>
        
      </Main>
      <Overview>Sinopse: {movie.overview}</Overview>
      
    </Container>
  );
}
