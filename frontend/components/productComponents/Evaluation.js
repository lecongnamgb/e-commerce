import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles";
import RatingStar from "./RatingStar";
import { formatDate } from "../../utils/helperFnc";

export default function Evaluation(props) {
  const { evaluation } = props;
  return (
    <View style={[styles.p_15, styles.flex_row, styles.hr_bottom]}>
      <View style={{ paddingRight: 15 }}>
        <Image
          source={{ uri: evaluation.user?.avatar }}
          style={[styles.img_32x32, styles.rounded]}
        />
      </View>
      <View style={{ width: "85%" }}>
        <Text style={styles.pb_10}>{evaluation.user?.name}</Text>
        <RatingStar stars={evaluation.numberStar} />
        <Text style={[styles.pb_10, styles.pt_10]}>{evaluation.comment}</Text>
        <Text style={{ color: "#404040" }}>
          {formatDate(evaluation.createdAt)}
        </Text>
      </View>
    </View>
  );
}
