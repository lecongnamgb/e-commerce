import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "../styles";
import RatingStar from "../productComponents/RatingStar";
import { useNavigation } from "@react-navigation/native";
import { formatDate } from "../../utils/helperFnc";

export default function Review(props) {
  const { review } = props;
  const navigation = useNavigation();
  return (
    <View style={[styles.hr_light_bottom, { paddingBottom: 10 }]}>
      <View style={[styles.flex_row, styles.p_10]}>
        <View style={styles.pr_15}>
          <Image
            source={{ uri: review.user.avatar }}
            style={[styles.img_24x24, styles.rounded]}
          />
        </View>
        <View style={{ width: "90%" }}>
          <Text style={styles.mb_5}>{review.user.name}</Text>
          <RatingStar stars={review.numberStar} />
          <Text style={[styles.mb_5, styles.mt_5, { color: "#737373" }]}>
            {formatDate(review.createdAt)}
          </Text>
          <Text style={styles.mb_5}>{review.comment}</Text>
          <TouchableOpacity
            style={styles.flex_row}
            onPress={props.handleClickProduct}
          >
            <Image
              source={{ uri: review.product.avatar }}
              style={styles.img_48x48}
            />
            <View
              style={[
                styles.alignCenterItemVertically,
                {
                  height: 48,
                  width: "60%",
                  backgroundColor: "#f2f2f2",
                  paddingLeft: 20,
                },
              ]}
            >
              <Text
                style={{ fontWeight: "bold", paddingRight: 10 }}
                numberOfLines={1}
              >
                {review.product.name}{" "}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
