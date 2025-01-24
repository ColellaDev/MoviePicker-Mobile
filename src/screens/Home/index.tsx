import { useEffect, useState } from 'react';
import { MovieCard } from '../../Components/MovieCard';
import { Container, Header, Text } from './styles';
import { FlatList } from 'react-native';
import { Input } from '../../Components/Input';
import { Loading } from '../../Components/Loading';
import { InputButton } from '../../Components/InputButton';
import { fetchPopularMovies, fetchSearchMovies } from '../../services/api';

type MovieProps = {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
};

export function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([])
  const [isloading, setIsloading] = useState<boolean>(true)
  const [searchMovie, setSearchMovie] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const renderMovieCard = ({ item }: { item: MovieProps }) => (
    <MovieCard
       posterPath={item.poster_path}
       raiting={Math.floor(item.vote_average * 10) / 10} 
       title={item.title} />
  );

  const handleSearch = async () => {
    if (!searchMovie.trim()) {
      return;
    }
    setIsSearching(true);
    const searchResults = await fetchSearchMovies(searchMovie)
    setMovies(searchResults)
    setIsSearching(false);
  }

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
      <Header>
        <Input 
          placeholder="Search for a movie..."
          value={searchMovie}
          onChangeText={setSearchMovie}
          onSubmitEditing={handleSearch}
        />
        <InputButton onPress={handleSearch}/>
      </Header>

      <FlatList 
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderMovieCard}
        numColumns={3}
        horizontal={false}
        ListEmptyComponent={!isSearching ? (<Text>Nenhum filme encontrado.</Text>) : null} // Mensagem quando não há resultados
        ListFooterComponent={isSearching ? <Loading /> : null} // Indicador de carregamento
      />
    </Container>
  );
}