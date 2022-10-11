import { View, FlatList, Button, SafeAreaView } from 'react-native'
import React from 'react'
import RecommendItem from './RecommendItem'
import RecommendToday from './RecommendToday'
import SearchForm from './SearchForm'
import BottomNavigator from '../Navigator/BottomNavigator'

const listData = [
    {
        id: 1,
        sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 2,
        sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 3,
        sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 170
    },
    {
        id: 4,
        sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 5,
        sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 6,
        sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 7,
        sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 8,
        sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 9,
        sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    },
    {
        id: 10,
        sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
        title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
        price: 1000,
        quantitySold: 1700
    }
]

export default function RecommendListItem({navigation}) {
  return (
      <SafeAreaView style = {{backgroundColor: '#fff'}}>
          <SearchForm width = {"85%"}/>
          <BottomNavigator 
            height = {150}
            currentActive = {"Home"}
          />
        <FlatList
                data={listData}
                renderItem={({item}) => <RecommendItem recommendItem = {item} containRating = {false}/>}
                keyExtractor={item => item.id}
                numColumns={2}
                scrollEnabled={true}
                ListHeaderComponent={RecommendToday}
                ListFooterComponent = {<View style = {{height: 110}}/>}
        />
   </SafeAreaView>
  )
}