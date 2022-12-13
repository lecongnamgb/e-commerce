import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { selectProductByShopId } from "../../redux/productSlice";
import { SHOP_SCREEN } from "../../utils/const";
import styles from "../styles";

export default function AgentIntro(props) {
  const navigation = useNavigation();
  const shop = props.shop || {};
  const shopId = shop?._id;
  const products = useSelector((state) => selectProductByShopId(state, shopId));
  return (
    <View style={styles.flex_row}>
      <TouchableOpacity
        style={[
          styles.ml_10,
          styles.mt_15,
          styles.mb_15,
          styles.flex_row,
          props.seeMore
            ? { borderRightColor: "#ccc", borderRightWidth: 1 }
            : null,
          { width: "75%" },
        ]}
        onPress={() => {
          navigation.navigate(SHOP_SCREEN, { shopId });
        }}
      >
        <View style={[styles.pl_10, styles.pr_10]}>
          <Image
            source={{ uri: shop.avatarUrl }}
            style={[styles.img_64x64, styles.rounded]}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
            {shop.name}
          </Text>
          <Text style={{ marginBottom: 5, color: "#595959" }}>
            {shop.owner.name}
          </Text>
          <View style={styles.flex_row}>
            <Text style={{ color: "#595959" }}>
              <Text style={styles.filterBar_text_active}>
                {products.length}{" "}
              </Text>
              Sản phẩm {"  "}
            </Text>
            <Text style={{ color: "#595959" }}>
              <Text style={styles.filterBar_text_active}>4.7 </Text>
              Đánh giá
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {props.seeMore ? (
        <TouchableOpacity
          style={[
            styles.alignCenterItemVertically,
            { width: "20%", paddingLeft: 16 },
          ]}
          onPress={props.handleSeeMore}
        >
          <Text
            style={[
              { fontSize: 16, textAlign: "center" },
              styles.filterBar_text_active,
            ]}
          >
            Thêm kết quả
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.alignCenterItemVertically, { width: "25%" }]}>
          <TouchableOpacity
            style={[
              {
                borderColor: "red",
                borderWidth: 1,
                width: 90,
                right: 15,
                height: 30,
                borderRadius: 3,
              },
              styles.alignCenterItemVertically,
            ]}
            onPress={() => {
              navigation.navigate("Shop", { shopId });
            }}
          >
            <Text style={{ textAlign: "center", color: "red" }}>Xem Shop</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
