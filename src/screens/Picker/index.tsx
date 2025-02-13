import { useState, useCallback } from "react";
import { Alert, Vibration } from "react-native";
import { Container, Text, DrawButton } from "./styles";
import { useMovieContext } from "../../context/MovieContext";
import { MovieList } from "../../Components/MovieList";
import { DeviceMotion } from "expo-sensors";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import Ionicons from "@expo/vector-icons/Ionicons";

export function Picker() {
  const { picker } = useMovieContext();
  const [lastMotion, setLastMotion] = useState<number>(0);
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  useFocusEffect(
    useCallback(() => {
      let subscription = DeviceMotion.addListener((motionData) => {
        const { x, y, z } = motionData.accelerationIncludingGravity || {
          x: 0,
          y: 0,
          z: 0,
        };
        const totalAcceleration = Math.abs(x) + Math.abs(y) + Math.abs(z);

        if (totalAcceleration > 25 && Date.now() - lastMotion > 2000) {
          setLastMotion(Date.now());
          handleShake();
        }
      });

      DeviceMotion.setUpdateInterval(200);

      return () => subscription?.remove();
    }, [picker, lastMotion])
  );

  const handleShake = () => {
    if (picker.length === 0) {
      Alert.alert("Lista vazia", "Adicione filmes antes de sortear.");
      return;
    }

    Vibration.vibrate();

    const randomIndex = Math.floor(Math.random() * picker.length);
    const selectedMovie = picker[randomIndex];

    navigation.navigate("movieDetails", { movie: selectedMovie });
  };

  return (
    <Container>
      <Text>
        Não sabe o que assistir? {"\n"} 
        Balance o celular ou clique no dado e deixe o Picker decidir!
      </Text>
      <DrawButton onPress={handleShake}>
        <Ionicons name="dice" size={44} color="#FFD447" />
      </DrawButton>
      <MovieList
        data={picker}
        emptyMessage={"Adicione filmes no Picker para sortear"}
      />
    </Container>
  );
}
