import { View, ScrollView, TouchableOpacity, Image, Text } from "react-native";
import React, { useState } from "react";
import styles from "../components/styles";
import { useNavigation } from "@react-navigation/native";
import RecommendItem from "../components/homeComponents/RecommendItem";
import HeaderProduct from "../components/productComponents/HeaderProduct";
import HeaderShop from "../components/shopComponents/HeaderShop";
import FilterItem from "../components/billStatusComponents/FilterItem";
import ListCategoryItem from "../components/billStatusComponents/ListCategoryItem";
import SeparateView from "../components/userComponents/SeparateView";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { selectShopById } from "../redux/shopSlice";
import { selectProductByShopId } from "../redux/productSlice";

export default function ShopScreen({ route }) {
  const shopId = route.params.shopId;
  const shop = useSelector((state) => selectShopById(state, shopId));
  const navigation = useNavigation();
  // const [follow, setFollow] = useState(false)
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
  const [listCategory, setListCatgory] = useState([
    {
      title: "Sản phẩm",
      active: true,
    },
    {
      title: "Hàng mới về",
      active: false,
    },
    {
      title: "Top bán chạy",
      active: false,
    },
  ]);
  return (
    <View>
      <TouchableOpacity
        style={[
          {
            backgroundColor: "#808080",
            zIndex: 1,
            position: "absolute",
            top: 40,
            left: 20,
            width: 40,
            height: 40,
          },
          styles.alignCenterItem,
          styles.alignCenterItemVertically,
          styles.rounded,
        ]}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../assets/icon/back_arrow_white.png")}
          style={[styles.img_24x24, { zIndex: 2 }]}
        />
      </TouchableOpacity>

      <SeparateView />
      <FlatList
        data={listData}
        renderItem={({ item }) => (
          <RecommendItem recommendItem={item} containRating={false} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={
          <View>
            <HeaderShop
              shopName={shop.name}
              ownerName={shop.owner.name}
              uriAvt={shop.avatarUrl}
              uriBg={shop.backgroundUrl}
              // follow = {follow}
              // onPressFollow = {() => {
              //     setFollow(!follow)
              // }}
            />
            <View style={styles.flex_row}>
              {listCategory.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={1}
                  onPress={() => {
                    setListCatgory(
                      listCategory.map((subItem, subIndex) => {
                        if (index === subIndex) {
                          return { ...subItem, active: true };
                        } else {
                          return { ...subItem, active: false };
                        }
                      })
                    );
                  }}
                >
                  <FilterItem
                    pl={30}
                    pr={30}
                    title={item.title}
                    active={item.active}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <SeparateView />
          </View>
        }
      />
    </View>
  );
}
