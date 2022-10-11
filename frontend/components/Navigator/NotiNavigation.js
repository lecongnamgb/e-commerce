import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NotiMain from '../notiComponents/NotiMain';
import CartScreen from '../../screens/CartScreen';

const Stack = createStackNavigator();
export default function NotiNavigation() {
  return (
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
  )
}