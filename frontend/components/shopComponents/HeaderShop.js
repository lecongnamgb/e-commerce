import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/userSlice";
import { takePhotoAndUpload } from "../../utils/helperFnc";
import { useNavigation } from "@react-navigation/native";
import { REGISTER_SELLER_SCREEN } from "../../utils/const";

export default function HeaderShop(props) {
  const currentUser = useSelector(selectCurrentUser);
  const shop = props.shop || {};
  const isOwner = currentUser._id === shop.owner?._id;

  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View>
        <View
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "#000",
            opacity: 0.3,
            zIndex: 1,
          }}
        ></View>
        <View
          style={{ position: "absolute", top: 10, height: 190, width: "100%" }}
        >
          <Image
            source={{ uri: shop.backgroundUrl }}
            style={{ width: "100%", height: 190, resizeMode: "cover" }}
          />
        </View>
        <View
          style={[
            styles.flex_row,
            { position: "absolute", bottom: 10, left: 20, zIndex: 2 },
          ]}
        >
          {!isOwner ? (
            <View>
              <Image
                source={{ uri: shop.avatarUrl }}
                style={[styles.img_80x80, styles.rounded]}
              />
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(REGISTER_SELLER_SCREEN, { shop: shop });
              }}
            >
              <Image
                source={{ uri: shop.avatarUrl }}
                style={[styles.img_80x80, styles.rounded]}
              />
            </TouchableOpacity>
          )}
          <View style={{ marginLeft: 10, width: 200 }}>
            <Text
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: 18,
                color: "#fff",
                marginTop: 10,
              }}
              numberOfLines={1}
            >
              {shop.name}
            </Text>
            <Text style={{ color: "#fff", marginTop: 10, fontSize: 15 }}>
              {shop.owner?.name}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
