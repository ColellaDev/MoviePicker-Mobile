import { useEffect, useState } from 'react';
import { MovieCard } from '../../Components/MovieCard';
import { Container } from './styles';
import { FlatList } from 'react-native';
import { Input } from '../../Components/Input';
import { Loading } from '../../Components/Loading';
import { fetchPopularMovies } from '../../services/api';

type MovieProps = {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
};

export function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [isloading, setIsloading] = useState<boolean>(true)

  const renderMovieCard = ({ item }: { item: MovieProps }) => (
    <MovieCard
       posterPath={item.poster_path}
       raiting={Math.floor(item.vote_average * 10) / 10} 
       title={item.title} />
  );

  useEffect(() => {
    const popularMovies = async () => {
      try {
        const popularMovies = await fetchPopularMovies(); 
        setMovies(popularMovies)
       
      } catch (error) {
        console.error('Erro ao buscar filmes populares:', error);
      } finally {
        setIsloading(false); 
      }
    };
    
    popularMovies(); 
    
  }, []);

  if(isloading) {
    return(
      <Loading/>
    )
  }

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