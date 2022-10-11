import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import Header from '../components/notiComponents/Header'
import ProductInShop from '../components/shopComponents/ProductInShop'
import styles from '../components/styles'
import { useNavigation } from '@react-navigation/native'

export default function ProductManager() {
    const navigation = useNavigation();
    const [listData, setListData] = useState([
        {
            uriImg: 'https://dongphuchaianh.com/wp-content/uploads/2022/02/ao-thun-mau-be-blieve.jpg',
            price: 100000,
            productName: 'ao thun vjppro',
            id: 1,
        },
        {
            uriImg: 'https://dongphuchaianh.com/wp-content/uploads/2022/02/ao-thun-mau-be-blieve.jpg',
            price: 100000,
            productName: 'ao thun vjppro',
            id: 2,
        },
        {
            uriImg: 'https://dongphuchaianh.com/wp-content/uploads/2022/02/ao-thun-mau-be-blieve.jpg',
            price: 100000,
            productName: 'ao thun vjppro',
            id: 3,
        },
        {
            uriImg: 'https://dongphuchaianh.com/wp-content/uploads/2022/02/ao-thun-mau-be-blieve.jpg',
            price: 100000,
            productName: 'ao thun vjppro',
            id: 4,
        },
        {
            uriImg: 'https://dongphuchaianh.com/wp-content/uploads/2022/02/ao-thun-mau-be-blieve.jpg',
            price: 100000,
            productName: 'ao thun vjppro',
            id: 5,
        },
        {
            uriImg: 'https://dongphuchaianh.com/wp-content/uploads/2022/02/ao-thun-mau-be-blieve.jpg',
            price: 100000,
            productName: 'ao thun vjppro',
            id: 6,
        },
        
])
  return (
      <ScrollView>
            <SafeAreaView style = {{height: '100%', backgroundColor: '#fff'}}>
            <Header
                canBack = {true}
                title = {"Quản lý sản phẩm"}
            />
            <TouchableOpacity 
                style = {{position: 'absolute', top: 55, right: 10}}
                onPress = {() => {
                    navigation.navigate('EditProductInfo', {title: 'Thêm sản phẩm'});
                }}
            >
                <Image
                    source = {require('../assets/icon/add.png')}
                    style = {styles.img_32x32}
                />
            </TouchableOpacity>
            {listData.map((item, index) => <ProductInShop
                                        uriImg = {item.uriImg}
                                        productName = {item.productName}
                                        price = {item.price}
                                        key = {item.id}
                                        handleEdit = {() => {
                                            navigation.navigate('EditProductInfo', {
                                                title: 'Sửa thông tin sản phẩm',
                                                productName: 'Áo thun 123'
                                        })
                                        }}
                                        handleDelete = {() => {
                                            Alert.alert(
                                                "Cảnh báo",
                                                "Bạn có chắc chắn muốn xoá sản phẩm này không ?",
                                                [
                                                    {
                                                      text: "Cancel",
                                                      onPress: () => console.log("Cancel Pressed"),
                                                      style: "cancel"
                                                    },
                                                    { text: "OK", onPress: () => setListData(listData.filter((subItem, subIndex) => {
                                                            return index != subIndex;
                                                    })) }
                                                  ]
                                            )
                                        }}
            />)}
            </SafeAreaView>
      </ScrollView>
  )
}