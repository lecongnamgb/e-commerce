import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import FieldWithUpperLabel from "../components/checkInComponents/FieldWithUpperLabel";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import SeparateView from "../components/userComponents/SeparateView";
import { takePhotoAndUpload } from "../utils/helperFnc";
import { createShop } from "../redux/shopSlice";
import { useNavigation } from "@react-navigation/native";
import { NOTI } from "../utils/const";

export default function RegisterSeller() {
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [shopAvatar, setShopAvatar] = useState();
  const [shopBackground, setShopBackground] = useState();

  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header title={"Cài đặt thông tin cửa hàng"} canBack={true} />
      <SeparateView />
      <View style={styles.hr_bottom}>
        <FieldWithUpperLabel
          plhdTitle={"Nhập tên shop"}
          label={"Tên shop"}
          value={shopName}
          onChangeText={(text) => setShopName(text)}
          focus={true}
        />
      </View>
      <View style={styles.hr_bottom}>
        <FieldWithUpperLabel
          label={"Ảnh Logo của shop"}
          chooseImage={true}
          sourceImage={shopAvatar}
          onPress={async () => {
            const url = await takePhotoAndUpload();

            setShopAvatar(url);
          }}
        />
      </View>
      <FieldWithUpperLabel
        label={"Ảnh bìa của shop"}
        chooseImage={true}
        sourceImage={shopBackground}
        onPress={async () => {
          const url = await takePhotoAndUpload();
          setShopBackground(url);
        }}
      />
      <SeparateView />
      {/* <View style={styles.hr_bottom}>
        <FieldWithUpperLabel
          plhdTitle={"Địa chỉ"}
          label={"Địa chỉ lấy hàng"}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
      </View> */}
      <TouchableOpacity
        style={[
          {
            backgroundColor: "#66b3ff",
            borderRadius: 10,
            height: 35,
            marginLeft: 40,
            marginTop: 20,
            marginRight: 40,
          },
          styles.alignCenterItem,
          styles.alignCenterItemVertically,
        ]}
        onPress={() => {
          dispatch(
            createShop({
              name: shopName,
              avatarUrl: shopAvatar,
              backgroundUrl: shopBackground,
            })
          );
          Alert.alert(NOTI, "Tạo shop thành công");
          navigation.goBack();
        }}
      >
        <Text style={{ color: "#fff", fontSize: 16 }}>Lưu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
