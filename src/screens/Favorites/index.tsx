import { Container} from "./styles";
import { useMovieContext } from "../../context/MovieContext";
import { MovieList } from "../../Components/MovieList"; 

export function Favorites() {

  const { favorites } = useMovieContext();

  return (
    <Container>
      <MovieList data={favorites}/>
    </Container>
  );
}
