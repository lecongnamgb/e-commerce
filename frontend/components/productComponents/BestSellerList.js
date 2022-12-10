import { View, Text, FlatList } from "react-native";
import React from "react";
import BestSellerItem from "./BestSellerItem";
import styles from "../styles";

export default function BestSellerList(props) {
  const listData = [
    {
      id: 1,
      sourceIcon:
        "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantity_sold: 1700,
    },
    {
      id: 2,
      sourceIcon:
        "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantity_sold: 1700,
    },
    {
      id: 3,
      sourceIcon:
        "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantity_sold: 170,
    },
    {
      id: 4,
      sourceIcon:
        "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantity_sold: 1700,
    },
    {
      id: 5,
      sourceIcon:
        "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantity_sold: 1700,
    },
    {
      id: 6,
      sourceIcon:
        "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantity_sold: 1700,
    },
    {
      id: 7,
      sourceIcon:
        "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantity_sold: 1700,
    },
    {
      id: 8,
      sourceIcon:
        "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantity_sold: 1700,
    },
    {
      id: 9,
      sourceIcon:
        "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantity_sold: 1700,
    },
    {
      id: 10,
      sourceIcon:
        "https://khosiquanaogiare.com/wp-content/uploads/2021/05/ttl836-ao-thun-tay-lo-form-rong-hinh-dia-bay5-1.jpg",
      title:
        "Áo thun chất liệu siêu cấp vip pro, mặc co giãn thoải mái thôi rồi",
      price: 1000,
      quantity_sold: 1700,
    },
  ];
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
