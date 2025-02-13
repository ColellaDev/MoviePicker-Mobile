import { useEffect, useState } from "react";
import { Container, Header, Text, CategoryContainer, CategoryButton, CategoryButtonText } from "./styles";
import { Input } from "../../Components/Input";
import { InputButton } from "../../Components/InputButton";
import { useIsFocused } from "@react-navigation/native";
import { useMovieContext } from "../../context/MovieContext";
import { MovieList } from "../../Components/MovieList";

export function Home() {
  const { movies, isLoading, fetchMoviesByCategory, searchMovies } = useMovieContext();
  const [searchMovie, setSearchMovie] = useState("");
  const [media, setMedia] = useState<"movie" | "tv">("movie");
  const [category, setCategory] = useState<"popular" | "top_rated" | "now_playing" | "upcoming">("popular");
  const isFocused = useIsFocused();

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
      
      <MovieList
        data={movies}
        isLoading={isLoading}
        emptyMessage={"Nenhum filme encontrado"}
        media={media}
        category={category}
      />
      
    </Container>
  );
}
