import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FilterItem from './FilterItem'

export default function ListCategoryItem(props) {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator= {false}
    >
        {
            props.data.map((item, index) => 
            <TouchableOpacity
                key = {index}
                activeOpacity = {1}
                onPress = {props.onPressItem}
            >
                <FilterItem 
                    pl = {props.data.length === 4 ? 20 : 28}
                    pr = {props.data.length === 4 ? 21 : 28}
                    title = {item.title} 
                    active = {item.active}
                    />
            </TouchableOpacity>
            )
        }
    </ScrollView>
  )
}