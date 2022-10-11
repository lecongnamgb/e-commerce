import { View, Text } from 'react-native'
import React from 'react'
import HorizontalRecommendList from './HorizontalRecommendList'
import styles from '../styles'
import CategoryListItem from './CategoryListItem'

export default function RecommendToday() {
  return (
      <View>
          <CategoryListItem/>
          <View style= {[styles.alignCenterItemVertically,styles.pl_10, styles.bg_white, {height: 40}]}>
            <Text style = {styles.color_orange}>GỢI Ý HÔM NAY</Text>
          </View>
          <HorizontalRecommendList/>
      </View>
  )
}