import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../styles";
import SeparateView from "../userComponents/SeparateView";
import moment from "moment";
import { handlePrice } from "../../utils/helperFnc";

export default function Order(props) {
  const { orderItem } = props;

  const dateFormat = moment(orderItem.createdAt).format("HH:mm DD/MM/YYYY");

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
        {orderItem.products.map((product) => (
          <View key={product._id} style={[styles.flex_row, styles.m_10]}>
            <View style={[styles.mr_10]}>
              <Image
                source={require("../../assets/icon/order_product.png")}
                style={styles.img_24x24}
              />
            </View>
            <Text style={{ fontSize: 16, width: "85%" }} numberOfLines={1}>
              {product.product.name} x{product.quantity}
            </Text>
          </View>
        ))}
        <View style={[styles.flex_row, styles.m_10]}>
          <View style={[styles.mr_10]}>
            <Image
              source={require("../../assets/icon/order_date.png")}
              style={styles.img_24x24}
            />
          </View>
          <Text style={{ fontSize: 16, width: "85%" }} numberOfLines={1}>
            Ngày đặt đơn: {dateFormat}
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
            {handlePrice(orderItem.totalPrice)}đ
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
          <Text>Xác nhận đang giao</Text>
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
          <Text>Xác nhận đã giao</Text>
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
