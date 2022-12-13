import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/notiComponents/Header";
import Order from "../components/shopComponents/Order";
import {
  deleteShopOrder,
  selectShopOrders,
  updateShopOrder,
} from "../redux/shopOrderSlice";
import {
  STATE_CANCELED,
  STATE_CONFIRMED,
  STATE_DELIVERED,
  STATE_DELIVERING,
} from "../utils/const";
import { Alert } from "react-native";
import {
  deleteOrderByShopOwner,
  updateOrder,
  updateOrderByShopOwner,
} from "../redux/orderSlice";

export default function OrderManager() {
  const shopOrders = useSelector(selectShopOrders) || [];
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header title={"Quản lý đơn hàng"} canBack={true} />
      <ScrollView>
        {shopOrders.map((item, index) => (
          <Order
            key={index}
            orderItem={item}
            handleConfirmPickUp={() => {
              const data = { state: STATE_DELIVERING, _id: item._id };
              dispatch(updateShopOrder(data));
              dispatch(updateOrderByShopOwner(data));
            }}
            handleConfirmDelivered={() => {
              const data = { state: STATE_DELIVERED, _id: item._id };
              dispatch(updateShopOrder(data));
              dispatch(updateOrderByShopOwner(data));
            }}
            handleCancelOrder={() => {
              Alert.alert(
                "Cảnh báo",
                "Bạn có chắc chắn muốn huỷ đơn hàng này không ?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      dispatch(deleteShopOrder(item._id));
                      dispatch(deleteOrderByShopOwner(item._id));
                    },
                  },
                ]
              );
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
