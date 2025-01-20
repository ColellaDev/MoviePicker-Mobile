import { useState } from 'react';
import { MovieCard } from '../../Components/MovieCard';
import { Container } from './styles';
import { FlatList } from 'react-native';

type MovieProps = {
  id: string;
  title: string;
  genre: string;
};


export function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([
    { id: "1", title: "Inception", genre: "Sci-Fi" },
    { id: "2", title: "Avatar", genre: "Fantasy" },
    { id: "3", title: "Titanic", genre: "Romance" },
    { id: "4", title: "The Dark Knight", genre: "Action" },
    { id: "5", title: "Interstellar", genre: "Sci-Fi" },
    { id: "6", title: "Wonder Woman", genre: "Adventure" },
    { id: "7", title: "Spider-Man", genre: "Action" },
    { id: "8", title: "Spider-Man", genre: "Action" },
    { id: "9", title: "Spider-Man", genre: "Action" },
    { id: "10", title: "Spider-Man", genre: "Action" },
  ])


  return (
    <Container>
        <FlatList 
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: MovieProps }) => (
          <MovieCard title={item.title} genre={item.genre}/>
        )}
        numColumns={3}
        horizontal={false}
       
      />
    </Container>
  );
}