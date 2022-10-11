import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function StateItem(props) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
    style = {[styles.alignCenterItem, styles.pr_5,  styles.pl_5, styles.mb_10, styles.width_25]}
    activeOpacity = {1}
    onPress = {() => {
        navigation.navigate('BillStatus', {activePage: props.title})
    }}
    >
        <View style = {[styles.pb_15, styles.pt_15]}>
            <Image 
                source = {props.sourceIcon}
                style = {[styles.icon_tag]}
            />
            {props.numOfProductsInCart >= 1 ? 
            <View style = {[{width: 15, height: 15, backgroundColor: 'red', position: 'absolute', top: 10, right: -5}, styles.rounded, styles.alignCenterItem, styles.alignCenterItemVertically]}>
                <Text style = {{color: '#fff'}}>{props.numOfProductsInCart}</Text>
            </View>
            : null
            }
        </View>
        <Text style = {{fontSize: 12}}>{props.title}</Text>
    </TouchableOpacity>
  )
}