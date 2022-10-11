import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import RecommendCategory from './RecommendCategory'
import {useState, useRef} from 'react'

export default function HorizontalRecommendList() {
    const flatListRef = useRef(null);
    const [currentProductLine, setCurrentProductLine] = useState(0);


    const [listData, setListData] = useState([
        {
            id: 0,
            sourceIcon: require('../../assets/icon/all.png'),
            active: true,
            title: "Tất cả"
        },
        {
            id: 1,
            sourceIcon: require('../../assets/icon/men_clothings.png'),
            title: "Quần áo nam",
            active: false
        },
        {
            id: 2,
            sourceIcon: require('../../assets/icon/women_clothings.png'),
            title: "Quần áo nữ",
            active: false
        }, 
        {
            id: 3,
            sourceIcon: require('../../assets/icon/cooking_tools.png'),
            title: "Nhà cửa & đời sống",
            active: false
        },
        {
            id: 4,
            sourceIcon: require('../../assets/icon/toys.png'),
            title: "Đồ chơi",
            active: false
        },
        {
            id: 5,
            sourceIcon: require('../../assets/icon/books.png'),
            title: "Sách",
            active: false
        },
        {
            id: 6,
            sourceIcon: require('../../assets/icon/electronic_devices.png'),
            title: "Thiết bị điện tử",
            active: false
        },
        {
            id: 7,
            sourceIcon: require('../../assets/icon/cosmetics.png'),
            title: "Mỹ phẩm",
            active: false
        },
        {
            id: 8,
            sourceIcon: require('../../assets/icon/men_shoes.png'),
            title: "Giày dép nam",
            active: false
        },
        {
            id: 9,
            sourceIcon: require('../../assets/icon/women_shoes.png'),
            title: "Giày dép nữ",
            active: false
        }, 
        {
            id: 10,
            sourceIcon: require('../../assets/icon/accessories.png'),
            title: "Phụ kiện",
            active: false 
        }
    ])
  return (
    <FlatList
        data={listData}
        horizontal
        disableScrollViewPanResponder = {true}
        ref ={flatListRef}
        renderItem={({item, index}) => (
            <TouchableOpacity
                activeOpacity={1}
                onPress = {() => {
                    setCurrentProductLine(index);
                    flatListRef.current.scrollToIndex({animated: true, index,  
                        viewOffset: Dimensions.get('screen').width / 2.5,})
                    setListData(
                    listData.map(item => {
                        if (item.id == index) {
                            return {...item, active: true}
                        }
                        return {...item, active: false};
                    })
                    )
                }}
            >
                <RecommendCategory sourceIcon={item.sourceIcon} title={item.title} active={item.active}/>
            </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}` }
    />
  )
}