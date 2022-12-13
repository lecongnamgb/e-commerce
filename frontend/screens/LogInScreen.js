import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NormalField from "../components/checkInComponents/NormalField";
import PasswordField from "../components/checkInComponents/PasswordField";
import styles from "../components/styles";
import { API_LOG_IN, API_REFRESH_TOKEN } from "../utils/api";
import { _clearHeader, _postApi, _setHeader } from "../utils/axios";
import Config from "../utils/config";
import {
  ACCESS_TOKEN,
  FORGET_SCREEN,
  HOME_SCREEN,
  LOGIN_SUCCESSFULLY,
  NOTI,
  PASSWORD,
  REFRESH_TOKEN,
} from "../utils/const";

import { SIGNUP_SCREEN } from "../utils/const";

export default function LogInScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "white" }}>
      <View
        style={[
          styles.flex_row,
          { width: "100%", borderBottomColor: "#f2f2f2", borderBottomWidth: 1 },
          styles.p_15,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("User");
          }}
        ></TouchableOpacity>
        <Text style={{ fontSize: 23, marginLeft: "35%" }}>Đăng nhập</Text>
      </View>
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
      <View>
        <View style={[{ margin: 25 }]}>
          <NormalField
            plhdTitle="Nhập tên đăng nhập"
            sourceIcon={require("../assets/icon/account_icon.png")}
            focus={true}
            value={username}
            handleOnChangeText={(text) => setUsername(text)}
          />
          <PasswordField
            plhdTitle="Mật khẩu"
            value={password}
            handleOnChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          disabled={!(username && password)}
          onPress={async () => {
            try {
              const userInfo = { username, password };
              const {
                data: { refreshToken },
              } = await _postApi(API_LOG_IN, userInfo);
              await AsyncStorage.setItem(REFRESH_TOKEN, refreshToken);
              const headers = {
                headers: {
                  "X-Refresh-Token": refreshToken,
                },
              };

              // await _postApi(API_REFRESH_TOKEN, null, JSON.stringify(headers));

              const {
                data: { data: accessToken, success },
              } = await axios.post(
                `${Config.DOMAIN_SERVER_API}${API_REFRESH_TOKEN}`,
                null,
                headers
              );
              _clearHeader();
              _setHeader(accessToken);
              await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
              await AsyncStorage.setItem(PASSWORD, password);
              Alert.alert(NOTI, LOGIN_SUCCESSFULLY);
              navigation.navigate(HOME_SCREEN);
            } catch (err) {
              console.log(err);
              Alert.alert("Oops!", err.message);
              return;
            }
          }}
        >
          <View
            style={[
              {
                backgroundColor: "#ff8000",
                height: 40,
                marginLeft: 25,
                marginRight: 25,
              },
              styles.alignCenterItemVertically,
              username && password ? null : styles.disabled,
            ]}
          >
            <Text
              style={[
                { textAlign: "center", color: "#fff", fontSize: 18 },
                !(username && password) ? styles.disabled : null,
              ]}
            >
              Đăng nhập
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={[
            styles.ml_25,
            styles.mr_25,
            styles.mt_20,
            styles.flex_row,
            { justifyContent: "flex-end" },
          ]}
        >
          <TouchableOpacity
            style={{ alignSelf: "flex-start", width: "100%" }}
            onPress={() => {
              navigation.navigate(SIGNUP_SCREEN);
            }}
          >
            <Text style={[styles.color_blue, { fontSize: 15 }]}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.ml_25,
            styles.mr_25,
            styles.mt_20,
            styles.flex_row,
            { justifyContent: "flex-end" },
          ]}
        >
          <TouchableOpacity
            style={{ bottom: 37 }}
            onPress={() => {
              navigation.navigate(FORGET_SCREEN);
            }}
          >
            <Text style={[styles.color_blue, { fontSize: 15 }]}>
              Quên mật khẩu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
