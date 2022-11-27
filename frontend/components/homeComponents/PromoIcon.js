import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

export default function PromoIcon(props) {
  const { sale_percent } = props;
  return (
    <View>
      <View style={[styles.promo_icon_body]}>
        <Text style={{ textAlign: "center", color: "red", fontSize: 12 }}>
          {sale_percent}%
        </Text>
        <Text style={{ textAlign: "center", color: "#fff", fontSize: 12 }}>
          GIẢM
        </Text>
      </View>
      <View style={styles.promo_icon} />
    </View>
  );
}
