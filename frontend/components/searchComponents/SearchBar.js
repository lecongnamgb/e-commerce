import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native'
import {useState} from 'react'

export default function SearchBar(props) {
    const [input, setInput] = useState()
    const navigation = useNavigation();
    const handleSubmitText = () => {
        navigation.navigate('resultSearch', {text: input})
    }
  return (
    <View style = {[styles.flex_row, {borderBottomColor: '#f2f2f2', borderBottomWidth: 1}]}>
            <TextInput 
                placeholder='Tìm kiếm sản phẩm hoặc shop'
                enablesReturnKeyAutomatically = {true}
                returnKeyType="search"
                autoFocus = {props.focus}
                onChangeText={text => setInput(text)}
                onSubmitEditing={handleSubmitText}
                defaultValue = {props.value}
                style = {[
                        {
                            width: props.widthSearchInput, 
                            height: 36, 
                            backgroundColor: '#f2f2f2', 
                            borderRadius: 3,
                            fontSize: 15
                        }, 
                        styles.p_10, 
                        styles.mb_15,
                        styles.ml_10,
                        styles.mt_10
                        ]}
            />
            <View style = {[styles.mt_10]}>
                <Button
                    title = {"Thoát"}
                    color = 'red'
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                />
            </View>
      </View>
  )
}