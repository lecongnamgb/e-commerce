import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../styles";
import SeparateView from "../userComponents/SeparateView";

export default function Order(props) {
  const { orderItem } = props;
  console.log("order:", orderItem);
  return (
    <View>
      <View style={[styles.p_10, styles.hr_bottom]}>
        <View style={[styles.flex_row, styles.m_10]}>
          <View style={[styles.mr_10]}>
            <Image
              source={require("../../assets/icon/order_id.png")}
              style={styles.img_24x24}
            />
          </View>
          <View style={styles.flex_row}>
            {/* <Text style={{ fontSize: 16, width: "35%" }}>{orderItem._id}</Text> */}
            <View
              style={[
                orderItem.state === "Chờ lấy hàng"
                  ? { backgroundColor: "#ff8000" }
                  : { backgroundColor: "#33cc00" },
                styles.alignCenterItem,
                styles.alignCenterItemVertically,
                { height: 20, width: 160, borderRadius: 10 },
              ]}
            >
              <Text style={{ color: "white" }}>
                {orderItem.state ? orderItem.state : "Chờ lấy hàng"}
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.flex_row, styles.m_10]}>
          <View style={[styles.mr_10]}>
            <Image
              source={require("../../assets/icon/order_user.png")}
              style={styles.img_24x24}
            />
          </View>
          <Text style={{ fontSize: 16, width: "85%" }}>
            {orderItem.receiverName} - {orderItem.receiverPhone}
          </Text>
        </View>
        <View style={[styles.flex_row, styles.m_10]}>
          <View style={[styles.mr_10]}>
            <Image
              source={require("../../assets/icon/order_location.png")}
              style={styles.img_24x24}
            />
          </View>
          <Text style={{ fontSize: 16, width: "85%" }} numberOfLines={1}>
            {orderItem.receiverAddress}
          </Text>
        </View>
        <View style={[styles.flex_row, styles.m_10]}>
          <View style={[styles.mr_10]}>
            <Image
              source={require("../../assets/icon/order_product.png")}
              style={styles.img_24x24}
            />
          </View>
          <Text style={{ fontSize: 16, width: "85%" }} numberOfLines={1}>
            {orderItem.productName} x{orderItem.productQuantity}
          </Text>
        </View>
        <View style={[styles.flex_row, styles.m_10]}>
          <View style={[styles.mr_10]}>
            <Image
              source={require("../../assets/icon/order_date.png")}
              style={styles.img_24x24}
            />
          </View>
          <Text style={{ fontSize: 16, width: "85%" }} numberOfLines={1}>
            Ngày đặt đơn: {orderItem.orderDate}
          </Text>
        </View>
        <View style={[styles.flex_row, styles.m_10]}>
          <View style={[styles.mr_10]}>
            <Image
              source={require("../../assets/icon/order_cash.png")}
              style={styles.img_24x24}
            />
          </View>
          <Text style={{ fontSize: 16, width: "85%" }} numberOfLines={1}>
            100000đ
          </Text>
        </View>
      </View>
      <View style={[styles.flex_row, styles.hr_bottom]}>
        <TouchableOpacity
          style={[
            styles.alignCenterItem,
            styles.alignCenterItemVertically,
            { height: 30, width: 150 },
            styles.hr_right,
          ]}
          onPress={props.handleConfirmPickUp}
        >
          <Text>Xác nhận lấy hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.alignCenterItem,
            styles.alignCenterItemVertically,
            { height: 30, width: 150 },
            styles.hr_right,
          ]}
          onPress={props.handleConfirmDelivered}
        >
          <Text>Xác nhận giao hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.alignCenterItem,
            styles.alignCenterItemVertically,
            { height: 30, width: 114 },
          ]}
          onPress={props.handleCancelOrder}
        >
          <Text>Huỷ đơn</Text>
        </TouchableOpacity>
      </View>
      <SeparateView />
    </View>
  );
}
