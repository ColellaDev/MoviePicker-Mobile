import {
  Container,
  Main,
  Title,
  Information,
  Banner,
  Poster,
  Raiting,
  Text,
  Overview,
  Label,
  FavoriteButton,
  TextButton,
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

  const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year.slice(-2)}`;
  };

  return (
    <Container>
      <Banner
        source={{
          uri: `https://image.tmdb.org/t/p/w400${movie.backdrop_path}`,
        }}
      />
      <Title>
        {movie.title || movie.name} ({(movie.release_date ? movie.release_date.split("-")[0] : movie.first_air_date?.split("-")[0])})
      </Title>
      <Main>
        <Poster
          source={{
            uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
          }}
        />

        <Information>
          <Text>
            <Label>Título Original</Label> {movie.original_title || movie.original_name}
          </Text>
          <Text>
            <Label>Data Lançamento</Label> {formatDate(movie.release_date || movie.first_air_date)}
          </Text>
          <Raiting>
            <Label>Nota</Label>
            {"  "}
            <Ionicons name="star" size={12} color="#FFD447" />{" "}
            {formattedVoteAverage} ( {movie.vote_count} )
          </Raiting>
          <Text>
            <Label>Gêneros</Label> {getGenres(movie.genre_ids)}
          </Text>
        </Information>
      </Main>
      <Overview>
        <Label style={{ fontSize: 20 }}>Sinopse</Label>
        <Text>{movie.overview}</Text>
      </Overview>
      <FavoriteButton>
        <TextButton>Adicionar Favoritos</TextButton>
      </FavoriteButton>
    </Container>
  );
}
