import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import basic_heart from "../../assets/icon/basic_heart.png";
import blank_heart from "../../assets/icon/blank_heart.png";
import {
  editInfo,
  editUserInfo,
  selectCurrentUser,
} from "../../redux/userSlice";
import PromoIcon from "../homeComponents/PromoIcon";
import styles from "../styles";
import RatingStar from "./RatingStar";

export default function OverviewProduct(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser) || {};
  const listFvr = currentUser.favoriteProductIds || [];

  const productId = product._id;
  return (
    <View style={[styles.m_10, styles.bg_white]}>
      <View
        style={[
          product.salePercent != 0 ? { width: "85%" } : { width: "95%" },
          styles.flex_row,
        ]}
      >
        <Text numberOfLines={2} style={{ fontSize: 17 }}>
          {product.name}
        </Text>
        {product.salePercent ? (
          <View style={[styles.pl_15, styles.pr_15]}>
            <PromoIcon />
          </View>
        ) : null}
      </View>
      <View style={[styles.mt_15, styles.mb_20]}>
        <Text style={{ color: "red", fontSize: 20 }}>
          {product.salePercent ? product.salePrice : product.standardPrice}đ
        </Text>
        {product.salePercent ? (
          <Text
            style={{
              color: "#4d4d4d",
              fontSize: 16,
              textDecorationLine: "line-through",
              paddingTop: 5,
            }}
          >
            {product.standardPrice}đ
          </Text>
        ) : null}
      </View>
      <View style={styles.flex_row}>
        <RatingStar stars={product.totalRatingStar} size={16} />
        <View style={{ borderRightColor: "#ccc", borderRightWidth: 1 }}>
          <Text style={[styles.pl_10, styles.pr_10, { fontSize: 15 }]}>
            {product.totalRatingStar}
          </Text>
        </View>
        <Text style={styles.pl_15}>Đã bán {product.quantitySold}</Text>
        <TouchableOpacity
          style={{ position: "absolute", right: 10, bottom: -2 }}
          activeOpacity={1}
          onPress={() => {
            const data = { favoriteProductIds: [...listFvr, productId] };
            dispatch(editUserInfo(data));
          }}
        >
          <Image
            source={
              listFvr.indexOf(productId) != -1 ? basic_heart : blank_heart
            }
            style={styles.img_24x24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
