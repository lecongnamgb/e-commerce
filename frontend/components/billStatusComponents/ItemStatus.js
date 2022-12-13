import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../styles";
import SeparateView from "../userComponents/SeparateView";
import { handlePrice } from "../../utils/helperFnc";
import {
  STATE_CANCELED,
  STATE_DELIVERED,
  STATE_WAITING,
} from "../../utils/const";

export default function ItemStatus(props) {
  const { products } = props;

  let totalValue = 0;
  products.map((prd) => {
    totalValue += prd.product.standardPrice * prd.quantity;
  });
  return (
    <View>
      <View style={{ margin: 10 }}>
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {products[0].product.shop.name}
        </Text>
      </View>
      {products.map((prd) => {
        return (
          <View
            style={[styles.flex_row, { margin: 10 }, styles.hr_light_bottom]}
          >
            <Image
              source={{ uri: prd.product.avatar }}
              style={styles.img_80x80}
            />
            <View style={{ alignItems: "flex-end", width: "80%" }}>
              <View key={prd._id}>
                <Text style={{ marginBottom: 15 }} numberOfLines={1}>
                  {prd.product.name}
                </Text>
                <Text style={{ marginBottom: 15 }}>x{prd.quantity}</Text>
                <Text style={{ marginBottom: 15, color: "red" }}>
                  {handlePrice(prd.product.standardPrice)}đ
                </Text>
              </View>
            </View>
          </View>
        );
      })}
      <View
        style={[
          { alignItems: "flex-end", width: "98%", paddingBottom: 10 },
          styles.hr_light_bottom,
        ]}
      >
        <Text>
          Thành tiền:{" "}
          <Text style={{ color: "red" }}>{handlePrice(totalValue)}đ</Text>
        </Text>
      </View>
      <View style={{ alignItems: "flex-end", top: 10, right: 10, height: 60 }}>
        {props.state == STATE_DELIVERED ? (
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#66b3ff",
                height: 40,
                width: 120,
                borderRadius: 5,
              },
              styles.alignCenterItem,
              styles.alignCenterItemVertically,
            ]}
            onPress={props.handlePress}
            activeOpacity={1}
          >
            <Text style={{ color: "#fff" }}>Đánh giá</Text>
          </TouchableOpacity>
        ) : props.state == STATE_WAITING ? (
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#66b3ff",
                height: 40,
                width: 120,
                borderRadius: 5,
              },
              styles.alignCenterItem,
              styles.alignCenterItemVertically,
            ]}
            onPress={props.handleCancel}
            activeOpacity={1}
          >
            <Text style={{ color: "#fff" }}>Huỷ đơn</Text>
          </TouchableOpacity>
        ) : props.state == STATE_CANCELED ? (
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#ccc",
                height: 40,
                width: 120,
                borderRadius: 5,
              },
              styles.alignCenterItem,
              styles.alignCenterItemVertically,
            ]}
            activeOpacity={1}
          >
            <Text style={{ color: "#fff" }}>Đánh giá</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[
              {
                backgroundColor: "#ccc",
                height: 40,
                width: 120,
                borderRadius: 5,
              },
              styles.alignCenterItem,
              styles.alignCenterItemVertically,
            ]}
            activeOpacity={1}
          >
            <Text style={{ color: "#fff" }}>Huỷ</Text>
          </TouchableOpacity>
        )}
      </View>
      <SeparateView />
    </View>
  );
}
