import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Header from "../components/notiComponents/Header";
import FieldWithUpperLabel from "../components/checkInComponents/FieldWithUpperLabel";
import SeparateView from "../components/userComponents/SeparateView";
import styles from "../components/styles";
import CartBill from "../components/cartComponents/CartBill";

export default function ConfirmBuyProducts({ route }) {
  const [receiverName, setReceiverName] = useState("");
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
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
      <View style={{ top: 490 }}>
        <CartBill
          type={"confirm"}
          totalValue={route.params?.totalPrice}
          handleClickBuy={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}
