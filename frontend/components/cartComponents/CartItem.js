import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import SeparateView from '../userComponents/SeparateView'
import UserOptionTag from '../userComponents/UserOptionTag'

export default function CartItem(props) {
  return (
      <View>
          <SeparateView/>
          <View style = {styles.hr_bottom}>
            <UserOptionTag 
                sourceIcon = {require('../../assets/icon/store_outline.png')}
                title = {props.shopName}
            />
          </View>
    <View style = {[styles.flex_row, styles.ml_25, styles.mt_10, styles.pb_10, styles.bg_white, styles.hr_bottom]}>
        <View>
            <Image 
                source = {{uri: props.sourceIcon}}
                style = {[styles.img_100x100, {resizeMode: 'contain'}]}
            />
        </View>
        <View>
            <View style = {styles.ml_15}>
                <Text numberOfLines={1} style = {[{width: '80%', fontSize: 16}]}>
                    {props.description}
                </Text>
                <Text style = {{fontWeight: 'bold', color: 'red', fontSize: 16, marginTop: 10}}>
                    {props.price * props.quantity}đ
                </Text>
                <View style = {[styles.flex_row, {marginTop: 10}]}>
                    <TouchableOpacity
                    activeOpacity={1}
                    onPress={props.handleClickMinus}
                    style = {[{borderColor: '#ccc', borderWidth: 1, borderRightWidth: 0, width: 30, height: 35, borderTopLeftRadius: 15, borderBottomLeftRadius: 15}, styles.alignCenterItem, styles.alignCenterItemVertically]}
                    >
                       <Image
                            source = {require('../../assets/icon/minus.png')}
                            style = {styles.img_12x12}
                       />
                    </TouchableOpacity>
                    <View style = {{justifyContent: 'center', borderColor: '#ccc',borderTopWidth: 1, borderBottomWidth: 1}}>
                        <Text>{props.quantity}</Text>
                    </View>
                    <TouchableOpacity
                    activeOpacity={1}
                    onPress={props.handleClickPlus}
                    style = {[{borderColor: '#ccc', borderWidth: 1, borderTopRightRadius: 15, borderBottomRightRadius: 15, borderLeftWidth: 0, width: 30, height: 35}, styles.alignCenterItem, styles.alignCenterItemVertically]}
                    >
                       <Image
                            source = {require('../../assets/icon/plus.png')}
                            style = {styles.img_12x12}
                       />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    </View>
  )
}