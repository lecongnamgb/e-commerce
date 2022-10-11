import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles';

export default function RatingStar(props) {
    const numOfStars = [];
    for (var i = 1; i <= 5; i++) {
        numOfStars.push(i);
    }
    var stars = props.stars
    var size = props.size;
    var halfStar = false;
  return (

    <View style = {styles.flex_row}>
      {numOfStars.map((item, index) => {
          if (stars-- >= 1) {
              
          return <Image 
            source={require('../../assets/icon/1star.png')}
            style = {size == 16 ? styles.img_16x16 : styles.img_12x12}
            key = {index}
          />
          }
          else if (stars-- > -1) {
          return   <Image
          source = {require('../../assets/icon/halfStar.png')}
          style = {size == 16 ? styles.img_16x16 : styles.img_12x12}
          key = {index}
          
        />
          }
          return <Image
          source = {require('../../assets/icon/noneStar.png')}
          style = {size == 16 ? styles.img_16x16 : styles.img_12x12}
          key = {index}/>
      }
      )
      }
      {
          halfStar == true ? <Image
            source = {require('../../assets/icon/halfStar.png')}
            style = {size == 16 ? styles.img_16x16 : styles.img_12x12}
          /> : null
      }
    </View>
  )
}