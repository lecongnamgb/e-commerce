import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import NormalField from "../components/checkInComponents/NormalField";
import PasswordField from "../components/checkInComponents/PasswordField";
import { useNavigation } from "@react-navigation/native";
import { _getApi, _postApi } from "../utils/axios";
import { API_SIGN_UP } from "../utils/api";

function validate(listData, email, username, pw, confirmPw) {
  if (!email.includes("@")) {
    alert("Email không hợp lệ");
    return false;
  }
  if (email === "") {
    alert("Bạn chưa nhập email");
    return false;
  }
  if (username.length < 6) {
    alert("Tài khoản phải có ít nhất 6 ký tự");
    return false;
  }
  if (pw.length < 6) {
    alert("Mật khẩu phải ít nhất 6 ký tự");
    return false;
  }
  if (pw !== confirmPw) {
    alert("Mật khẩu và xác nhận lại mật khẩu không khớp");
    return false;
  }
  listData.map((item) => {
    if (item.username === username) {
      alert("Tài khoản đã tồn tại");
      return false;
    }
    if (item.email === email) {
      alert("Email đã tồn tại");
      return false;
    }
  });
  alert("Đăng ký tài khoản thành công");
  return true;
}

export default function SignInScreen() {
  const navigation = useNavigation();
  const listData = [
    {
      username: "Lecongnam",
      email: "Lecongnamgb@gmail.com",
    },
  ];
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header title="Đăng ký" canBack={true} />
      <View
        style={[
          styles.alignCenterItem,
          styles.alignCenterItemVertically,
          { marginTop: 40, marginBottom: 40 },
        ]}
      >
        <Image
          source={require("../assets/icon/main_logo.png")}
          style={styles.img_80x80}
        />
      </View>
      <View style={{ marginLeft: "10%", marginRight: "10%" }}>
        <NormalField
          sourceIcon={require("../assets/icon/mail.png")}
          plhdTitle="Email"
          focus={true}
          value={email}
          handleOnChangeText={(text) => {
            setEmail(text);
          }}
        />
        <View style={{ height: 20 }} />
        <NormalField
          sourceIcon={require("../assets/icon/account_icon.png")}
          plhdTitle="Tài khoản"
          value={username}
          handleOnChangeText={(text) => {
            setUsername(text);
          }}
        />
        <PasswordField
          plhdTitle="Mật khẩu"
          value={password}
          handleOnChangeText={(text) => {
            setPassword(text);
          }}
        />
        <PasswordField
          plhdTitle="Nhập lại mật khẩu"
          value={confirmPw}
          handleOnChangeText={(text) => {
            setConfirmPw(text);
          }}
        />
        <TouchableOpacity
          disabled={!(username && password && email && confirmPw)}
          onPress={async () => {
            // if (validate(listData, email, username, password, confirmPw) === true) {
            //     navigation.navigate('LogIn')
            // };
            try {
              const data = { username, password, email, re_password: password };
              const response = await _postApi(API_SIGN_UP, data);
              console.log(response);
              alert("Đăng ký tài khoản thành công");
              navigation.navigate("LogIn");
            } catch (err) {
              Alert.alert(`Oops!`, err.message);
            }
          }}
        >
          <View
            style={[
              { width: "100%", backgroundColor: "#ff8000", height: 35 },
              styles.alignCenterItem,
              styles.alignCenterItemVertically,
              styles.mt_15,
              username && password && email && confirmPw
                ? null
                : styles.disabled,
            ]}
          >
            <Text style={[{ color: "#fff", fontSize: 18 }]}>Đăng ký</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
