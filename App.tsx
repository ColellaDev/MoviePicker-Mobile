import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GenresProvider } from "./src/context/GenresContext";
import { MovieProvider } from "./src/context/MovieContext";

import theme from "./src/theme";

import { AppRoutes } from "./src/routes/app.routes";
import { Loading } from "./src/Components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <MovieProvider>
          <GenresProvider>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
            {fontsLoaded ? <AppRoutes /> : <Loading />}
          </GenresProvider>
        </MovieProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
