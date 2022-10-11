import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles'
import SeparateView from '../userComponents/SeparateView'

export default function CategoryItem(props) {
  return (
    <View style={styles.m_15}>
        <View style= {[
            styles.img_80x80, 
            styles.bg_lightGrey, 
            styles.rounded, 
            styles.alignCenterItem, 
            styles.alignCenterItemVertically, 
            ]}>

            <Image 
                source={props.sourceIcon}
                style={styles.img_64x64}
            />
        </View>
        <Text style={{textAlign: 'center',width: 80, marginTop: 10}}>{props.title}</Text>
    </View>
  )
}