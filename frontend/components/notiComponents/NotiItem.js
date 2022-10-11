import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from '../styles'
import SeparateView from '../userComponents/SeparateView'

const {width} = Dimensions.get('window')

export default function NotiItem(props) {
  return (
    <View>

        <View style = {[styles.flex_row, styles.bg_white, {borderTopWidth: 1, borderTopColor: '#ccc'}]}>
            <Image 
                source={{uri: props.uriProduct}}
                style = {{width: 60, height: 60, resizeMode: 'contain'}}
            />
            {
                props.type == "delivering" ?
                <View style = {{width: width - 60}}>
                    <Text style ={[styles.p_5]}>Đang vận chuyển</Text>
                    <Text style = {[styles.p_5, {color: '#808080'}]}>
                        Đơn hàng 
                        <Text style = {{color: '#00bfff'}}>{` ${props.orderId} `}</Text>
                        đã được xác nhận. Vui lòng kiểm tra thời gian nhận hàng dự kiện trong phần chi tiết đơn hàng nhé!
                    </Text>
                    <Text style = {[styles.p_5, {color: '#a9a9a9', fontSize: 12}]}>
                        {`${props.hour} ${props.date}`}
                    </Text>
                </View>
                :
                props.type == "waitingConfirm" ?
                <View style = {{width: width - 60}}>
                    <Text style ={[styles.p_5]}>Chờ xác nhận</Text>
                    <Text style = {[styles.p_5, {color: '#808080'}]}>
                        Đơn hàng 
                        <Text style = {{color: '#00bfff'}}>{` ${props.orderId} `}</Text>
                        đang được chờ xác nhận. Vui lòng đợi người cung cấp sản phẩm xác nhận nhé!
                    </Text>
                    <Text style = {[styles.p_5, {color: '#a9a9a9', fontSize: 12}]}>
                        {`${props.hour} ${props.date}`}
                    </Text>
                </View>
                :
                props.type == "cancel" ?
                <View style = {{width: width - 60}}>
                <Text style ={[styles.p_5]}>Đơn hàng đã bị huỷ</Text>
                <Text style = {[styles.p_5, {color: '#808080'}]}>
                    Đơn hàng 
                    <Text style = {{color: '#00bfff'}}>{` ${props.orderId} `}</Text>
                    đã bị huỷ. Hãy đặt thêm các sản phẩm khác nhé!
                </Text>
                <Text style = {[styles.p_5, {color: '#a9a9a9', fontSize: 12}]}>
                    {`${props.hour} ${props.date}`}
                </Text>
            </View>
                :
                props.type == "deliveried" ?
                <View style = {{width: width - 60}}>
                <Text style ={[styles.p_5]}>Đơn hàng đã giao thành công</Text>
                <Text style = {[styles.p_5, {color: '#808080'}]}>
                    Đơn hàng 
                    <Text style = {{color: '#00bfff'}}>{` ${props.orderId} `}</Text>
                    đã giao thành công. Hãy bỏ ra 2 phút để đánh giá sản phẩm nhé!
                </Text>
                <Text style = {[styles.p_5, {color: '#a9a9a9', fontSize: 12}]}>
                    {`${props.hour} ${props.date}`}
                </Text>
            </View>
                : null
                
            }

        </View>
        <SeparateView/>
    </View>
  )
}