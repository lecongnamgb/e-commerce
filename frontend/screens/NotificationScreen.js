import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import NotiMain from '../components/notiComponents/NotiMain';
import CartScreen from './CartScreen';

const Stack = createStackNavigator();

export default function NotificationScreen() {
  return (
    <NavigationContainer independent = {true}>
          <Stack.Navigator>
        <Stack.Screen
            name = {"NotiMain"}
            component = {NotiMain}
            options = {
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"Cart"}
            component = {CartScreen}
            options = {
                {
                    headerShown: false
                }
            }
        />
    </Stack.Navigator>
    </NavigationContainer>
  )
}