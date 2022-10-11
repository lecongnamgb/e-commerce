import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigation from '../components/Navigator/HomeStackNavigation'

export default function HomeScreen() {
  return (
   <NavigationContainer independent = {true}>
       <HomeStackNavigation/>
   </NavigationContainer>
  )
}