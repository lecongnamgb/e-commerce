import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/notiComponents/Header'
import styles from '../components/styles'
import UserOptionTag from '../components/userComponents/UserOptionTag'
import SeparateView from '../components/userComponents/SeparateView'
import { useNavigation } from '@react-navigation/native'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

export default function EditInfoScreen() {
    const userInfo = {
        name: 'Lê Công Nam',
        username: 'lecongnam',
        gender: 'Nam',
        dateOfBirth: '01/02/2001',
        phoneNumber: '0335927773',
        address: null,
    }
    const navigation = useNavigation();
    const [openDob, setOpenDob] = useState(false)
    const [selectedGender, setSelectedGender] = useState();
    const [date, setDate] = useState(new Date());
    const [openGender, setOpenGender] = useState(false);
    const [dob, setDob] = useState(userInfo.dateOfBirth ? userInfo.dateOfBirth : null);
    const [gender, setGender] = useState(userInfo.gender ? userInfo.gender : null);
  return (
    <SafeAreaView style = {[{backgroundColor: '#fff', height: '100%'}]}>
        <Header 
            title = {"Sửa hồ sơ"}
            canBack = {true}
        />
        <View style = {[{height: 150, backgroundColor: '#99ddff'}, styles.alignCenterItem, styles.alignCenterItemVertically]}>
            <Image
                source = {require('../assets/icon/user.png')}
                style = {styles.img_64x64}
            />
        </View>
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('EditName', {name: userInfo.name});

            }}
        >
            <UserOptionTag 
                title = {"Tên"} 
                description = {userInfo.name == null ? null : userInfo.name} 
                containIcon = {false}
            />
        </TouchableOpacity>
        <UserOptionTag 
            title = {"Tên đăng nhập"} 
            description = {userInfo.username}
            containIcon = {false}
            containRightArrow = {false}
        />
        <SeparateView/>
        <TouchableOpacity
            activeOpacity={1}
            onPress = {() => {
                setOpenDob(false);
                setOpenGender(true)
            }}
        >     
            <UserOptionTag 
                title = {"Giới tính"} 
                description = {gender}
                containIcon = {false}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress = {() => {
                setOpenGender(false)
                setOpenDob(true);
            }}
            activeOpacity = {1}
        >
            <UserOptionTag 
                title = {"Ngày sinh"} 
                description = {dob}
                containIcon = {false}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress = {() => {
                navigation.navigate('EditPhoneNumber', {phoneNumber: userInfo.phoneNumber})
            }}
        >
            <UserOptionTag 
                title = {"Số điện thoại"} 
                description = {userInfo.phoneNumber == null ? null : userInfo.phoneNumber}
                containIcon = {false}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress = {() => {
                navigation.navigate('EditAddress', {address: userInfo.address})
            }}
        >
            <UserOptionTag 
                title = {"Địa chỉ"} 
                description = {userInfo.address == null ? null : userInfo.address}
                containIcon = {false}
            />
        </TouchableOpacity>
        <SeparateView/>
        <TouchableOpacity
            style = {styles.hr_bottom}
            onPress = {() => {
                navigation.navigate('EditPassword')
            }}
        >
            <UserOptionTag 
                title = {"Thay đổi mật khẩu"} 
                containIcon = {false}
            />
        </TouchableOpacity>
        <TouchableOpacity
            style = {[styles.alignCenterItem, 
                styles.alignCenterItemVertically, 
                {height: 40, backgroundColor: '#ff6600', margin: 20}]}
            onPress = {() => {

            }}
        >
            <View>
                <Text style = {{fontSize: 16, color: '#fff'}}>Đăng xuất</Text>
            </View>
        </TouchableOpacity>
        {
            openDob ? 
        <View style = {{borderTopColor: '#ccc', borderTopWidth: 1, paddingTop: 10}}>
            <TouchableOpacity
                onPress = {() => {
                    setOpenDob(false);
                    setDob(date.toLocaleDateString("vi-VN"))
                }}
                style = {{alignItems: 'flex-end'}}
            >
                <Text style = {{fontSize: 16, fontWeight: 'bold', color: '#3399ff', paddingRight: 10}}>Done</Text>
            </TouchableOpacity>
            <RNDateTimePicker 
                mode="date" 
                value = {date}
                dateFormat = {'day month year'}
                onChange = {(event, date) => {
                    setDate(date)
                }}
                display = {'spinner'}
            />
        </View>
        : null
        }
        {
            openGender ? 
            <View style = {{borderTopColor: '#ccc', borderTopWidth: 1, paddingTop: 10}}>
            <TouchableOpacity
                onPress = {() => {
                    setOpenGender(false)
                    setGender(selectedGender)
                }}
                style = {{alignItems: 'flex-end'}}
            >
                <Text style = {{fontSize: 16, fontWeight: 'bold', color: '#3399ff', paddingRight: 10}}>Done</Text>
            </TouchableOpacity>
            <Picker
                selectedValue={selectedGender}
                onValueChange = {(itemValue, itemIndex) => {
                    setSelectedGender(itemValue)
                }}
            >
                <Picker.Item label = "Nam" value = {"Nam"}/>
                <Picker.Item label = "Nữ" value = {"Nữ"}/>
                <Picker.Item label = "Khác" value = {"Khác"}/>
            </Picker>
        </View>
        : null
        }
    </SafeAreaView>
  )
}