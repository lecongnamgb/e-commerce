import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function FieldWithUpperLabel(props) {
  return (
    <View style = {[styles.bg_white, styles.pt_15, styles.pb_15, styles.pl_10, styles.pr_10]}>
        <View style = {[styles.pb_10]}>
            <Text style = {{fontSize: 15}}>{props.label}</Text>
        </View>
        <View>
            <TextInput
                placeholder= {props.plhdTitle}
                value = {props.value}
                onChangeText = {props.onChangeText}
                autoCapitalize = {'none'}
                autoFocus = {props.focus}
                style = {{fontSize: 15}}
            />
        </View>
    </View>
  )
}