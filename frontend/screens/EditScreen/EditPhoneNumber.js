import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, SafeAreaView, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/notiComponents/Header";
import styles from "../../components/styles";
import SeparateView from "../../components/userComponents/SeparateView";
import { API_GET_USER } from "../../utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NOTI, USER_ID } from "../../utils/const";
import { _patchApi } from "../../utils/axios";
import { useDispatch } from "react-redux";
import { editUserInfo } from "../../redux/userSlice";

export default function EditPhoneNumber({ route }) {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState(route.params?.phoneNumber);

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header title={"Sửa Số Điện Thoại"} canBack={true} />
      <SeparateView />
      <TextInput
        placeholder="Nhập tại đây"
        style={{ padding: 13, borderBottomColor: "#ccc", borderBottomWidth: 1 }}
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        autoFocus={true}
      />
      <TouchableOpacity
        style={[
          styles.alignCenterItem,
          styles.alignCenterItemVertically,
          { backgroundColor: "#66b3ff", borderRadius: 10 },
          styles.pt_10,
          styles.pb_10,
          styles.ml_20,
          styles.mr_20,
          styles.mt_15,
        ]}
        onPress={async () => {
          const userId = await AsyncStorage.getItem(USER_ID);
          dispatch(editUserInfo({ phoneNumber }));
          Alert.alert(NOTI, "Lưu số điện thoại thành công");
          navigation.goBack();
        }}
      >
        <Text style={{ color: "#fff" }}>Lưu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
