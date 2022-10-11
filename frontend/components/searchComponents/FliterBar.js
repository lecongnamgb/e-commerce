import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../styles';
import {useState} from 'react'
import up_and_down_arrow from '../../assets/icon/up_and_down_arrow.png'
import down_arrow from '../../assets/icon/down_arrow.png'
import up_arrow from '../../assets/icon/up_arrow.png'
import up_arrow_focus from '../../assets/icon/up_arrow_focus.png'
import down_arrow_focus from '../../assets/icon/down_arrow_focus.png'

export default function FliterBar() {
    const [ascending, setAsending] = useState("");
    const [currentFocus, setCurrentFocus] = useState([true, false, false, false])
  return (
    <View style = {[styles.mt_15, styles.flex_row, styles.hr_bottom]}>
        <TouchableOpacity 
            activeOpacity={1}
            style = {[{ width: '26%'}, styles.pb_15, currentFocus[0] ? styles.filterBar_active : null]}
            onPress = {() => {
                setCurrentFocus([true, false, false, false])
                setAsending("");
            }}
        >
            <View style = {[{borderRightWidth: 1, borderRightColor: '#ccc'}, styles.pl_15, styles.pr_15]}>
                <Text style = {[{textAlign: 'center'}, currentFocus[0] ? styles.filterBar_text_active : null]}>Liên quan</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={1}
            style = {[{ width: '25%'}, styles.pb_15, currentFocus[1] ? styles.filterBar_active : null]}
            onPress = {() => {
                setCurrentFocus([false, true, false, false])
                setAsending("");
            }}
        >
            <View style = {[{borderRightWidth: 1, borderRightColor: '#ccc'}, styles.pl_15, styles.pr_15]}>
                <Text style = {[{textAlign: 'center'}, currentFocus[1] ? styles.filterBar_text_active : null]}>Mới nhất</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={1}
            style = {[{ width: '25%'}, styles.pb_15, currentFocus[2] ? styles.filterBar_active : null]}
            onPress = {() => {
                setCurrentFocus([false, false, true, false])
                setAsending("");
            }}
        >
            <View style = {[{borderRightWidth: 1, borderRightColor: '#ccc'}, styles.pl_15, styles.pr_15]}>
                <Text style = {[{textAlign: 'center'}, currentFocus[2] ? styles.filterBar_text_active : null]}>Bán chạy</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={1}
            style = {[{ width: '25%'}, styles.pb_15, currentFocus[3] ? styles.filterBar_active : null]}
            onPress = {() => {
                    if (ascending == "") {
                        setAsending(true)
                    } else if (ascending == true) {
                        setAsending(false)
                    } else {
                        setAsending(true)
                    }
                setCurrentFocus([false, false, false, true])
            }}
        >
            <View style = {[{borderRightWidth: 1, borderRightColor: '#ccc'}, styles.pl_15, styles.pr_15]}>
                <Text 
                style = {[{textAlign: 'center'}, currentFocus[3] == true ? {color: 'red'}: null]}
                >
                    Giá {" "}
                    <View>
                        <Image
                            source = {ascending === "" ? up_and_down_arrow : ascending === true ? up_arrow_focus : down_arrow_focus}
                            style = {[styles.img_16x16, {top: 3}]}
                        />
                    </View>
                </Text>
            </View>
        </TouchableOpacity>
       
    </View>
  )
}