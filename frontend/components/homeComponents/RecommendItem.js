import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import PromoIcon from './PromoIcon';
import RatingStar from '../productComponents/RatingStar';

const {width} = Dimensions.get("window");


export default function RecommendItem(props) {
    const navigation = useNavigation();
    var {recommendItem} = props
  return (
    <TouchableOpacity 
        style={[{width: width/2}, styles.alignCenterItem,styles.bg_lightGrey, {padding: 3}]}
        onPress = {() => {
            navigation.navigate('Product')
        }}
    >
        <View>
        <Image
            source={{uri: recommendItem.sourceIcon}}
            style={{width: width/2 - 6, height: width/2 - 6, resizeMode: 'contain', backgroundColor: '#fff'}}
        />
        <View style = {{position: 'absolute', top: 0, right: 0}}>
           <PromoIcon/>
        </View>
        <View style= {[styles.pt_10, styles.pl_10, styles.pr_10, styles.pb_10, styles.bg_white]}>
            <View style = {[{width: '100%', height: 50}]}>
                <Text style = {{textAlign: 'left', }} numberOfLines = {2}> {recommendItem.title} </Text>
            </View>
            {props.containRating == true? 
             <View>
                <Text style = {{color: 'red', fontSize: 20}}>{recommendItem.price}đ</Text>
                <View style = {[styles.flex_row, styles.mt_10]}>
                    <RatingStar stars = {recommendItem.rating}/>
                        <Text style = {{fontSize: 12, paddingLeft: 10}}>Đã bán {recommendItem.quantitySold >= 1000 ? recommendItem.quantitySold / 1000 + "k": recommendItem.quantitySold}</Text>
                </View>
                <View style = {[styles.mt_10, styles.flex_row]}>
                    <View style = {{top: 2}}>
                        <Image
                            source = {require('../../assets/icon/pin.png')}
                            style = {styles.img_12x12}
                        />
                    </View>
                    <Text style = {{fontSize: 12}}>{" " + recommendItem.location}</Text>
                </View>
            </View>
             : 
            <View style = {{width: '100%', flex: 0, flexDirection: 'row'}}>
                <Text style = {{justifyContent: 'flex-start', flex: 0, color: 'red', fontSize: 16}}>
                    {
                        recommendItem.price
                    }đ
                </Text>
                <View style = {[styles.flex_row, styles.flex_end]}>
                <Text style = {{fontSize: 12}}>Đã bán {recommendItem.quantitySold >= 1000 ? recommendItem.quantitySold / 1000 + "k": recommendItem.quantitySold}</Text>
                </View>
            </View>
            }
        </View>
        </View>
    </TouchableOpacity>
  )
}