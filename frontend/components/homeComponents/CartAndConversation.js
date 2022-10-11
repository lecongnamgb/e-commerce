import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'

export default function CartAndConversation(props) {
    const navigation = useNavigation();

  return (
    <View style = {[styles.flex_row, styles.mt_10, styles.ml_10]}>
        <TouchableOpacity 
            activeOpacity={1}
            onPress = {() => {
                navigation.navigate('Cart', {screen: 'Cart'})
            }}
        >
            <Image 
                source = {require('../../assets/icon/cart.png')}
                style = {[styles.img_24x24, styles.m_5, styles.ml_10]}
            />
            {props.numOfProductsInCart >= 1 ? 
            <View style = {[{width: 15, height: 15, backgroundColor: 'red', position: 'absolute', top: 0, right: 0}, styles.rounded, styles.alignCenterItem, styles.alignCenterItemVertically]}>
                <Text style = {{color: '#fff'}}>{props.numOfProductsInCart}</Text>
            </View>
            : null
            }
        </TouchableOpacity>
    {/* <Image
        source = {require('../../assets/icon/text_message.png')}
        style = {[styles.img_24x24, styles.m_5, styles.ml_10]}
    /> */}
    </View>
  )
}