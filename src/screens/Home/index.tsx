import { MovieCard } from '../../Components/MovieCard';
import { Container } from './styles';


export function Home() {
  return (
    <Container>
      <MovieCard title="Velozes e Furiosos" genre='Ação'/>
      <MovieCard title="Poderoso Chefão" genre='Ação'/>
      <MovieCard title="Poderoso Chefão" genre='Ação'/>
    </Container>
  );
}