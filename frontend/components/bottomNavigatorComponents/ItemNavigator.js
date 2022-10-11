import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from '../styles'

export default function ItemNavigator(props) {
    const navigation = useNavigation();
  return (
    <View style = {[{width: '33%',height: 130}]}>
        <TouchableOpacity
            style = {{marginLeft: 'auto', marginRight: 'auto', marginTop: 10}}
            onPress = {() => {
                navigation.navigate(props.pageOnClick)
            }}
        >
            <View style = {styles.alignCenterItem}>
                <Image
                    source = {props.isActive === true? props.icon_active : props.icon_unactive}
                    style = {styles.img_32x32}
                />
            </View>
            <Text style = {[{fontSize: 12, textAlign: 'center'}, props.isActive ? {color : '#36f'} : {color: '#666'}]}>{props.title}</Text>
            {
            props.numOfNoti > 0 ? 
             <View style = {[{position: 'absolute', top: 0, right: 0, backgroundColor: 'red', width: 15, height: 15}, styles.rounded, styles.alignCenterItem, styles.alignCenterItemVertically]}>
                <Text style = {{color: '#fff'}}>{props.numOfNoti}</Text>
            </View>
            : null
            }
        </TouchableOpacity>
</View>
  )
}