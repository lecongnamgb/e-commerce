import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import cancelBill from "../../assets/icon/cancelBill.png";
import packageIcon from "../../assets/icon/package.png";
import shippingIcon from "../../assets/icon/shipping.png";
import waitingIcon from "../../assets/icon/waiting.png";
import { selectMyOrder } from "../../redux/orderSlice";
import styles from "../styles";
import StateItem from "./StateItem";

export default function PurchaseStatus() {
  const orders = useSelector(selectMyOrder) || [];
  const waitingOrders = orders.map((order) => order.state === null) || [];
  return (
    <View style={[styles.borderTop, styles.flex_row, styles.width_100]}>
      <StateItem
        sourceIcon={waitingIcon}
        title={"Chờ lấy hàng"}
        numOfProductsInCart={waitingOrders.length}
      />
      <StateItem
        sourceIcon={shippingIcon}
        title={"Đang giao"}
        numOfProductsInCart={10}
      />
      <StateItem sourceIcon={packageIcon} title={"Đã giao"} />
      <StateItem
        sourceIcon={cancelBill}
        title={"Đã huỷ"}
        numOfProductsInCart={0}
      />
    </View>
  );
}
