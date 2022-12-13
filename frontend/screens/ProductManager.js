import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/notiComponents/Header";
import ProductInShop from "../components/shopComponents/ProductInShop";
import styles from "../components/styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  selectAllProducts,
  selectProductByShopId,
} from "../redux/productSlice";
import { selectShopByOwnerId } from "../redux/shopSlice";
import { selectCurrentUser } from "../redux/userSlice";
import {
  ADD_PRODUCT_TITLE,
  EDIT_PRODUCT_INFO_SCREEN,
  EDIT_PRODUCT_TITLE,
} from "../utils/const";
import { FlatList } from "react-native-gesture-handler";

export default function ProductManager() {
  const user = useSelector(selectCurrentUser) || {};
  const userId = user._id;
  const shop = useSelector((state) => selectShopByOwnerId(state, userId)) || {};
  const shopId = shop._id;
  const products = useSelector((state) => selectProductByShopId(state, shopId));
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header canBack={true} title={"Quản lý sản phẩm"} />
      <TouchableOpacity
        style={{ position: "absolute", top: 55, right: 10 }}
        onPress={() => {
          navigation.navigate("EditProductInfo", {
            title: ADD_PRODUCT_TITLE,
            shopId,
          });
        }}
      >
        <Image
          source={require("../assets/icon/add.png")}
          style={styles.img_32x32}
        />
      </TouchableOpacity>
      {products.length === 0 ? (
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Hiện shop của bạn chưa có sản phẩm nào
        </Text>
      ) : (
        <FlatList
          data={products}
          scrollEnabled={true}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => {
            return (
              <ProductInShop
                uriImg={item.avatar}
                productName={item.name}
                price={item.standardPrice}
                handleEdit={() => {
                  navigation.navigate(EDIT_PRODUCT_INFO_SCREEN, {
                    title: EDIT_PRODUCT_TITLE,
                    productId: item._id,
                  });
                }}
                handleDelete={() => {
                  Alert.alert(
                    "Cảnh báo",
                    "Bạn có chắc chắn muốn xoá sản phẩm này không ?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => dispatch(deleteProduct(item._id)),
                      },
                    ]
                  );
                }}
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}
