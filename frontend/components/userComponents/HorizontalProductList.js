import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import ProductItem from './ProductItem';
import tshirtIcon from '../../assets/icon/T_shirt2.png'
import styles from '../styles';
import MoreProductItem from './MoreProductItem';

export default function HorizontalProductList() {
  return (
    <ScrollView style = {[styles.border_top, styles.pt_10, styles.pb_10, styles.flex_row]}
            horizontal = {true}>
        <ProductItem
            sourceImage = {tshirtIcon}
            numberOfPurchases = {3}
            price = {7500}
            />
        <ProductItem
            sourceImage = {tshirtIcon}
            numberOfPurchases = {3}
            price = {7500}
            />
        <ProductItem
            sourceImage = {tshirtIcon}
            numberOfPurchases = {3}
            price = {7500}
            />
        <ProductItem
            sourceImage = {tshirtIcon}
            numberOfPurchases = {3}
            price = {7500}
            />
        <ProductItem
            sourceImage = {tshirtIcon}
            numberOfPurchases = {3}
            price = {7500}
            />
        <ProductItem
            sourceImage = {tshirtIcon}
            numberOfPurchases = {3}
            price = {7500}
            />
        <MoreProductItem/>
    </ScrollView>
  )
}