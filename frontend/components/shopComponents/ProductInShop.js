import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import SeparateView from "../userComponents/SeparateView";

export default function ProductInShop(props) {
  return (
    <View>
      <View style={[styles.flex_row, { margin: 10 }]}>
        <View style={[styles.mr_10]}>
          <Image source={{ uri: props.uriImg }} style={styles.img_80x80} />
        </View>
        <View style={{ width: "78%", alignItems: "flex-end" }}>
          <Text numberOfLines={1} style={{ fontSize: 16 }}>
            {props.productName}
          </Text>
          <Text style={{ color: "red", marginTop: 10 }}>{props.price}đ</Text>
          <View style={[{ marginTop: 8 }, styles.flex_row]}>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: "#3399ff",
                  height: 25,
                  width: 40,
                  borderRadius: 4,
                  marginRight: 20,
                },
                styles.alignCenterItem,
                styles.alignCenterItemVertically,
              ]}
              onPress={props.handleEdit}
            >
              <Text style={{ color: "white" }}>Sửa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: "#ff3300",
                  height: 25,
                  width: 40,
                  borderRadius: 4,
                },
                styles.alignCenterItem,
                styles.alignCenterItemVertically,
              ]}
              onPress={props.handleDelete}
            >
              <Text style={{ color: "white" }}>Xoá</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <SeparateView />
    </View>
  );
}
