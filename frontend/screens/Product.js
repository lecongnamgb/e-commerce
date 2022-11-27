import { View, SafeAreaView, ScrollView, Alert, Text } from "react-native";
import React from "react";
import HeaderProduct from "../components/productComponents/HeaderProduct";
import Carousel from "../components/homeComponents/Carousel";
import FooterProduct from "../components/productComponents/FooterProduct";
import styles from "../components/styles";
import OverviewProduct from "../components/productComponents/OverviewProduct";
import SeparateView from "../components/userComponents/SeparateView";
import AgentIntro from "../components/searchComponents/AgentIntro";
import DescriptionProduct from "../components/productComponents/DescriptionProduct";
import BestSellerList from "../components/productComponents/BestSellerList";
import BriefEvaluation from "../components/productComponents/BriefEvaluation";
import { useEffect, useState } from "react";
import { _getApi } from "../utils/axios";
import { API_GET_LIST_PRODUCT } from "../utils/api";
import { nanoid } from "@reduxjs/toolkit";

export default function Product({ route }) {
  const {
    params: { id },
  } = route;

  const [product, setProduct] = useState();

  useEffect(async () => {
    try {
      const response = await _getApi(`${API_GET_LIST_PRODUCT}/${id}`);
      setProduct(response.data);
    } catch (err) {
      Alert.alert("Oops!", err.message);
    }
  }, []);
  console.log("product:", product);

  const images = product.img.map((img, index) => {
    return { id: index, sourceIcon: img };
  });

  //   const images = [
  //     {
  //       id: 1,
  //       sourceIcon:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE95InBHABknnQjWnbCwMPjkBq1Pd8EKiUi_9isA8miFV2sgaIh-tAbBj_FOuV9rLk6QA&usqp=CAU",
  //     },
  //     {
  //       id: 2,
  //       sourceIcon:
  //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ltnermWFkyHkSyYTFGOhooozvPNtZGLNOvPv5ae22P2TcqKCJ3CpVvpcx7KnyMRNCv0&usqp=CAU",
  //     },
  //     {
  //       id: 3,
  //       sourceIcon:
  //         "https://vn-test-11.slatic.net/p/8e5d568458223fbe9ed9ec0eba09642d.png",
  //     },
  //     {
  //       id: 4,
  //       sourceIcon: "https://cf.shopee.vn/file/68b45cba995b332785a7121af2819f0b",
  //     },
  //   ];
  return (
    <SafeAreaView style={[styles.bg_white]}>
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
        <OverviewProduct product={product} />
        <SeparateView />
        <AgentIntro
          agentAvt={
            "https://1.bp.blogspot.com/-MWpiekrll-g/YMW2vMk0CzI/AAAAAAAAtwo/6FwzorrofsML__bdshUQreQy0V1TPwdfgCNcBGAsYHQ/s0/mau-ao-nam.jpg"
          }
        />
        <SeparateView />
        <BestSellerList />
        <SeparateView />
        <DescriptionProduct />
        <SeparateView />
        <BriefEvaluation />
        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
