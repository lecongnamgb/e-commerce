import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SeparateView from '../userComponents/SeparateView'
import styles from '../styles'
import CartAndConversation from '../homeComponents/CartAndConversation'
import { useNavigation } from '@react-navigation/native'

export default function NotiHeader(props) {
    const navigation = useNavigation();
  return (
      <View style = {styles.hr_light_bottom}>
        <View style = {[styles.bg_white]}>
            <Text style = {[{textAlign: 'center', fontSize: 20}, styles.mb_15, styles.mt_15]}>{props.title}</Text>
            <View style = {{position: 'absolute', right: 15}}>
                {
                    props.containCart? <CartAndConversation numOfProductsInCart = {2}/> : null
                }         
            </View>
            {props.canBack?
                <TouchableOpacity 
                    style = {{position: 'absolute', left: 12, top: 12}}
                    onPress = {() => {
                        navigation.goBack()
                    }}
                >
                    <Image
                        source = {require('../../assets/icon/back_arrow.png')}
                        style = {[styles.img_32x32]}
                    />
                </TouchableOpacity>
                : null
            }
        </View>
        
      </View>
  )
}