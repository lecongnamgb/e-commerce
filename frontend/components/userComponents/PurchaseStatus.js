import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native'
import styles from '../styles';
import StateItem from './StateItem';
import pendingIcon from '../../assets/icon/pendingConfirm.png';
import waitingIcon from '../../assets/icon/waiting.png';
import shippingIcon from '../../assets/icon/shipping.png';
import reviewIcon from '../../assets/icon/review.png'
import cancelBill from '../../assets/icon/cancelBill.png'
import packageIcon from '../../assets/icon/package.png'

export default function PurchaseStatus() {
  return (
    <View style = {[styles.borderTop, styles.flex_row, styles.width_100]} >
            <StateItem
                sourceIcon = {waitingIcon}
                title = {"Chờ lấy hàng"}
                numOfProductsInCart = {5}
                />
        <StateItem
            sourceIcon = {shippingIcon}
            title = {"Đang giao"}
            numOfProductsInCart = {10}
            />
        <StateItem
            sourceIcon = {packageIcon}
            title = {"Đã giao"}
            />
        <StateItem 
            sourceIcon = {cancelBill}
            title = {"Đã huỷ"}
            numOfProductsInCart = {0}
        />
    </View>
  )
}
