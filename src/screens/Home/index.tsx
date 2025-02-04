import { useEffect, useState } from "react";
import { MovieCard } from "../../Components/MovieCard";
import { MovieProps } from "../../@types/movie";
import { Container, Header, Text, CategoryContainer, CategoryButton, CategoryButtonText } from "./styles";
import { FlatList } from "react-native";
import { Input } from "../../Components/Input";
import { Loading } from "../../Components/Loading";
import { InputButton } from "../../Components/InputButton";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useIsFocused } from "@react-navigation/native";
import { useMovieContext } from "../../context/MovieContext";

export function Home() {
  const { movies, isLoading, fetchMoviesByCategory, searchMovies } = useMovieContext();
  const [searchMovie, setSearchMovie] = useState("");
  const [media, setMedia] = useState<"movie" | "tv">("movie");
  const [category, setCategory] = useState<"popular" | "top_rated" | "now_playing" | "upcoming">("popular");
  const isFocused = useIsFocused();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const renderMovieCard = ({ item }: { item: MovieProps }) => (
    <MovieCard
      posterPath={item.poster_path}
      raiting={Math.floor(item.vote_average * 10) / 10}
      title={item.title || item.name}
      onPress={() => navigation.navigate("movieDetails", { movie: item })}
    />
  );

  const handleSearch = async () => {
    if (!searchMovie.trim()) return;
    await searchMovies(searchMovie);
    setSearchMovie("");
  };

  useEffect(() => {
    const fetchMedia = async () => {
      await fetchMoviesByCategory(media, category);
    };

    if (isFocused) {
      fetchMedia();
    }
  }, [isFocused, category, media]);

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
        <CategoryButton isActive={media === "movie"} onPress={() => setMedia("movie")}>
          <CategoryButtonText isActive={media === "movie"}>Movie</CategoryButtonText>
        </CategoryButton>

        <CategoryButton isActive={media === "tv"} onPress={() => setMedia("tv")}>
          <CategoryButtonText isActive={media === "tv"}>Series</CategoryButtonText>
        </CategoryButton>
      </CategoryContainer>

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
      {
        isLoading ? <Loading/> :
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderMovieCard}
        numColumns={3}
        horizontal={false}
        ListEmptyComponent={!isLoading ? <Text>Nenhum filme encontrado.</Text> : null}
        ListFooterComponent={isLoading ? <Loading /> : null}
      />
    }
    </Container>
  );
}
