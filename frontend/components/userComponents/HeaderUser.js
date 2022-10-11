import React from 'react';
import {Text, 
        Image, 
        View,
        SafeAreaView,
        TouchableOpacity
        } from 'react-native';
import UserImage from '../../assets/icon/user.png'
import styles from '../styles'
import { useNavigation } from '@react-navigation/native';

export default function HeaderUser(props) {
    const navigation = useNavigation()
  return (
    <SafeAreaView style = {styles.container}>
        <View style = {[styles.mainHeader, styles.mt_20]}>
            <TouchableOpacity 
            onPress={() => {
                navigation.navigate('LogIn')
            }}>
                <Image source = {UserImage}
                        style = {styles.userImage}/>
            </TouchableOpacity>
            <View style = {[styles.ml_10, styles.alignCenterItemVertically]}>
                <Text style = {[styles.userName, styles.bold]}>{props.username}</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}