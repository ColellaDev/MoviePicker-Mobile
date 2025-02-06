import { FlatList } from "react-native";
import { MovieCard } from "../MovieCard";
import { MovieProps } from "../../@types/movie";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { Loading } from "../Loading";
import { Container, Text } from "./styles";

interface MovieListProps {
  data: MovieProps[];
  isLoading?: boolean;
  emptyMessage: string;
}

export function MovieList({ data, isLoading, emptyMessage }: MovieListProps) {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const renderMovieCard = ({ item }: { item: MovieProps }) => (
    <MovieCard
      posterPath={item.poster_path}
      raiting={Math.floor(item.vote_average * 10) / 10}
      title={item.title || item.name}
      onPress={() => navigation.navigate("movieDetails", { movie: item })}
    />
  );

  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieCard}
        numColumns={3}
        horizontal={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        ListEmptyComponent={!isLoading ? (<Text>{emptyMessage}</Text>) : null}
        ListFooterComponent={isLoading ? <Loading /> : null}
      />
    </Container>
  );
}
