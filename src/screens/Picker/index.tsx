import { Container} from "./styles";
import { useMovieContext } from "../../context/MovieContext";
import { MovieList } from "../../Components/MovieList"; 

export function Picker() {

  const { picker } = useMovieContext();

  return (
    <Container>
      <MovieList data={picker} emptyMessage={"Nenhum filme adicionado ao Picker"}/>
    </Container>
  );
}
