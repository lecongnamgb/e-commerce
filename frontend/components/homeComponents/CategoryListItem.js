import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import right_arrow from "../../assets/icon/right_arrow.png";
import { API_GET_LIST_CATEGORY, API_GET_LIST_PRODUCT } from "../../utils/api";
import { _getApi } from "../../utils/axios";
import Config from "../../utils/config";
import styles from "../styles";
import SeparateView from "../userComponents/SeparateView";
import Carousel from "./Carousel";
import CategoryItem from "./CategoryItem";

const listData = [
  {
    id: 1,
    sourceIcon: require("../../assets/icon/men_clothings.png"),
    title: "Quần áo nam",
  },
  {
    id: 2,
    sourceIcon: require("../../assets/icon/women_clothings.png"),
    title: "Quần áo nữ",
  },
  {
    id: 3,
    sourceIcon: require("../../assets/icon/cooking_tools.png"),
    title: "Nhà cửa & đời sống",
  },
  {
    id: 4,
    sourceIcon: require("../../assets/icon/toys.png"),
    title: "Đồ chơi",
  },
  {
    id: 5,
    sourceIcon: require("../../assets/icon/books.png"),
    title: "Sách",
  },
  {
    id: 6,
    sourceIcon: require("../../assets/icon/electronic_devices.png"),
    title: "Thiết bị điện tử",
  },
  {
    id: 7,
    sourceIcon: require("../../assets/icon/cosmetics.png"),
    title: "Mỹ phẩm",
  },
  {
    id: 8,
    sourceIcon: require("../../assets/icon/men_shoes.png"),
    title: "Giày dép nam",
  },
  {
    id: 9,
    sourceIcon: require("../../assets/icon/women_shoes.png"),
    title: "Giày dép nữ",
  },
  {
    id: 10,
    sourceIcon: require("../../assets/icon/accessories.png"),
    title: "Phụ kiện",
  },
];

export default function CategoryListItem() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Carousel />
      <SeparateView />
      <View
        style={[
          styles.flex_row,
          styles.userTag,
          styles.m_10,
          styles.alignCenterItemVertically,
        ]}
      >
        <View>
          <Text style={styles.color_orange}>DANH MỤC HÀNG</Text>
        </View>
        <View style={[styles.flex_row, styles.flex_end]}>
          <Text>Tìm hiểu thêm</Text>
          <Image source={right_arrow} style={styles.arrow_icon} />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={listData}
          showsHorizontalScrollIndicator={false}
          numColumns={Math.ceil(listData.length / 2)}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={async () => {
                  // const data = await _getApi();
                  navigation.navigate("resultSearch", { text: item.title });
                }}
              >
                <CategoryItem title={item.title} sourceIcon={item.sourceIcon} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => `${item.id}`}
        />
      </ScrollView>
      <SeparateView />
    </SafeAreaView>
  );
}
