import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles'

export default function RecommendCategory(props) {
  return (
    <View 
        style = {[styles.bg_lightGrey, {width: 80, height: 100, alignItems: 'center'}, styles.alignCenterItemVertically]}
    >
        <View style = {[styles.bg_white, {width: 73, alignItems: 'center', borderRadius: 3}, props.active ? {borderColor: 'red', borderWidth: 1}:{}]}>
            <View style= {{width: 70, height: 45, alignItems: 'center', margin: 5, marginBottom: 0}}>
                <View style = {[styles.bg_lightGrey, styles.rounded, {width: 40, height: 40}, styles.alignCenterItem, styles.alignCenterItemVertically]}>
                    <Image 
                        source = {props.sourceIcon}
                        style = {styles.img_32x32}
                    />
                </View>
            </View>
            <View style ={[styles.alignCenterItem, {height: 40, width: 60}]}>
                <Text style = {[styles.pt_5, {textAlign: 'center', fontSize: 12, color: '#696969'}, props.active ? {color: 'red'}: {}]}>{props.title}</Text>
            </View>
        </View>
    </View>
  )
}