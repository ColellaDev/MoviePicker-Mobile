import { useEffect, useState } from 'react';
import { MovieCard } from '../../Components/MovieCard';
import { Container } from './styles';
import { FlatList } from 'react-native';
import { Input } from '../../Components/Input';
import { fetchPopularMovies } from '../../services/api';

type MovieProps = {
  id: string;
  title: string;
};

export function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([])

  const renderMovieCard = ({ item }: { item: MovieProps }) => (
    <MovieCard title={item.title} />
  );

  useEffect(() => {
    const testApi = async () => {
      try {
        const popularMovies = await fetchPopularMovies(); 
        setMovies(popularMovies)
      } catch (error) {
        console.error('Erro ao buscar filmes populares:', error);
      }
    };

    testApi(); 
  }, []);

  return (
    <Container>
        <Input placeholder="Search for a movie..."/>

        <FlatList 
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderMovieCard}
        numColumns={3}
        horizontal={false}
      />
    </Container>
  );
}