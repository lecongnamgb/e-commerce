import { Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Header from "../../components/notiComponents/Header";
import SeparateView from "../../components/userComponents/SeparateView";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../components/styles";
import PasswordField from "../../components/checkInComponents/PasswordField";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PASSWORD } from "../../utils/const";
import { changePw, editUserInfo } from "../../redux/userSlice";

export default function EditPassword({ route }) {
  const navigation = useNavigation();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPw, setNewPw] = useState("");
  const [cfPw, setCfPw] = useState("");
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header title={"Thay đổi mật khẩu"} canBack={true} />
      <SeparateView />
      <PasswordField
        plhdTitle={"Mật khẩu hiện tại"}
        value={currentPassword}
        handleOnChangeText={(text) => setCurrentPassword(text)}
      />
      <PasswordField
        plhdTitle={"Mật khẩu mới"}
        value={newPw}
        handleOnChangeText={(text) => setNewPw(text)}
      />
      <PasswordField
        plhdTitle={"Xác nhận mật khẩu"}
        value={cfPw}
        handleOnChangeText={(text) => setCfPw(text)}
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
          const oldPw = await AsyncStorage.getItem(PASSWORD);
          if (currentPassword != oldPw) {
            alert("Mật khẩu cũ không đúng");
          } else if (newPw != cfPw) {
            alert("Mật khẩu mới và xác nhận mật khẩu mới không trùng khớp");
          } else {
            alert("Đổi mật khẩu thành công");
            dispatch(changePw({ password: newPw, oldPassword: oldPw }));
            navigation.goBack();
          }
        }}
      >
        <Text style={{ color: "#fff" }}>Lưu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
