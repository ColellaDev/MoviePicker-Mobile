import { Container, TitleTest, Title } from "./styled";
import Ionicons from "@expo/vector-icons/Ionicons";

export function SplashScreen() {

  return (
    <Container>
      <Ionicons name="dice" size={70} color="#FFD447" />
      <Title>Movie Picker</Title>
    </Container>
  );
}
