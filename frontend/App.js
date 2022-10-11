import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './components/Navigator/BottomNavigation'
import HomeStackNavigation from './components/Navigator/HomeStackNavigation';

export default function App() {
  return (
        <NavigationContainer independent = {true}>
            <HomeStackNavigation/>
        </NavigationContainer>
  );
}