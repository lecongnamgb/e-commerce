import { View, FlatList, Button, SafeAreaView, Alert } from "react-native";
import React from "react";
import RecommendItem from "./RecommendItem";
import RecommendToday from "./RecommendToday";
import SearchForm from "./SearchForm";
import BottomNavigator from "../Navigator/BottomNavigator";
import { useEffect, useState } from "react";
import { _getApi } from "../../utils/axios";
import { API_GET_LIST_PRODUCT } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../redux/productSlice";
import { fetchShops } from "../../redux/shopSlice";
import { fetchFeedbacks } from "../../redux/feedBackSlice";
import { fetchUserInfo } from "../../redux/userSlice";

export default function RecommendListItem({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchProducts());
    dispatch(fetchShops());
    dispatch(fetchFeedbacks());
  }, []);

  const products = useSelector(selectAllProducts);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <SearchForm width={"85%"} />
      <BottomNavigator height={150} currentActive={"Home"} />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <RecommendItem recommendItem={item} containRating={false} />
        )}
        keyExtractor={(item) => item._id}
        numColumns={2}
        scrollEnabled={true}
        ListHeaderComponent={RecommendToday}
        ListFooterComponent={<View style={{ height: 110 }} />}
      />
    </SafeAreaView>
  );
}
