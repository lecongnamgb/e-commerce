
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainUserScreen from '../userComponents/MainUserScreen';
import LogInScreen from '../../screens/LogInScreen';
import SignInScreen from '../../screens/SignInScreen';
import EditInfoScreen from '../../screens/EditInfoScreen';

const Stack = createStackNavigator();
export default function UserStackNavigation() {
  return (
    <Stack.Navigator
    >
        <Stack.Screen
            name = {"User"}
            component = {MainUserScreen}
            options={
                {
                    headerShown: false
                }
            }
        />
        <Stack.Screen
            name = {"LogIn"}
            component = {LogInScreen}
            options= {
                {
                    headerShown: false,   
                }
                
            }
        />
       
    </Stack.Navigator>
  )
}