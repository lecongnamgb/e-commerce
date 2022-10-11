import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'

export default function HistorySearchItem(props) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={1} onPress = {() => {
        navigation.navigate('resultSearch', {text: props.title})
    }}>
        <View style = {styles.hr_bottom}>
        <Text style = {[styles.p_10, styles.pt_15, styles.pb_15]}>{props.title}</Text>
        </View>
    </TouchableOpacity>
  )
}