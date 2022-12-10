import { View, Text, SafeAreaView, Alert } from "react-native";
import React, { useState } from "react";
import Header from "../components/notiComponents/Header";
import FieldWithUpperLabel from "../components/checkInComponents/FieldWithUpperLabel";
import SeparateView from "../components/userComponents/SeparateView";
import styles from "../components/styles";
import CartBill from "../components/cartComponents/CartBill";
import { useDispatch } from "react-redux";
import { createOrder } from "../redux/orderSlice";
import { clearCart } from "../redux/cartSlice";
import { useNavigation } from "@react-navigation/native";
import { HOME_SCREEN, NOTI } from "../utils/const";

export default function ConfirmBuyProducts({ route }) {
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header title={"Xác nhận thông tin thanh toán"} canBack={true} />
      <View style={styles.hr_light_bottom}>
        <FieldWithUpperLabel
          label={"Tên người nhận"}
          plhdTitle={"Nhập tên"}
          value={receiverName}
          onChangeText={(txt) => setReceiverName(txt)}
        />
      </View>
      <View style={styles.hr_light_bottom}>
        <FieldWithUpperLabel
          label={"Số điện thoại người nhận"}
          plhdTitle={"Nhập số điện thoại"}
          value={receiverPhoneNumber}
          onChangeText={(txt) => setReceiverPhoneNumber(txt)}
        />
      </View>
      <SeparateView />
      <View style={styles.hr_light_bottom}>
        <FieldWithUpperLabel
          label={"Địa chỉ người nhận"}
          plhdTitle={"Nhập địa chỉ"}
          value={receiverAddress}
          onChangeText={(txt) => setReceiverAddress(txt)}
        />
      </View>
      <View style={{ height: 30 }} />
      <View
        style={{ position: "absolute", bottom: 20, width: "100%", height: 50 }}
      >
        <CartBill
          type={"confirm"}
          totalValue={route.params?.totalPrice}
          handleClickBuy={() => {
            const data = {
              receiverName,
              receiverPhone: receiverPhoneNumber,
              receiverAddress,
            };
            dispatch(createOrder(data));
            dispatch(clearCart());
            Alert.alert(NOTI, "Tạo đơn hàng thành công");
            navigation.navigate(HOME_SCREEN);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
