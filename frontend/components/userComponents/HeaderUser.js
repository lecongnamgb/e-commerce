import React from "react";
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import UserImage from "../../assets/icon/user.png";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { EDIT_INFO_SCREEN } from "../../utils/const";

export default function HeaderUser(props) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.mainHeader, styles.mt_20]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(EDIT_INFO_SCREEN);
          }}
        >
          <Image
            source={props.avatar ? { uri: props.avatar } : UserImage}
            style={[styles.img_64x64, styles.rounded]}
          />
        </TouchableOpacity>
        <View style={[styles.ml_10, styles.alignCenterItemVertically]}>
          <Text style={[styles.userName, styles.bold]}>{props.username}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
