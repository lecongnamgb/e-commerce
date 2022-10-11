import { View, Text } from 'react-native'
import React from 'react'
import Evaluation from './Evaluation'
import HeaderEvaluation from './HeaderEvaluation'

export default function BriefEvaluation() {
    const listData = [
        {
            id: 1,
            userIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            userName: 'Lê Công Nam',
            ratingStars: 5,
            comment: 'Sản phẩm vjppr0',
            date: '05-03-2022',
            time: '13:45'
        },
        {
            id: 2,
            userIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            userName: 'Lê Công Nam',
            ratingStars: 5,
            comment: 'Sản phẩm vjppr0',
            date: '05-03-2022',
            time: '13:45'
        },
    ]
  return (
    <View>
        <HeaderEvaluation/>
      <Evaluation evaluation = {listData[0]}/>
      <Evaluation evaluation = {listData[1]}/>
    </View>
  )
}