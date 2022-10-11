import { View,SafeAreaView, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'
import CartAndConversation from './CartAndConversation'
import { useNavigation } from '@react-navigation/native'

export default function SearchForm(props) {
    const navigation = useNavigation()

  return (
    <SafeAreaView>
        <View style = {[{borderBottomWidth: 1, borderBottomColor: '#f2f2f2', }]}>
            <ScrollView></ScrollView>
            <View style = {[styles.flex_row, {justifyContent: 'flex-start'}]}>
                <TouchableOpacity 
                    style = {{width: props.width}} 
                    activeOpacity = {1}
                    onPress = {() => {
                        navigation.navigate('Search')
                    }}
                >
                    
                    <View 
                        style = 
                            {[
                                {
                                    width: '100%', height: 36, 
                                    backgroundColor: '#f2f2f2', 
                                    borderRadius: 4,
                                },
                                styles.m_10, 
                                styles.mb_15,
                                ]}
                    >
                        <View style = {styles.flex_row}>
                            <Image 
                                source = {require('../../assets/icon/search.png')}
                                style = {{height: 20, width: 20, margin: 8}}
                            />
                            <Text style = {{margin: 10, color: '#a9a9a9'}}>Tìm kiếm sản phẩm hoặc shop</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <CartAndConversation numOfProductsInCart = {2}/>
                </View>
        </View>
    </SafeAreaView>
  )
}