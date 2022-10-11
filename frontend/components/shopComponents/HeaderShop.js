import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import styles from '../styles';

export default function HeaderShop(props) {
    const [follow, setFollow] = useState(false)
  return (
<View style = {{backgroundColor: '#fff'}}>
        <View>
            <View style = {{width: '100%', height: 200, backgroundColor: '#000', opacity: 0.3, zIndex: 1}}>
            </View>
            <View style = {{position: 'absolute', top: 10, height: 190, width: '100%'}}>
                    <Image
                        source = {{uri: props.uriBg}}
                        style = {{width: '100%', height: 190, resizeMode: 'cover'}}
                    />
            </View>
            <View style = {[styles.flex_row, {position: 'absolute', bottom: 10,left: 20, zIndex: 2}]}>
                <View>
                    <Image 
                        source = {{uri: props.uriAvt}}
                        style = {[styles.img_80x80, styles.rounded]}
                    />
                </View>
                <View style = {{marginLeft: 10, width: 200}}>
                    <Text 
                        style = {{textTransform: 'uppercase', fontWeight: 'bold', fontSize: 18, color: '#fff', marginTop: 10}}
                        numberOfLines = {1}
                    >{props.shopName}</Text>
                    <Text style = {{color: '#fff', marginTop: 10, fontSize: 15}}>{props.ownerName}</Text>
                </View>
            </View>
            {/* <TouchableOpacity 
                activeOpacity={1}
                style = {[{height: 35, position: 'absolute', right: 20, bottom: 30 ,width: 80, borderColor: '#fff', borderWidth: 1, zIndex: 2}, styles.alignCenterItem, styles.alignCenterItemVertically]}
                onPress = {props.onPressFollow}
            >
                <Text style = {{color: '#fff'}}>{!props.follow ? 'Theo dõi' : "Đang theo "}</Text>
            </TouchableOpacity> */}
        </View>
    </View>
  )
}