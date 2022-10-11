import { NavigationContainer } from "@react-navigation/native"
import UserStackNavigation from "../components/Navigator/UserStackNavigation"

export default function User() {
  return (
      <NavigationContainer independent = {true}>
          <UserStackNavigation/>
      </NavigationContainer>
  )
}
