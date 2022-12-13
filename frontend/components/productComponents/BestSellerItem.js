import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles";
import RatingStar from "./RatingStar";
import { handlePrice } from "../../utils/helperFnc";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_SCREEN } from "../../utils/const";

export default function BestSellerItem(props) {
  const { item } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(PRODUCT_SCREEN, { id: item._id });
      }}
      style={{
        width: 126,
        borderColor: "#d9d9d9",
        borderWidth: 1,
        marginRight: 5,
        marginLeft: 5,
      }}
    >
      <Image
        source={{ uri: item.avatar }}
        style={[styles.img_124x124, { resizeMode: "contain" }]}
      />
      <View style={[styles.mt_10, styles.ml_5, styles.mr_5, styles.mb_10]}>
        <Text numberOfLines={2} style={{ fontSize: 13 }}>
          {item.name}
        </Text>
        <Text style={[{ color: "red" }, styles.mt_5, styles.mb_5]}>
          {handlePrice(item.standardPrice)}đ
        </Text>
        <RatingStar stars={item.totalRatingStar} />
        <Text style={{ fontSize: 12, color: "#333", marginTop: 5 }}>
          Đã bán {item.quantitySold}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
