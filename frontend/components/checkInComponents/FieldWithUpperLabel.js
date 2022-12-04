import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import styles from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { takePhotoAndUpload } from "../../utils/helperFnc";

export default function FieldWithUpperLabel(props) {
  return (
    <View
      style={[
        styles.bg_white,
        styles.pt_15,
        styles.pb_15,
        styles.pl_10,
        styles.pr_10,
      ]}
    >
      <View style={[styles.pb_10]}>
        <Text style={{ fontSize: 15 }}>{props.label}</Text>
      </View>
      {!props?.chooseImage ? (
        <View>
          <TextInput
            placeholder={props.plhdTitle}
            value={props.value}
            onChangeText={props.onChangeText}
            autoCapitalize={"none"}
            autoFocus={props.focus}
            style={{ fontSize: 15 }}
            keyboardType={props.keyboardType ? props.keyboardType : "default"}
          />
        </View>
      ) : (
        <View>
          <Image
            source={
              props.sourceImage
                ? {
                    uri: props.sourceImage,
                  }
                : null
            }
            style={
              props.sourceImage
                ? [styles.img_124x124, { marginBottom: 10 }]
                : null
            }
          />
          <TouchableOpacity onPress={props.onPress}>
            <Text style={{ fontSize: 16, color: "#00f" }}>Chọn ảnh</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
