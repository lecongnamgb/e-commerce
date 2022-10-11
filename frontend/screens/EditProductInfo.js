import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import FieldWithUpperLabel from '../components/checkInComponents/FieldWithUpperLabel'
import Header from '../components/notiComponents/Header'
import styles from '../components/styles'
import SeparateView from '../components/userComponents/SeparateView'
import UserOptionTag from '../components/userComponents/UserOptionTag'
import { Picker } from '@react-native-picker/picker'

export default function EditProductInfo({route}) {
    const [productName, setProductName] = useState(route.params?.productName);
    const [price, setPrice] = useState(route.params?.price)
    const [uriProductAvt, setUriProductAvt] = useState(route.params?.uriProductAvt)
    const [uriProductImg1, setUriProductImg1] = useState(route.params?.uriProductImg1)
    const [uriProductImg2, setUriProductImg2] = useState(route.params?.uriProductImg2)
    const [uriProductImg3, setUriProductImg3] = useState(route.params?.uriProductImg3)
    const [description, setDescription] = useState(route.params?.description)
    const [origin, setOrigin] = useState(route.params?.origin)
    const [openCategory, setOpenCategory] = useState(false)
    const listCategory = [
        {
            id: 2,
            title: "Quần áo nam"
        },
        {
            id: 3,
            title: "Quần áo nữ"
        }, 
        {
            id: 4,
            title: "Nhà cửa & đời sống"
        },
        {
            id: 5,
            title: "Đồ chơi"
        },
        {
            id: 6,
            title: "Sách"
        },
        {
            id: 7,
            title: "Thiết bị điện tử"
        },
        {
            id: 8,
            title: "Mỹ phẩm"
        },
        {
            id: 9,
            title: "Giày dép nam"
        },
        {
            id: 10,
            title: "Giày dép nữ"
        }, 
        {
            id: 11,
            title: "Phụ kiện" 
        }
    ]

    const [selectedCategory, setSelectedCategory] = useState('');
  return (
      <SafeAreaView style = {{height: '100%', backgroundColor: '#fff'}}>
    <ScrollView style = {{height: '100%',backgroundColor: '#fff'}}>
        <Header
            title = {route.params.title}
            canBack = {true}
        />
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Tên sản phẩm"}
                plhdTitle = {"Tên sản phẩm"}
                value = {productName}
                onChangeText = {txt => setProductName(txt)}
            />
        </View>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Giá sản phẩm"}
                plhdTitle = {"Giá"}
                value = {price}
                onChangeText = {txt => setPrice(txt)}
            />
        </View>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Ảnh đại diện sản phẩm"}
                plhdTitle = {"Link ảnh"}
                value = {uriProductAvt}
                onChangeText = {txt => setUriProductAvt(txt)}
            />
        </View>
        <TouchableOpacity 
            style = {[styles.p_10, styles.flex_row, styles.hr_light_bottom]}
            onPress = {() => {
                setOpenCategory(true);
            }}
        >
            <View style = {[styles.alignCenterItem, styles.alignCenterItemVertically]}>
                <Text>Danh mục hàng</Text>
            </View>
            <View
                style = {{width: '75%', alignItems: 'flex-end'}}
            >
                <View style = {[styles.alignCenterItem, styles.alignCenterItemVertically, styles.flex_row]}>
                    <Text style = {selectedCategory == '' ? {color: '#8c8c8c'} : null}>{selectedCategory == '' ? "Thiết lập ngay" : selectedCategory}</Text>
                    <Image
                        source = {require('../assets/icon/right_arrow.png')}
                        style = {styles.img_24x24}
                    />
                </View>
            </View>
        </TouchableOpacity>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Xuất sứ sản phẩm"}
                plhdTitle = {"Xuất sứ"}
                value = {origin}
                onChangeText = {txt => setOrigin(txt)}
            />
        </View>
        <SeparateView/>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Link ảnh phụ 1"}
                plhdTitle = {"Link ảnh 1"}
                value = {uriProductImg1}
                onChangeText = {txt => setUriProductImg1(txt)}
            />
        </View>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Link ảnh phụ 2"}
                plhdTitle = {"Link ảnh 2"}
                value = {uriProductImg2}
                onChangeText = {txt => setUriProductImg2(txt)}
            />
        </View>
        <View style = {styles.hr_light_bottom}>
            <FieldWithUpperLabel
                label = {"Link ảnh phụ 3"}
                plhdTitle = {"Link ảnh 3"}
                value = {uriProductImg3}
                onChangeText = {txt => setUriProductImg3(txt)}
            />
        </View>
        <SeparateView/>
        <View>
            <TextInput
                style = {{backgroundColor: '#f2f2f2', height: 150, margin: 10, paddingLeft: 10, paddingTop: 10}}
                placeholder = {"Mô tả sản phẩm"}
                multiline = {true}
                value = {description}
                onChangeText = {txt => setDescription(txt)}
            />
        </View>
        <TouchableOpacity 
            style = {[{marginLeft: 20, marginTop: 20, marginRight: 20, backgroundColor: '#66b3ff', borderRadius: 10, height: 30}, styles.alignCenterItem, styles.alignCenterItemVertically]}
            onPress = {() => {
                console.log(numberOfStars, review)
            }}
        >
                <Text style = {{color: '#fff'}}>Lưu</Text>
        </TouchableOpacity>
        {
            openCategory ? 
            <View style = {{borderTopColor: '#ccc', position: 'absolute', bottom: 0, width: '100%', backgroundColor: '#fff', borderTopWidth: 1, paddingTop: 10}}>
                <TouchableOpacity
                    onPress = {() => {
                        setOpenCategory(false)
                    }}
                    style = {{alignItems: 'flex-end'}}
                >
                    <Text style = {{fontSize: 16, fontWeight: 'bold', color: '#3399ff', paddingRight: 10}}>Done</Text>
                </TouchableOpacity>
                <Picker
                    selectedValue={selectedCategory}
                    onValueChange = {(itemValue, itemIndex) => {
                        setSelectedCategory(itemValue)
                    }}
                >
                    {listCategory.map(item => <Picker.Item key = {item.id} label = {item.title} value = {item.title}/>)}
                </Picker>
        </View>
        : null
        }
    </ScrollView>
    </SafeAreaView>
  )
}