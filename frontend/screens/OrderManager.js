import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/notiComponents/Header";
import Order from "../components/shopComponents/Order";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectMyOrder } from "../redux/orderSlice";

export default function OrderManager() {
  const [listData, setListData] = useState([
    {
      id: 1,
      customerName: "Lê Công Nam",
      customerPhoneNumber: "0335927773",
      customerAddress:
        "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
      productName: "Áo thun vjppr0",
      productQuantity: 3,
      orderDate: "14/4/2021",
      priceEach: 100000,
      state: "Chờ lấy hàng",
    },
    {
      id: 2,
      customerName: "Lê Công Nam",
      customerPhoneNumber: "0335927773",
      customerAddress:
        "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
      productName: "Áo thun vjppr0",
      productQuantity: 3,
      orderDate: "14/4/2021",
      priceEach: 100000,
      state: "Chờ lấy hàng",
    },
    {
      id: 3,
      customerName: "Lê Công Nam",
      customerPhoneNumber: "0335927773",
      customerAddress:
        "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
      productName: "Áo thun vjppr0",
      productQuantity: 3,
      orderDate: "14/4/2021",
      priceEach: 100000,
      state: "Chờ lấy hàng",
    },
    {
      id: 4,
      customerName: "Lê Công Nam",
      customerPhoneNumber: "0335927773",
      customerAddress:
        "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
      productName: "Áo thun vjppr0",
      productQuantity: 3,
      orderDate: "14/4/2021",
      priceEach: 100000,
      state: "Chờ lấy hàng",
    },
    {
      id: 5,
      customerName: "Lê Công Nam",
      customerPhoneNumber: "0335927773",
      customerAddress:
        "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
      productName: "Áo thun vjppr0",
      productQuantity: 3,
      orderDate: "14/4/2021",
      priceEach: 100000,
      state: "Chờ lấy hàng",
    },
    {
      id: 6,
      customerName: "Lê Công Nam",
      customerPhoneNumber: "0335927773",
      customerAddress:
        "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
      productName: "Áo thun vjppr0",
      productQuantity: 3,
      orderDate: "14/4/2021",
      priceEach: 100000,
      state: "Chờ lấy hàng",
    },
    {
      id: 7,
      customerName: "Lê Công Nam",
      customerPhoneNumber: "0335927773",
      customerAddress:
        "Nhà 21a, ngõ 39 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
      productName: "Áo thun vjppr0",
      productQuantity: 3,
      orderDate: "14/4/2021",
      priceEach: 100000,
      state: "Chờ lấy hàng",
    },
  ]);

  const orders = useSelector(selectMyOrder) || [];
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header title={"Quản lý đơn hàng"} canBack={true} />
      <ScrollView>
        {orders.map((item, index) => (
          <Order
            key={index}
            orderItem={item}
            handleConfirmPickUp={() => {
              setListData(
                listData.map((subItem, subIndex) => {
                  if (subIndex != index) {
                    return { ...subItem };
                  } else {
                    if (subItem.state == "Chờ lấy hàng") {
                      return {
                        ...subItem,
                        state: "Lấy hàng thành công",
                      };
                    } else {
                      return { ...subItem };
                    }
                  }
                })
              );
            }}
            handleConfirmDelivered={() => {
              setListData(
                listData.map((subItem, subIndex) => {
                  if (subIndex != index) {
                    return { ...subItem };
                  } else {
                    if (subItem.state == "Lấy hàng thành công") {
                      return {
                        ...subItem,
                        state: "Giao hàng thành công",
                      };
                    } else {
                      return { ...subItem };
                    }
                  }
                })
              );
            }}
            handleCancelOrder={() => {
              setListData(
                listData.filter((_, subIndex) => {
                  return index != subIndex;
                })
              );
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
