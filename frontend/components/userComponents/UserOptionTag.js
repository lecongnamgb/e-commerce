import React from 'react';
import {Text,
    Image,
    View,
    } from 'react-native';
import right_arrow from '../../assets/icon/right_arrow.png'
import styles from '../styles'

export default function UserOptionTag(props) {
  return (
      <View style = {[styles.borderTop, styles.pl_10, props.highlight ? styles.hightlightBg: ""]}>
        <View style = {[styles.flex_row, styles.userTag]}>
            <View style = {[styles.flex_row, styles.alignCenterItem]}>
                {props.containIcon === undefined ? 
                <Image 
                    source = {props.sourceIcon}
                    style = {styles.icon_tag} />
                : null
                }
                <Text style = {[styles.ml_20]}>{props.title}</Text>
            </View>
            <View style = {[styles.flex_row, styles.flex_end, styles.alignCenterItem]}>
                <Text style = {props.description === null ? {color: '#ccc'} : null}>{props.description === null ? "Thiết lập ngay": props.description}</Text>
                {props.containRightArrow === undefined ?  <Image source = {right_arrow} style = {[styles.arrow_icon]}/>: null}
            </View>

        </View>
      </View>
  )
}
