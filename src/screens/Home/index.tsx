import { useEffect, useState } from "react";
import { MovieCard } from "../../Components/MovieCard";
import { MovieProps } from "../../@types/movie";
import { Container, Header, Text, CategoryContainer, CategoryButton, CategoryButtonText } from "./styles";
import { FlatList } from "react-native";
import { Input } from "../../Components/Input";
import { Loading } from "../../Components/Loading";
import { InputButton } from "../../Components/InputButton";
import { fetchPopularMovies, fetchSearchMovies, fetchRatedMovies, fetchNowPlayingMovies, fetchUpcomingMovies } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useIsFocused } from "@react-navigation/native";

export function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [isloading, setIsloading] = useState<boolean>(true);
  const [searchMovie, setSearchMovie] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [category, setCategory] = useState<"popular" | "top_rated" | "now_playing" | "upcoming">("popular");
  const isFocused = useIsFocused();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const renderMovieCard = ({ item }: { item: MovieProps }) => (
    <MovieCard
      posterPath={item.poster_path}
      raiting={Math.floor(item.vote_average * 10) / 10}
      title={item.title}
      onPress={() => handleMoviePress(item)}
    />
  );

  const handleMoviePress = (movie: MovieProps) => {
    navigation.navigate("movieDetails", { movie });
  };

  const handleSearch = async () => {
    if (!searchMovie.trim()) {
      return;
    }
    setIsSearching(true);
    const searchResults = await fetchSearchMovies(searchMovie);
    setMovies(searchResults);
    setIsSearching(false);
  };

  const fetchMoviesByCategory = {
    popular: fetchPopularMovies,
    top_rated: fetchRatedMovies,
    now_playing: fetchNowPlayingMovies,
    upcoming: fetchUpcomingMovies
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fechedMovies  = await fetchMoviesByCategory[category]();
        setMovies(fechedMovies);
      } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
      } finally {
        setIsloading(false);
      }
    };

    if (isFocused) {
      fetchMovies();
    }
  }, [isFocused, category]);

  if (isloading) {
    return <Loading />;
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
        <InputButton onPress={handleSearch} />
      </Header>

      <CategoryContainer>
        <CategoryButton isActive={category === "popular"} onPress={() => setCategory("popular")}>
          <CategoryButtonText isActive={category === "popular"}>Popular</CategoryButtonText>
        </CategoryButton>

        <CategoryButton isActive={category === "top_rated"} onPress={() => setCategory("top_rated")}>
          <CategoryButtonText isActive={category === "top_rated"}>Top Rated</CategoryButtonText>
        </CategoryButton>

        <CategoryButton isActive={category === "now_playing"} onPress={() => setCategory("now_playing")}>
          <CategoryButtonText isActive={category === "now_playing"}>Now Playing</CategoryButtonText>
        </CategoryButton>

        <CategoryButton isActive={category === "upcoming"} onPress={() => setCategory("upcoming")}>
          <CategoryButtonText isActive={category === "upcoming"}>Upcoming</CategoryButtonText>
        </CategoryButton>
      </CategoryContainer>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderMovieCard}
        numColumns={3}
        horizontal={false}
        ListEmptyComponent={
          !isSearching ? <Text>Nenhum filme encontrado.</Text> : null
        }
        ListFooterComponent={isSearching ? <Loading /> : null}
      />
    </Container>
  );
}
