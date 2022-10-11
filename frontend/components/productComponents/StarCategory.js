import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles'
import RatingStar from './RatingStar'

export default function StarCategory(props) {
    const {rating} = props;
  return (
    <View style = {styles.p_5}>
      <View style = {[rating.active == true ?{backgroundColor: '#fff', borderWidth: 1, borderColor: 'red'}:{backgroundColor: '#f2f2f2'},{width: 70, paddingTop: 10, borderRadius: 5}, styles.alignCenterItem, styles.alignCenterItemVertically]}>
        <RatingStar stars = {rating.stars}/>
        <Text style = {[styles.pt_5, styles.pb_5,rating.active ?{color: 'red'}: {color: '#4d4d4d'}]}>{"(" + rating.numberOfVoting + ")"}</Text>
      </View>
    </View>
  )
}