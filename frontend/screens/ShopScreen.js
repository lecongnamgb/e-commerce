import { View,ScrollView, TouchableOpacity,Image, Text  } from 'react-native'
import React, {useState} from 'react'
import styles from '../components/styles'
import { useNavigation } from '@react-navigation/native'
import RecommendItem from '../components/homeComponents/RecommendItem'
import HeaderProduct from '../components/productComponents/HeaderProduct'
import HeaderShop from '../components/shopComponents/HeaderShop'
import FilterItem from '../components/billStatusComponents/FilterItem'
import ListCategoryItem from '../components/billStatusComponents/ListCategoryItem'
import SeparateView from '../components/userComponents/SeparateView'
import { FlatList } from 'react-native-gesture-handler'

export default function ShopScreen() {
    const navigation = useNavigation();
    // const [follow, setFollow] = useState(false)
    const listData = [
        {
            id: 1,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700
        },
        {
            id: 2,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700
        },
        {
            id: 3,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 170
        },
        {
            id: 4,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700
        },
        {
            id: 5,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700
        },
        {
            id: 6,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700
        },
        {
            id: 7,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700
        },
        {
            id: 8,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700
        },
        {
            id: 9,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700
        },
        {
            id: 10,
            sourceIcon: "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
            title: "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
            price: 1000,
            quantitySold: 1700
        }
    ]
    const [listCategory, setListCatgory] = useState([
        {
            title: "Sản phẩm",
            active: true,
        },
        {
            title: "Hàng mới về",
            active: false,
        },
        {
            title: "Top bán chạy",
            active: false,
        },
    ])
  return (
      <View>
           <TouchableOpacity 
                style = {[{backgroundColor : '#808080',zIndex: 1, position: 'absolute', top: 40, left: 20, width: 40, height: 40}, styles.alignCenterItem, styles.alignCenterItemVertically, styles.rounded]}
                onPress = {() => {
                    navigation.goBack();
                }}
            >
                <Image
                    source = {require('../assets/icon/back_arrow_white.png')}
                    style = {[styles.img_24x24, {zIndex: 2}]}
                />
            </TouchableOpacity>
           
            <SeparateView/>
            <FlatList
            data = {listData}
            renderItem = {({item}) => <RecommendItem recommendItem = {item} containRating = {false}/>}
            keyExtractor = {item => item.id}
            numColumns = {2}
            ListHeaderComponent = {
                <View>
                    <HeaderShop
                        shopName = {"Tên shop"}
                        ownerName = {"Tên chủ shop"}
                        uriAvt = {"https://i.pinimg.com/474x/41/9f/f5/419ff508b894f934b4139035ffd04d41.jpg"}
                        uriBg = {"https://img.freepik.com/free-vector/weather-seamless-pattern-background-vector-cute-doodle-illustration-kids_53876-105731.jpg?w=2000"}
                // follow = {follow}        
                        // onPressFollow = {() => {
                        //     setFollow(!follow)
                        // }}
                    />
                    <View
                    style = {styles.flex_row}
                    >
                        {
                        listCategory.map((item, index) => 
                            <TouchableOpacity
                                    key = {index}
                                    activeOpacity = {1}
                                    onPress = {() => {
                                        setListCatgory(
                                            listCategory.map((subItem, subIndex) => {
                                                if (index === subIndex) {
                                                    return {...subItem, active: true}
                                                } else {
                                                    return {...subItem, active: false}
                                                }
                                            })
                                        )
                                    }}
                            >
                                <FilterItem
                                        pl = {30}
                                        pr = {30}
                                        title = {item.title}
                                        active = {item.active}
                                />
                            </TouchableOpacity>
                        )
                        }
                    </View>
                    <SeparateView/>
                </View>
            }

        />
      </View>
  )
}