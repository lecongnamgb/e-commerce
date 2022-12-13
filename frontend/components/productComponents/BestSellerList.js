import { View, Text, FlatList } from "react-native";
import React from "react";
import BestSellerItem from "./BestSellerItem";
import styles from "../styles";

export default function BestSellerList(props) {
  const { products } = props;
  return (
    <View style={[styles.mb_10]}>
      <View style={styles.p_15}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Top sản phẩm bán chạy
        </Text>
      </View>
      <View style={styles.pl_10}>
        <FlatList
          data={products}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => <BestSellerItem item={item} />}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
}
