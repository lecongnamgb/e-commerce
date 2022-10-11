import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Header from '../components/notiComponents/Header'
import ListFilterItem from '../components/billStatusComponents/ListFilterItem'
import RecommendItem from '../components/homeComponents/RecommendItem'
import ItemStatus from '../components/billStatusComponents/ItemStatus'
import SeparateView from '../components/userComponents/SeparateView'
import { useNavigation } from '@react-navigation/native'
import FilterItem from '../components/billStatusComponents/FilterItem'
import styles from '../components/styles'

export default function BillStatus({route}) {
    const navigation = useNavigation();
    const [listData, setListData] = useState([
        {
            id: 0,  
            shopName: 'shop1',
            uriImg: 'https://top10tphcm.com/wp-content/uploads/2019/08/ao-thun-tay-lo-co-gai-sexy.png',
            productName: 'Áo thun chất lượng vjppro 123 123 123 123 123',
            priceEach: 325000,
            quantity: 1,
            status: 'Đã huỷ',
        },
        // {
        //     id: 1,  
        //     shopName: 'shop1',
        //     uriImg: 'https://top10tphcm.com/wp-content/uploads/2019/08/ao-thun-tay-lo-co-gai-sexy.png',
        //     productName: 'Áo thun chất lượng vjppro 123 123 123 123 123 ',
        //     priceEach: 325000,
        //     quantity: 1,
        //     status: 'Đang giao',
        // },
        // {
        //     id: 2,  
        //     shopName: 'shop1',
        //     uriImg: 'https://top10tphcm.com/wp-content/uploads/2019/08/ao-thun-tay-lo-co-gai-sexy.png',
        //     productName: 'Áo thun chất lượng vjppro 123 123 123 123 123 ',
        //     priceEach: 325000,
        //     quantity: 1,
        //     status: 'Chờ lấy hàng',
        // },
        // {
        //     id: 3,  
        //     shopName: 'shop1',
        //     uriImg: 'https://top10tphcm.com/wp-content/uploads/2019/08/ao-thun-tay-lo-co-gai-sexy.png',
        //     productName: 'Áo thun chất lượng vjppro 123 123 123 123 123 ',
        //     priceEach: 325000,
        //     quantity: 1,
        //     status: 'Đã giao',
        // },
        // {
        //     id: 4,  
        //     shopName: 'shop1',
        //     uriImg: 'https://top10tphcm.com/wp-content/uploads/2019/08/ao-thun-tay-lo-co-gai-sexy.png',
        //     productName: 'Áo thun chất lượng vjppro 123 123 123 123 123 ',
        //     priceEach: 325000,
        //     quantity: 1,
        //     status: 'Chờ lấy hàng',
        // },
    ])
    const [listCategory, setListCategory] = useState([
        {
            id: 0,
            title: "Chờ lấy hàng",
            active: route.params?.activePage == "Chờ lấy hàng" ? true : false,
        },
        {
            id: 1,
            title: "Đang giao",
            active: route.params?.activePage == "Đang giao" ? true : false,
        },
        {
            id: 2,
            title: "Đã giao",
            active: route.params?.activePage == "Đã giao" ? true : false,
        },
        {
            id: 3,
            title: "Đã huỷ",
            active: route.params?.activePage == "Đã huỷ" ? true : false,
        },
        
    ])
  return (
    <SafeAreaView style = {{ backgroundColor: '#fff'}}>
        <Header
            title = {"Đơn mua"}
            canBack = {true}
        />
       
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator= {false}
            >
                {
                    listCategory.map((item, index) => 
                    <TouchableOpacity
                        key = {index}
                        activeOpacity = {1}
                        onPress = {() => {
                            setListCategory(listCategory.map((subItem, subIndex) => {
                                if (index == subIndex) {
                                    return {...subItem, active: true}
                                } else {
                                    return {...subItem, active: false}
                                }
                            }))
                        }}
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
        <ScrollView>
            <SeparateView/>
            {
                listData.map((item, index) => 
                    <ItemStatus
                        key = {item.id}
                        shopName = {item.shopName}
                        uriImg = {item.uriImg}
                        productName = {item.productName}
                        quantity = {item.quantity}
                        priceEach = {item.priceEach}
                        status = {item.status}
                        handlePress = {() => {
                            navigation.navigate("Review")
                        }}
                        handleCancel = {() => {
                            setListData(listData.filter((_, subIndex) => {
                                return index != subIndex;
                            }))
                        }}
                    />
                )
            }
            <View style = {[styles.alignCenterItem, styles.alignCenterItemVertically, {backgroundColor: '#f2f2f2'}]}>
                <Text>Không còn sản phẩm nào nữa</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}