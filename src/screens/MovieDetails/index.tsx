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
  FavoriteTextButton,
  PickerButton,
  PickerTextButton,
} from "./styles";
import { useRoute } from "@react-navigation/native";
import { MovieProps } from "../../@types/movie";
import { useGenres } from "../../context/GenresContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMovieContext } from "../../context/MovieContext";
import { ScrollView } from "react-native";

type RouteParams = {
  movie: MovieProps;
};

export function MovieDetails() {
  const { getGenres } = useGenres();
  const route = useRoute();
  const { movie } = route.params as RouteParams;
  const {
    addFavorite,
    removeFavorite,
    favorites,
    addPicker,
    removePicker,
    picker,
  } = useMovieContext();

  const isFavorite = favorites.some((fav) => fav.id == movie.id);
  const isPicker = picker.some((fav) => fav.id == movie.id);

  const formattedVoteAverage = Math.floor(movie.vote_average * 10) / 10;

  const formatDate = (date: string) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year.slice(-2)}`;
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Banner
          source={{
            uri: `https://image.tmdb.org/t/p/w400${movie.backdrop_path}`,
          }}
        />
        <Title>
          {movie.title || movie.name} (
          {movie.release_date
            ? movie.release_date.split("-")[0]
            : movie.first_air_date?.split("-")[0]}
          )
        </Title>
        <Main>
          <Poster
            source={{
              uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
            }}
          />

          <Information>
            <Text>
              <Label>Título Original</Label>{" "}
              {movie.original_title || movie.original_name}
            </Text>
            <Text>
              <Label>Data Lançamento</Label>{" "}
              {formatDate(movie.release_date || movie.first_air_date)}
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
        <FavoriteButton
          isFavorite={isFavorite}
          onPress={() => {
            isFavorite ? removeFavorite(movie.id) : addFavorite(movie);
          }}
        >
          {isFavorite ? (
            <Ionicons name="trash" size={17} color="#FFF" />
          ) : (
            <Ionicons name="heart" size={19} color="#F75A68" />
          )}
          <FavoriteTextButton isFavorite={isFavorite}>
            {isFavorite ? "Remover Favoritos" : "Adicionar Favoritos"}
          </FavoriteTextButton>
        </FavoriteButton>

        <PickerButton
          isPicker={isPicker}
          onPress={() => {
            //isPicker ? removeFavorite(movie.id) : addFavorite(movie);
          }}
        >
          {isPicker ? (
            <Ionicons name="trash" size={17} color="#FFF" />
          ) : (
            <Ionicons name="dice" size={20} color="#FFD447" />
          )}
          <PickerTextButton isPicker={isPicker}>
            {isPicker ? "Remover Picker" : "Adicionar Picker"}
          </PickerTextButton>
        </PickerButton>
      </Container>
    </ScrollView>
  );
}
