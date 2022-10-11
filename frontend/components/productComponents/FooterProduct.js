import { View, Text, Image, Button, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function FooterProduct() {
  return (
      <View style = {[styles.flex_row, {borderColor: '#ccc', borderTopWidth: 1}, styles.bg_white]}>
        <TouchableOpacity style = {[{paddingLeft: 50, paddingRight: 50, marginTop: 15, marginBottom: 15, borderRightColor: '#4d4d4d', borderRightWidth: 1}]}>
            <Image 
                source = {require('../../assets/icon/text_message.png')}
                style = {styles.img_32x32}
            />
        </TouchableOpacity>
        <TouchableOpacity style = {[{paddingLeft: 50, paddingRight: 50, marginTop: 15, marginBottom: 15}]}>
            <Image 
                source = {require('../../assets/icon/cart.png')}
                style = {styles.img_32x32}
            />
        </TouchableOpacity>
        <TouchableOpacity style = {[{width: 150, backgroundColor: '#ff8533'}, styles.alignCenterItem, styles.alignCenterItemVertically]}>
            <Text style = {{color: '#fff', fontSize: 16}}>Mua ngay</Text>
        </TouchableOpacity>
      </View>
  )
}