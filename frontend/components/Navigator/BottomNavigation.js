
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserScreen from '../../screens/UserScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RecommendListItem from '../homeComponents/RecommendListItem';
import NotiMain from '../notiComponents/NotiMain';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
        <Tab.Navigator
        >
            <Tab.Screen 
                name = {"Home"}
                component={RecommendListItem}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
  )
                }}
            />
            <Tab.Screen 
                name="Noti" 
                component={NotiMain}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
  )
                }}
            />
            <Tab.Screen 
                name="Tôi" 
                component={UserScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
  ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
  )
}