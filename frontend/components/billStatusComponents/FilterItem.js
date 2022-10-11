import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function FilterItem(props) {
  return (
    <View style = {[
        styles.mt_10,
        styles.mb_10,
        {paddingLeft: props.pl, paddingRight: props.pr, height: 28},
        props.active ?
        {borderBottomColor: 'red', borderBottomWidth: 1} 
        : null
    ]}>
      <Text style = {props.active ? {color: 'red'} : null}>{props.title}</Text>
    </View>
  )
}