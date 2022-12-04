import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import NormalField from "../components/checkInComponents/NormalField";
import styles from "../components/styles";
import { API_GET_RESET_CODE } from "../utils/api";
import { _postApi } from "../utils/axios";
import { TYPE_CODE_SCREEN } from "../utils/const";

export default function ForgetPwScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [isWaiting, setIsWaiting] = useState(false);

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
            navigation.goBack();
          }}
        >
          <Image
            source={require("../assets/icon/back_arrow.png")}
            style={styles.img_32x32}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 23, marginLeft: "23%" }}>Quên mật khẩu</Text>
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
            plhdTitle="Nhập email của bạn"
            sourceIcon={require("../assets/icon/account_icon.png")}
            focus={true}
            value={username}
            handleOnChangeText={(text) => setUsername(text)}
          />
        </View>
        <TouchableOpacity
          disabled={!username && isWaiting}
          onPress={async () => {
            try {
              setIsWaiting(true);
              const response = await _postApi(API_GET_RESET_CODE, {
                email: username,
              });
              setIsWaiting(false);
              if (response.success === false) {
                Alert.alert("Oops!", response.message);
                return;
              }
              navigation.navigate(TYPE_CODE_SCREEN, { email: username });
            } catch (err) {
              Alert.alert("Oops!", err.message);
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
              username && !isWaiting ? null : styles.disabled,
            ]}
          >
            {!isWaiting ? (
              <Text
                style={[
                  { textAlign: "center", color: "#fff", fontSize: 18 },
                  !username ? styles.disabled : null,
                ]}
              >
                Xác nhận
              </Text>
            ) : (
              <ActivityIndicator size="small" color="#0000ff" />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
