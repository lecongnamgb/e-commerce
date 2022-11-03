import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigation from "./components/Navigator/HomeStackNavigation";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <HomeStackNavigation />
    </NavigationContainer>
  );
}
