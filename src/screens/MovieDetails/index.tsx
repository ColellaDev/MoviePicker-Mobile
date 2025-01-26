import { Container, Title, Banner, Poster, Raiting } from "./styles";
import { useRoute } from "@react-navigation/native";
import { MovieProps } from "../../@types/movie";
import Ionicons from '@expo/vector-icons/Ionicons';

type RouteParams = {
    movie: MovieProps;
  };

export function MovieDetails() {
    const route = useRoute();
    const { movie } = route.params as RouteParams;

    const formattedVoteAverage  = Math.floor(movie.vote_average * 10) / 10;

    return (
        <Container>
            <Banner></Banner>
            <Poster source={{ uri: `https://image.tmdb.org/t/p/w300${movie.poster_path}` }} />  
            <Raiting>
            <Ionicons name="star" size={13} color="#FFD447" />  {formattedVoteAverage}
            </Raiting>
            <Title>
                {movie.title}
            </Title>
        </Container>
    )
}