import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function ShopIntro(props) {
  return (
    <View style = {[{padding: 15}, styles.flex_row, styles.hr_light_bottom]}>
        <Image
            source = {{uri: props.uriLogo}}
            style = {[styles.img_40x40, styles.rounded]}
        />
        <View style = {{marginLeft: 15}}>
            <Text style = {{fontSize: 16}}>{props.shopName}</Text>
            <Text style = {{color: '#666', marginTop: 7}}>{props.description}</Text>
        </View>
    </View>
  )
}