import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import UserOptionTag from '../userComponents/UserOptionTag'
import styles from '../styles'

export default function (props) {
  return (
        <View style = {[{flex: 1, bottom:30, backgroundColor: '#fff'}, styles.hr_light_top]}>
            <ScrollView></ScrollView>
            <View style = {{height: 50, backgroundColor: '#fff'}}>
                {/* <View style = {styles.hr_bottom}>
                    <UserOptionTag 
                                sourceIcon = {require('../../assets/icon/voucher.png')}
                                title = {"Shop Voucher"}
                                description = {"Chọn mã"}
                            />
                </View> */}
                <View style = {[styles.flex_row, {width: '100%'}]}>
                    <View style = {[{justifyContent: 'center', height: '100%'}, styles.pl_20]}>
                        <Text>
                            Tổng thanh toán: {" "}
                            <Text style = {{fontWeight: 'bold', color: 'red'}}>
                                {props.totalValue}đ
                            </Text>
                        </Text>
                    </View>
                    <TouchableOpacity 
                        style = {[{justifyContent: 'center', height: 50, backgroundColor: '#ff6600', right: 0, position: 'absolute'}, styles.pl_15, styles.pr_15]}
                        onPress = {props.handleClickBuy}
                    >
                        <Text style = {{color: '#fff', fontWeight: 'bold'}}>
                            {props.type == 'confirm'? "Đặt hàng" : "Mua hàng"}
                        </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
  )
}