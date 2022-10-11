import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import styles from '../styles'
import NotiListItem from './NotiListItem'
import NotiHeader from './Header'
import BottomNavigator from '../Navigator/BottomNavigator'
import SeparateView from '../userComponents/SeparateView'
import NotiItem from './NotiItem'

export default function NotiMain() {
    const listData = [
        {
            uriProduct: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            type: "delivering",
            orderId: 'abcxyz',
            hour: '7:24',
            date: '19-05-2022'
        },
        {
            uriProduct: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            type: "deliveried",
            orderId: 'abcxyz',
            hour: '7:24',
            date: '19-05-2022'
        },
        {
            uriProduct: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            type: "cancel",
            orderId: 'abcxyz',
            hour: '7:24',
            date: '19-05-2022'
        },
        {
            uriProduct: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            type: "waitingConfirm",
            orderId: 'abcxyz',
            hour: '7:24',
            date: '19-05-2022'
        },
        {
            uriProduct: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            type: "delivering",
            orderId: 'abcxyz',
            hour: '7:24',
            date: '19-05-2022'
        },
]
  return (
    <SafeAreaView style = {[styles.bg_white, {height: '100%'}]}>
        <NotiHeader title = {"Thông báo"} containCart = {true}/>
        <SeparateView/>
        <Text style = {[styles.ml_10, styles.mt_10, styles.mb_10]}>Cập nhật đơn hàng</Text>
        <ScrollView>
            {
                listData.map((item, index) => <NotiItem
                    orderId = {item.orderId}
                    type = {item.type}
                    hour = {item.hour}
                    date = {item.date}
                    key = {index}
                    uriProduct = {item.uriProduct}
                />)
            }
        </ScrollView>
        <BottomNavigator 
            height = {90}
            currentActive = {"Noti"}
        />
    </SafeAreaView>
  )
}