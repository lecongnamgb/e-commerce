import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import FilterItem from './FilterItem'

export default function ListFilterItem(props) {
    const [listData, setListData] = useState([
        {
            id: 0,
            title: "Chờ lấy hàng",
            active: props.activePage == "Chờ lấy hàng" ? true : false,
        },
        {
            id: 1,
            title: "Đang giao",
            active: props.activePage == "Đang giao" ? true : false,
        },
        {
            id: 2,
            title: "Đã giao",
            active: props.activePage == "Đã giao" ? true : false,
        },
        {
            id: 3,
            title: "Đã huỷ",
            active: props.activePage == "Đã huỷ" ? true : false,
        },
        
    ])
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator= {false}
    >
        {
            listData.map((item, index) => 
            <TouchableOpacity
                key = {index}
                activeOpacity = {1}
                onPress = {props.handleClickItem}
            >
                <FilterItem 
                    title = {item.title} 
                    active = {item.active}
                    pl = {20}
                    pr = {21}
                    />
            </TouchableOpacity>
            )
        }
    </ScrollView>
  )
}