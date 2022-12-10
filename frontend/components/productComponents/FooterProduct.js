import React from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCart, updateCart } from "../../redux/cartSlice";
import { NOTI } from "../../utils/const";
import styles from "../styles";

export default function FooterProduct(props) {
  const { product } = props;
  const productId = product._id;
  const cart = useSelector(selectCurrentCart);
  const dispatch = useDispatch();
  return (
    <View
      style={[
        styles.flex_row,
        { borderColor: "#ccc", borderTopWidth: 1 },
        styles.bg_white,
      ]}
    >
      <TouchableOpacity
        style={[
          {
            paddingLeft: 50,
            paddingRight: 50,
            marginTop: 15,
            marginBottom: 15,
            borderRightColor: "#4d4d4d",
            borderRightWidth: 1,
          },
        ]}
      >
        <Image
          source={require("../../assets/icon/text_message.png")}
          style={styles.img_32x32}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          {
            paddingLeft: 50,
            paddingRight: 50,
            marginTop: 15,
            marginBottom: 15,
          },
        ]}
        onPress={() => {
          const currentPrds = cart?.products?.length ? [...cart.products] : [];
          const existedPrd = currentPrds.find(
            (item) => item?.product?._id === productId
          );
          let updatedPrds = [];
          if (!existedPrd) {
            currentPrds.push({ product: product, quantity: 1 });
            updatedPrds = currentPrds;
          } else {
            updatedPrds = currentPrds.map((item) => {
              if (item.product._id === existedPrd.product._id) {
                return {
                  ...existedPrd,
                  quantity: existedPrd.quantity + 1,
                };
              } else return item;
            });
          }
          dispatch(updateCart({ products: updatedPrds }));
          Alert.alert(NOTI, "Thêm sản phẩm thành công");
        }}
      >
        <Image
          source={require("../../assets/icon/cart.png")}
          style={styles.img_32x32}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          { width: 150, backgroundColor: "#ff8533" },
          styles.alignCenterItem,
          styles.alignCenterItemVertically,
        ]}
        onPress={() => {
          dispatch();
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Mua ngay</Text>
      </TouchableOpacity>
    </View>
  );
}
