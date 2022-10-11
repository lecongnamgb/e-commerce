import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, {useState} from 'react'
import styles from '../styles'
import close_eye_icon from '../../assets/icon/close_eye.png'
import open_eye_icon from '../../assets/icon/open_eye.png'

export default function PasswordField(props) {
    const [showPassword, setShowpassword] = useState(false);

  return (
    <View style = {[styles.flex_row, styles.pb_10, styles.hr_bottom, styles.mt_15]}>

                <Image 
                    source = {require('../../assets/icon/padlock.png')}
                    style = {[styles.img_24x24, styles.ml_15, styles.mr_15]}
                />
                <View style = {[{width: '100%'}, styles.flex_row]}>

                    <TextInput
                        style = {[{fontSize: 16, height: 30, width: '70%'}]}
                        placeholder = {props.plhdTitle}
                        secureTextEntry={showPassword ? false : true}
                        value = {props.value}
                        onChangeText = {props.handleOnChangeText}
                        autoCapitalize = {'none'}
                    />
                    <TouchableOpacity
                        style = {[styles.pl_15, styles.pr_15]}
                        activeOpacity = {1}
                        onPress = {() => {
                            showPassword ? setShowpassword(false) : setShowpassword (true)
                        }}
                    >
                        <Image 
                            source = {showPassword ? open_eye_icon : close_eye_icon}
                            style = {[styles.img_24x24, {top: 3}]}
                        />
                    </TouchableOpacity >
                </View>
              </View>
  )
}