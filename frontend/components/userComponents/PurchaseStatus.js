import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import cancelBill from "../../assets/icon/cancelBill.png";
import packageIcon from "../../assets/icon/package.png";
import shippingIcon from "../../assets/icon/shipping.png";
import waitingIcon from "../../assets/icon/waiting.png";
import {
  selectCanceledOrder,
  selectDeliveredOrder,
  selectDeliveringOrder,
  selectWaitingOrder,
} from "../../redux/orderSlice";
import styles from "../styles";
import StateItem from "./StateItem";

export default function PurchaseStatus() {
  const waitingOrders = useSelector((state) => selectWaitingOrder(state));
  const deliveringOrders = useSelector((state) => selectDeliveringOrder(state));
  const deliveredOrders = useSelector((state) => selectDeliveredOrder(state));
  const canceledOrders = useSelector((state) => selectCanceledOrder(state));
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
        numOfProductsInCart={deliveringOrders.length}
      />
      <StateItem
        sourceIcon={packageIcon}
        title={"Đã giao"}
        numOfProductsInCart={deliveredOrders.length}
      />
      <StateItem
        sourceIcon={cancelBill}
        title={"Đã huỷ"}
        numOfProductsInCart={canceledOrders.length}
      />
    </View>
  );
}
