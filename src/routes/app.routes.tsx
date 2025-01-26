import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Picker } from '../screens/Picker';
import { Favorites } from '../screens/Favorites';
import { MovieDetails } from '../screens/MovieDetails';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from "styled-components/native";
import { MovieProps } from '../@types/movie';

type AppRoutes = {
    home: undefined
    picker: undefined
    favorites: undefined
    movieDetails: { movie: MovieProps }
  }
  
  export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>
  
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {

    const theme = useTheme();

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: theme.COLORS.BASE_500,
            tabBarInactiveTintColor: theme.COLORS.GRAY_300,
            tabBarStyle: {
                backgroundColor: theme.COLORS.GRAY_600,
                borderTopWidth: 0,
                paddingTop: 6,
              },

        }}>
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                      <Ionicons name="home" size={30} color={color} />
                    ),
                  }}
            />
            <Screen
                name="picker"
                component={Picker}
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="dice" size={30} color={color} />
                    ),
                  }}
            />
            <Screen
                name="favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="heart" size={30} color={color} />
                    ),
                  }}
            />
            <Screen
                name="movieDetails"
                component={MovieDetails}
                options={{ 
                    tabBarButton: () => null,
                    tabBarItemStyle: {
                        display: 'none' 
                      }
                 }}
            />
        </Navigator>
    )
}