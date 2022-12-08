import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Header from "../components/notiComponents/Header";
import RecommendItem from "../components/homeComponents/RecommendItem";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../redux/productSlice";
import { selectCurrentUser } from "../redux/userSlice";

export default function LikedProduct() {
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
  const currentUser = useSelector(selectCurrentUser) || {};
  const fvtPrdIds = currentUser.favoriteProductIds || [];
  const allPrds = useSelector(selectAllProducts);
  const products = fvtPrdIds.map((id) => {
    return allPrds.find((prd) => prd._id === id);
  });
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header title={"Sản phẩm đã thích"} canBack={true} />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <RecommendItem recommendItem={item} containRating={false} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
