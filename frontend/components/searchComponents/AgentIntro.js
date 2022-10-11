import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function AgentIntro(props) {
    const navigation = useNavigation();
  return (
    <View style = {styles.flex_row}>
        <TouchableOpacity 
            style = {[styles.ml_10, styles.mt_15, styles.mb_15, styles.flex_row, props.seeMore ? {borderRightColor: '#ccc', borderRightWidth: 1} : null, {width: '75%'}]}
            onPress = {() => {
                navigation.navigate("Shop")
            }}
            >
            <View 
                style = {[styles.pl_10, styles.pr_10]}
            >
                <Image
                    source = {{uri: props.agentAvt}}
                    style = {[styles.img_64x64, styles.rounded]}
                />
            </View>
                <View>
                    <Text style = {{fontWeight: 'bold', fontSize: 16, marginBottom: 5}}>Shop bán quần áo</Text>
                    <Text style = {{marginBottom: 5, color: '#595959'}}>Tên chủ shop</Text>
                    <View style = {styles.flex_row}>
                        <Text style = {{color: '#595959'}}>
                            <Text style = {styles.filterBar_text_active}>
                            47{" "}
                            </Text>
                            Sản phẩm {"  "}
                        </Text>
                        <Text style = {{color: '#595959'}}>
                            <Text style = {styles.filterBar_text_active}>
                            4.7{" "}
                            </Text>
                            Đánh giá
                        </Text>
                    </View>
                </View>
        </TouchableOpacity>
        {props.seeMore? 
        <TouchableOpacity 
            style = {[styles.alignCenterItemVertically, {width: '20%', paddingLeft: 16}]}
            onPress = {props.handleSeeMore}
        >
            <Text style = {[{fontSize: 16, textAlign: 'center'}, styles.filterBar_text_active]}>Thêm kết quả</Text>
        </TouchableOpacity>
        : 
        <View  style = {[styles.alignCenterItemVertically, {width: '25%'}]}>
            <TouchableOpacity 
                style = {[{borderColor: 'red', borderWidth: 1, width: 90, right: 15, height: 30, borderRadius: 3}, styles.alignCenterItemVertically]}
                onPress = {() => {
                    navigation.navigate("Shop")
                }}
            >
                <Text style = {{textAlign: 'center', color: 'red'}}>Xem Shop</Text>
            </TouchableOpacity>
        </View>
        }
    </View>
  )
}