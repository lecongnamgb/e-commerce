import { View, Text, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import styles from "../components/styles";
import { Alert } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { _postApi } from "../utils/axios";
import { API_RESET_PASSWORD } from "../utils/api";
import { LOGIN_SCREEN } from "../utils/const";

export default function TypeCodeScreen({ route }) {
  const email = route.params.email;
  const [value, setValue] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const CELL_COUNT = 6;

  const navigation = useNavigation();
  return (
    <SafeAreaView style={[{ height: "100%", backgroundColor: "#fff" }]}>
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
        <Text style={{ fontSize: 23, marginLeft: "29%" }}>Nhập code</Text>
      </View>
      <View style={{ width: "80%", marginLeft: "10%" }}>
        <Text style={{ fontSize: 14, marginTop: 10 }}>
          Chúng tôi đã gửi 1 mã code đến email của bạn. Vui lòng nhập code nhận
          được xuống bên dưới
        </Text>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            disabled={!(value.length === 6) && isWaiting}
            onPress={async () => {
              try {
                setIsWaiting(true);
                const response = await _postApi(API_RESET_PASSWORD, {
                  email,
                  code: value,
                });
                setIsWaiting(false);
                if (response.success === true) {
                  Alert.alert(
                    "Thông báo",
                    "Mật khẩu mới của bạn đã được gửi vào email"
                  );
                  navigation.navigate(LOGIN_SCREEN);
                  return;
                }
                if (response.success === false) {
                  Alert.alert("Oops!", response.message);
                  return;
                }
              } catch (err) {
                console.log(err);
                Alert.alert("Oops!", err.message);
              }
            }}
          >
            <View
              style={[
                {
                  backgroundColor: "#ff8000",
                  height: 40,
                  marginLeft: 0,
                  marginRight: 0,
                },
                styles.alignCenterItemVertically,
                value.length === 6 && !isWaiting ? null : styles.disabled,
              ]}
            >
              {!isWaiting ? (
                <Text
                  style={[
                    { textAlign: "center", color: "#fff", fontSize: 18 },
                    !(value.length === 6) && !isWaiting
                      ? styles.disabled
                      : null,
                  ]}
                >
                  Xác nhận
                </Text>
              ) : (
                <ActivityIndicator size="small" color="#0000ff" />
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.color_blue, { fontSize: 15, marginTop: 10 }]}>
              Gửi lại mã
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
