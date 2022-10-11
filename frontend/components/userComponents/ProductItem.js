import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from '../styles'

export default function ProductItem(props) {
  return (
    <View style = {[styles.productItem, styles.full_border, styles.alignCenterItem, styles.ml_5, styles.mr_5]}>
        <Image 
            source = {props.sourceImage}
            style = {styles.productImage}
        />
        <Text style = {[styles.numberOfPurchases, styles.mb_5, styles.mt_5]}>Đã mua {props.numberOfPurchases} lần</Text>
        <Text style = {{color: 'red', fontSize: 12}}>{props.price}đ</Text>
    </View>
  )
}