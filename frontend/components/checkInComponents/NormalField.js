import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function NormalField(props) {
  return (
        <View style = {[styles.flex_row, styles.pb_10, styles.hr_bottom]}>
            <Image 
                source = {props.sourceIcon}
                style = {[styles.img_24x24, styles.ml_15, styles.mr_15]}
            />
            <TextInput
                style = {[{width: '90%', fontSize: 16, height: 30}]}
                placeholder = {props.plhdTitle}
                autoFocus = {props.focus}
                value = {props.value}
                onChangeText = {props.handleOnChangeText}
                autoCapitalize = {'none'}

            />
        </View>
  )
}