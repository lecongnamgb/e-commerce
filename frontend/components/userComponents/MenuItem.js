import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function MenuItem(props) {
  return (
    <View style = {[styles.alignCenterItem, styles.width_33]}>
      <Image 
        source = {props.sourceIcon}
        style = {styles.menu_icon}
    />
        <Text>{props.title}</Text>
    </View>
  )
}