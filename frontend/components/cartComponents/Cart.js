import { View, Text, FlatList, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CartItem from './CartItem'
import { useNavigation } from '@react-navigation/native'
import Header from '../notiComponents/Header'
import CartBill from './CartBill'

function calculateSum(orders) {
    var sum = 0;
    orders.map(item => {
        sum += item.price
    })
    return sum;
}

export default function Cart() {
    const navigation = useNavigation();
    const [orders, setOrders] = useState([
        {
            id: 1,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
            shopName: 'shop1',
            price: 19000,
            quantity: 1
        },
        {
            id: 2,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
            shopName: 'shop2',
            price: 19000,
            quantity: 1
        },
        {
            id: 3,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
            shopName: 'shop3',
            price: 19000,
            quantity: 1
        },
        {
            id: 4,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
            shopName: 'shop4',
            price: 19000,
            quantity: 1
        },
        {
            id: 5,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
            shopName: 'shop5',
            price: 19000,
            quantity: 1
        },
        {
            id: 6,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            description: 'áo vjp pro 123 png 123 fasd sdcd ăer',
            shopName: 'shop6',
            price: 19000,
            quantity: 1
        },
    
    ])
    const [totalValue, setTotalValue] = useState(calculateSum(orders))
  return (
      <SafeAreaView>
          <View>
            <FlatList
                data = {orders}
                renderItem = {({item, index}) => 
                <CartItem
                    sourceIcon = {item.sourceIcon}
                    description = {item.description}
                    shopName = {item.shopName}
                    price = {item.price}
                    key = {index}
                    quantity = {item.quantity}
                    handleClickMinus = {() => {
                        var newQuantity = orders[index].quantity - 1;
                        var newOrders = []
                        if (newQuantity >= 1) {
                            newOrders = orders.map((subItem, subIndex) => {
                                if (subIndex == index) {
                                    return {...subItem, quantity: newQuantity}
                                } else {
                                    return {...subItem}
                                }
                            })
                    
                        } else {
                            newOrders = orders.filter((subItem, subIndex) => {
                                return index != subIndex;
                            }) 
                            // setTotalValue(newOrders.reduce((pre, cur) => {
                            //     return Number(pre) + Number(cur.price) * Number(cur.quantity)
                            // }), 0)
                        }
                        setOrders(newOrders);
                        setTotalValue(calculateSum(newOrders))
                    }}
                    handleClickPlus = {() => {
                        var newQuantity = orders[index].quantity + 1;
                        setOrders(
                            orders.map((subItem, subIndex) => {
                                if (subIndex == index) {
                                    return {...subItem, quantity: newQuantity}
                                } else {
                                    return {...subItem}
                                }
                            })
                        )
                        setTotalValue( orders.map((subItem, subIndex) => {
                            if (subIndex == index) {
                                return {...subItem, quantity: newQuantity}
                            } else {
                                return {...subItem}
                            }
                        }).reduce((pre, cur) => {
                            return Number(pre) + cur.price * cur.quantity
                        }, 0))
                    }}
                />}
                keyExtractor = {item => item.id}
                ListHeaderComponent = {<Header title = "Giỏ hàng" canBack = {true}/>}
                stickyHeaderIndices = {[0]}
                ListFooterComponent = {<View style = {{height: 30}}></View>}
            />
          </View>
          <CartBill 
            totalValue = {totalValue}
            handleClickBuy = {() => {
                navigation.navigate('ConfirmBuy', {totalPrice: totalValue, ...orders});
            }}
        />
      </SafeAreaView>
  )
}