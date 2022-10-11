import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../components/searchComponents/SearchBar'
import ShopIntro from '../components/searchComponents/ShopIntro'
import { useNavigation } from '@react-navigation/native'

export default function ResultShop({route}) {
    const navigation = useNavigation();
    const [shops, setShops] = useState([
        {
            id: 1,
            uriLogo: 'https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO.jpg',
            shopName: "Shop áo polo nam",
            description: 'shopaopolonamdep'
        },
        {
            id: 2,
            uriLogo: 'https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO.jpg',
            shopName: "Shop áo polo nam",
            description: 'shopaopolonamdep'
        },
        {
            id: 3,
            uriLogo: 'https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO.jpg',
            shopName: "Shop áo polo nam",
            description: 'shopaopolonamdep'
        },
        {
            id: 4,
            uriLogo: 'https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO.jpg',
            shopName: "Shop áo polo nam",
            description: 'shopaopolonamdep'
        },
        {
            id: 5,
            uriLogo: 'https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO.jpg',
            shopName: "Shop áo polo nam",
            description: 'shopaopolonamdep'
        },
        {
            id: 6,
            uriLogo: 'https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO.jpg',
            shopName: "Shop áo polo nam",
            description: 'shopaopolonamdep'
        },
        {
            id: 7,
            uriLogo: 'https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO.jpg',
            shopName: "Shop áo polo nam",
            description: 'shopaopolonamdep'
        },
    ])
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: '#fff'}}>
      <SearchBar
        widthSearchInput = {'80%'}
        value = {route.params.text}
      />
      <ScrollView>
        {
            shops.map(shop => 
                <TouchableOpacity
                    key = {shop.id}
                    onPress = {() => {
                        navigation.navigate('Shop')
                    }}
                >
                    <ShopIntro 
                        shopName = {shop.shopName}
                        description = {shop.description}
                        uriLogo = {shop.uriLogo}
                    />
                </TouchableOpacity>
            )
        }
      </ScrollView>
    </SafeAreaView>
  )
}