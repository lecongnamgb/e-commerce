import { SafeAreaView } from 'react-native'
import React from 'react'
import Cart from '../components/cartComponents/Cart'
import styles from '../components/styles'

export default function CartScreen() {
  return (
    <SafeAreaView style = {styles.bg_white}>
        <Cart/>
    </SafeAreaView>
  )
}