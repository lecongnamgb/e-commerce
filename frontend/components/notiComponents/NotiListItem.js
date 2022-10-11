import { View, Text } from 'react-native'
import React from 'react'
import NotiItem from './NotiItem'
import styles from '../styles'
import SeparateView from '../userComponents/SeparateView'

export default function NotiListItem() {
  return (
    <View>
        <SeparateView/>
        <Text style = {[styles.ml_10, styles.mt_10, styles.mb_10]}>Cập nhật đơn hàng</Text>
      <NotiItem/>
    </View>
  )
}