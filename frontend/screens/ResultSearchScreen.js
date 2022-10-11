import { SafeAreaView, FlatList, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/searchComponents/SearchBar'
import styles from '../components/styles'
import { useNavigation } from '@react-navigation/native'
import FliterBar from '../components/searchComponents/FliterBar'
import AgentIntro from '../components/searchComponents/AgentIntro'
import RecommendItem from '../components/homeComponents/RecommendItem'
import CategoryItem from '../components/homeComponents/CategoryItem'

export default function ResultSearchScreen({route}) {
    const navigation = useNavigation();
    const listData = [
        {
            id: 101,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 102,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 103,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 170,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 104,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 105,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 106,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 107,
            sourceIcon:"https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 108,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 109,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 4.5,
            location: "Hà Nội",
        },
        {
            id: 110,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700,
            rating: 5,
            location: "Thành phố Hồ Chí Minh",
        }
    ]
  return (
    <SafeAreaView style = {styles.bg_white}>
            <SearchBar 
                widthSearchInput = {"80%"}
                value = {route.params.text}
                focus = {false}
            />
            <FliterBar/>
            <FlatList
                data={listData}
                renderItem={({item}) => <RecommendItem recommendItem = {item} containRating = {true}/>}
                numColumns={2}
                scrollEnabled={true}
                keyExtractor ={item => item.id}
                ListHeaderComponent= {<AgentIntro 
                    agentAvt = {"https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg"}
                    seeMore = {true} 
                    handleSeeMore = {() => {
                    navigation.navigate('resultShop', {text: route.params.text})
                }}/>}
                ListFooterComponent = {<View style = {{height: 100}}></View>}
        />
    </SafeAreaView>
  )
}