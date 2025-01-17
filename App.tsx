import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';

import theme from "./src/theme"

import { Home } from './src/screens/Home';
import { Loading } from './src/Components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
       <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        { fontsLoaded ? <Home/> : <Loading /> }
    </ThemeProvider>
  );
}
