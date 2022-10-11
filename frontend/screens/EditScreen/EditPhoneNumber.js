import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, {useState} from 'react'
import Header from '../../components/notiComponents/Header'
import SeparateView from '../../components/userComponents/SeparateView'
import NormalField from '../../components/checkInComponents/NormalField'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../../components/styles'
import { useNavigation } from '@react-navigation/native'
import RNDateTimePicker from '@react-native-community/datetimepicker'

export default function EditPhoneNumber({route}) {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState(route.params?.phoneNumber)
    const [date, setDate] = useState('2016-05-15')
  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: '#fff'}}>
      <Header
        title = {"Sửa Số Điện Thoại"}
        canBack = {true}
      />
      <SeparateView/>
        <TextInput
            placeholder='Nhập tại đây'
            style = {{padding: 13, borderBottomColor: '#ccc', borderBottomWidth: 1}}
            value = {phoneNumber}
            onChangeText = {(text) => setPhoneNumber(text)}
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
                if (phoneNumber.length != 10) {
                    alert('Số điện thoại phải có 10 ký tự')
                } else {
                    alert('Cập nhật số điện thoại thành công')
                    navigation.goBack();
                }
            }}
                >
            <Text style = {{color: '#fff'}}>Lưu</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}