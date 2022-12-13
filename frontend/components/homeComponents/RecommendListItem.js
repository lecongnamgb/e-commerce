import React, { useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts } from "../../redux/cartSlice";
import { fetchFeedbacks } from "../../redux/feedBackSlice";
import { fetchOrders } from "../../redux/orderSlice";
import { fetchProducts, selectAllProducts } from "../../redux/productSlice";
import { fetchShops } from "../../redux/shopSlice";
import { fetchUserInfo } from "../../redux/userSlice";
import BottomNavigator from "../Navigator/BottomNavigator";
import RecommendItem from "./RecommendItem";
import RecommendToday from "./RecommendToday";
import SearchForm from "./SearchForm";

export default function RecommendListItem({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchProducts());
    dispatch(fetchShops());
    dispatch(fetchFeedbacks());
    dispatch(fetchCarts());
    dispatch(fetchOrders());
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
