import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from '../styles'
import SeparateView from '../userComponents/SeparateView'

export default function ItemStatus(props) {
  return (
    <View>
        <View style = {{margin: 10}}>
            <Text style = {{textTransform:'uppercase', fontWeight: 'bold', fontSize: 16}}>{props.shopName}</Text>
        </View>
        <View style = {[styles.flex_row, {margin: 10}, styles.hr_light_bottom]}>
            <Image
                source = {{uri: props.uriImg}}
                style = {styles.img_80x80}
            />
            <View style = {{alignItems: 'flex-end', width: '80%'}}>
                <Text 
                    style = {{marginBottom: 15}}
                    numberOfLines = {1}
                >
                    {props.productName}
                </Text>
                <Text style = {{marginBottom: 15}}>x{props.quantity}</Text>
                <Text style = {{marginBottom: 15, color: 'red'}}>{props.priceEach}đ</Text>
            </View>
        </View>
        <View  style = {[{alignItems: 'flex-end', width: '98%', paddingBottom: 10}, styles.hr_light_bottom]}>
            <Text>
                Thành tiền: {" "}
                <Text style = {{color: 'red'}}>
                    {props.priceEach * props.quantity}đ
                </Text>
            </Text>
        </View>
        <View style = {{alignItems: 'flex-end', top: 10, right: 10, height: 60}}>
            {
                props.status == "Đã giao" ?
                <TouchableOpacity 
                    style = {[{backgroundColor: '#66b3ff', height: 40,width: 120, borderRadius: 5}, styles.alignCenterItem, styles.alignCenterItemVertically]}
                    onPress = {props.handlePress}
                    activeOpacity = {1}
                >
                    <Text style = {{color: '#fff'}}>
                        Đánh giá
                    </Text>
                </TouchableOpacity>
                :
                props.status == "Chờ lấy hàng" ?
                <TouchableOpacity 
                    style = {[{backgroundColor: '#66b3ff', height: 40,width: 120, borderRadius: 5}, styles.alignCenterItem, styles.alignCenterItemVertically]}
                    onPress = {props.handleCancel}
                    activeOpacity = {1}
                >
                <Text style = {{color: '#fff'}}>
                    Huỷ đơn
                </Text>
            </TouchableOpacity>
            :
             props.status == "Đã huỷ" ?
             <TouchableOpacity 
                 style = {[{backgroundColor: '#ccc', height: 40,width: 120, borderRadius: 5}, styles.alignCenterItem, styles.alignCenterItemVertically]}
                 activeOpacity = {1}
             >
             <Text style = {{color: '#fff'}}>
                 Đánh giá
             </Text>
         </TouchableOpacity>
         :
         <TouchableOpacity 
                style = {[{backgroundColor: '#ccc', height: 40,width: 120, borderRadius: 5}, styles.alignCenterItem, styles.alignCenterItemVertically]}
                activeOpacity = {1}
            >
            <Text style = {{color: '#fff'}}>
                Huỷ
            </Text>
        </TouchableOpacity>
            }
        </View>
        <SeparateView/>
    </View>
  )
}