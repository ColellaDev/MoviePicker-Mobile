import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Picker } from '../screens/Picker';
import { Favorites } from '../screens/Favorites';
import { MovieDetails } from '../screens/MovieDetails';

type AppRoutes = {
    home: undefined
    picker: undefined
    favorites: undefined
    movieDetails: undefined
  }
  
  export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>
  
  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="picker"
                component={Picker}
            />
            <Screen
                name="favorites"
                component={Favorites}
            />
            <Screen
                name="movieDetails"
                component={MovieDetails}
            />
        </Navigator>
    )
}