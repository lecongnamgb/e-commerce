import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'

export default function HeaderProduct(props) {
    const navigation = useNavigation();
  return (
    <SafeAreaView style = {[styles.flex_row, styles.m_15]}>
        <TouchableOpacity 
            activeOpacity={1}
            onPress = {() => {
                navigation.goBack();
            }}
            style = {[{width: 36, height: 36, backgroundColor: '#808080'}, styles.rounded, styles.alignCenterItem, styles.alignCenterItemVertically]}
            >
            <Image
                source = {require('../../assets/icon/back_arrow_white.png')}
                style = {styles.img_24x24}
            />
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={1}
            onPress = {() => {
                navigation.navigate('Cart')
            }}
            style = {[{width:36, height: 36, backgroundColor: '#808080', position: 'absolute', right: 1}, styles.rounded, styles.alignCenterItem, styles.alignCenterItemVertically]}
            >
            <Image
                source = {require('../../assets/icon/cart_white.png')}
                style = {styles.img_24x24}
            />
            {props.numOfProductsInCart >= 1 ? 
            <View style = {[{width: 15, height: 15, backgroundColor: 'red', position: 'absolute', top: 0, right: 0}, styles.rounded, styles.alignCenterItem, styles.alignCenterItemVertically]}>
                <Text style = {{color: '#fff'}}>{props.numOfProductsInCart}</Text>
            </View>
            : null
            }
        </TouchableOpacity>
    </SafeAreaView>
  )
}