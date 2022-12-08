import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import Carousel from "../components/homeComponents/Carousel";
import BestSellerList from "../components/productComponents/BestSellerList";
import BriefEvaluation from "../components/productComponents/BriefEvaluation";
import DescriptionProduct from "../components/productComponents/DescriptionProduct";
import FooterProduct from "../components/productComponents/FooterProduct";
import HeaderProduct from "../components/productComponents/HeaderProduct";
import OverviewProduct from "../components/productComponents/OverviewProduct";
import AgentIntro from "../components/searchComponents/AgentIntro";
import styles from "../components/styles";
import SeparateView from "../components/userComponents/SeparateView";
import { selectFeedbackByProductId } from "../redux/feedBackSlice";
import { selectProductById } from "../redux/productSlice";
import { selectShopById } from "../redux/shopSlice";

export default function Product({ route }) {
  const {
    params: { id },
  } = route;

  const product = useSelector((state) => selectProductById(state, id)) || {};
  const shopId = product.shop?._id;

  const shop = useSelector((state) => selectShopById(state, shopId)) || {};
  const feedbacks = useSelector((state) =>
    selectFeedbackByProductId(state, id)
  );
  const arr = [...product.img];
  arr.unshift(product.avatar);

  const images = arr.map((img, index) => {
    return { id: index, sourceIcon: img };
  });

  return (
    <SafeAreaView style={[styles.bg_white]} wait>
      <View
        style={{ position: "absolute", top: 35, right: 1, left: 1, zIndex: 2 }}
      >
        <HeaderProduct numOfProductsInCart={2} />
      </View>
      <View style={{ position: "absolute", bottom: 0, zIndex: 1 }}>
        <FooterProduct />
      </View>
      <ScrollView>
        <Carousel listData={images} />
        {product != null ? <OverviewProduct product={product} /> : null}
        {/* <OverviewProduct product={product} /> */}
        <SeparateView />
        {shop != null ? <AgentIntro shop={shop} /> : null}
        <SeparateView />
        <BestSellerList />
        <SeparateView />
        <DescriptionProduct
          description={product != null ? product.description : null}
        />
        <SeparateView />
        <BriefEvaluation feedbacks={feedbacks} />
        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
