import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import styles from '../styles'
import home_icon from '../../assets/icon/home.png'
import home_active_icon from '../../assets/icon/home_active.png'
import bell_icon from '../../assets/icon/bell.png'
import bell_active_icon from '../../assets/icon/bell_active.png'
import { useNavigation } from '@react-navigation/native'
import ItemNavigator from '../bottomNavigatorComponents/ItemNavigator'
import userscreen_icon from '../../assets/icon/userscreen.png'
import userscreen_active_icon from '../../assets/icon/userscreen_active.png'

export default function BottomNavigator(props) {
  return (
    <View style = {[{height: props.height, width: '100%', backgroundColor: '#fff', position: 'absolute', bottom: 0, zIndex: 2}, styles.hr_top]}>
        <View style = {styles.flex_row}>
            <ItemNavigator
                pageOnClick = {"Home"}
                title = {"Home"}
                icon_active = {home_active_icon}
                icon_unactive = {home_icon}
                numOfNoti = {0}
                isActive = {props.currentActive === "Home" ? true : false}
            />
             <ItemNavigator
                pageOnClick = {"NotiMain"}
                title = {"Thông báo"}
                icon_active = {bell_active_icon}
                icon_unactive = {bell_icon}
                numOfNoti = {2}
                isActive = {props.currentActive === "Noti" ? true : false}
            />
             <ItemNavigator
                pageOnClick = {"User"}
                title = {"Tôi"}
                icon_active = {userscreen_active_icon}
                icon_unactive = {userscreen_icon}
                numOfNoti = {0}
                isActive = {props.currentActive === "User" ? true : false}
            />
        </View>
    </View>
  )
}