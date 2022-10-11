import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import RatingStar from './RatingStar'
import { useNavigation } from '@react-navigation/native'

export default function HeaderEvaluation() {
    const navigation = useNavigation();
  return (
    <View style = {[styles.p_15, styles.flex_row, {borderBottomColor: '#bfbfbf', borderBottomWidth: 1}]}>
        <View>
            <Text style = {{fontWeight: 'bold', fontSize: 16, paddingBottom: 10}}>ĐÁNH GIÁ SẢN PHẨM</Text>
            <View style = {styles.flex_row}>
                <RatingStar stars = {5} size = {16}/>
                <Text style = {{color: 'red', fontSize: 16, paddingLeft: 10, paddingRight: 10}}>5/5</Text>
                <Text style = {{color: '#595959', fontSize: 16}}>{"(46 đánh giá)"}</Text>
            </View>
        </View>
        <TouchableOpacity
            activeOpacity={1}
            onPress = {() => navigation.navigate('Evaluation')}
            style = {[styles.flex_row, styles.alignCenterItem, styles.alignCenterItemVertically, {position: 'absolute', right: 10, top: '50%'}]}
         >
            <Text style = {{color: 'red', fontSize: 16}}>Xem tất cả {"(46)"}</Text>
            <View style = {{bottom: 1}}>
                <Image
                    source = {require('../../assets/icon/right_arrow_red.png')}
                    style = {styles.img_24x24}
                />
            </View>
        </TouchableOpacity>
    </View>
  )
}