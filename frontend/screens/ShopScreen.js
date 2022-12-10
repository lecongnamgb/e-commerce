import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import FilterItem from "../components/billStatusComponents/FilterItem";
import RecommendItem from "../components/homeComponents/RecommendItem";
import HeaderShop from "../components/shopComponents/HeaderShop";
import styles from "../components/styles";
import SeparateView from "../components/userComponents/SeparateView";
import { selectProductByShopId } from "../redux/productSlice";
import { selectShopById } from "../redux/shopSlice";

export default function ShopScreen({ route }) {
  const shopId = route.params.shopId;
  const shop = useSelector((state) => selectShopById(state, shopId)) || {};

  const Allproducts =
    useSelector((state) => {
      return selectProductByShopId(state, shopId);
    }) || [];
  const navigation = useNavigation();
  const [products, setProducts] = useState(Allproducts);

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
        data={products}
        renderItem={({ item }) => (
          <RecommendItem recommendItem={item} containRating={false} />
        )}
        keyExtractor={(item) => item._id}
        numColumns={2}
        ListHeaderComponent={
          <View>
            <HeaderShop
              shop={shop}
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
                    if (item.title === "Hàng mới về") {
                      setProducts(
                        products.sort((a, b) => {
                          if (a.createdAt > b.createdAt) {
                            return 1;
                          } else {
                            return -1;
                          }
                        })
                      );
                    } else if (item.title === "Sản phẩm") {
                      setProducts(Allproducts);
                    } else if (item.title === "Top bán chạy") {
                      setProducts(
                        products.sort((a, b) => {
                          if (a.quantitySold > b.quantitySold) {
                            return -1;
                          } else {
                            return 1;
                          }
                        })
                      );
                    }
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
