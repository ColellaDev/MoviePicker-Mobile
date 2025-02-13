import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { 
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useFonts, Anton_400Regular} from "@expo-google-fonts/anton"
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GenresProvider } from "./src/context/GenresContext";
import { MovieProvider } from "./src/context/MovieContext";
import { CustomSplashScreen } from "./src/screens/CustomSplashScreen"; 
import theme from "./src/theme";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, Anton_400Regular, Poppins_600SemiBold });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
      setIsReady(true);
    };

    if (fontsLoaded) {
      loadApp();
    }
  }, [fontsLoaded]);

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <MovieProvider>
          <GenresProvider>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            {isReady ? <AppRoutes /> : <CustomSplashScreen />}
          </GenresProvider>
        </MovieProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
