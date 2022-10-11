import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/notiComponents/Header'
import SeparateView from '../../components/userComponents/SeparateView'
import NormalField from '../../components/checkInComponents/NormalField'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../components/styles'
import { useNavigation } from '@react-navigation/native'

export default function EditAddress({route}) {
    const navigation = useNavigation()
    const [address, setAddress] = useState(route.params?.address)
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: '#fff'}}>
      <Header
        title = {"Sửa Địa chỉ"}
        canBack = {true}
      />
      <SeparateView/>
        <TextInput
            placeholder='Nhập tại đây'
            style = {{padding: 13, borderBottomColor: '#ccc', borderBottomWidth: 1}}
            value = {address}
            onChangeText = {(text) => setAddress(text)}
            autoFocus = {true}
        />
        <TouchableOpacity 
            style = {[
                styles.alignCenterItem, 
                styles.alignCenterItemVertically, 
                {backgroundColor: '#66b3ff', borderRadius: 10}, 
                styles.pt_10, 
                styles.pb_10, 
                styles.ml_20, 
                styles.mr_20,
                styles.mt_15
                ]}
            onPress = {() => {
                alert('Cập nhật địa chỉ thành công')
                navigation.goBack();
            }}
            >
            <Text  style = {{color: '#fff'}}>Lưu</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}