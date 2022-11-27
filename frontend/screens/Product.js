import React, { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, View } from "react-native";
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
import { API_GET_LIST_PRODUCT, API_GET_LIST_SHOP } from "../utils/api";
import { _getApi } from "../utils/axios";

export default function Product({ route }) {
  const {
    params: { id },
  } = route;

  const [product, setProduct] = useState();
  const [shop, setShop] = useState();
  const [bestSeller, setBestSeller] = useState();

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await _getApi(`${API_GET_LIST_PRODUCT}/${id}`);
        setProduct(response.data);

        const shopResponse = await _getApi(
          `${API_GET_LIST_SHOP}/${response.data.shop_id}`
        );
        console.log("shop:", shopResponse);
        setShop(shopResponse.data);

        const bestSellerResponse = await _getApi(
          `${API_GET_LIST_PRODUCT}/${response.data.shop_id}/shop?search=sell`
        );
        setBestSeller(bestSellerResponse.data);
      } catch (err) {
        Alert.alert("Oops!", err.message);
      }
    }
    fetchApi();
  }, []);

  const images = product?.img.map((img, index) => {
    return { id: index, sourceIcon: img };
  });
  //   console.log("images:", images);
  //   console.log("product:", product);

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
        {shop != null ? (
          <AgentIntro
            agentAvt={
              "https://1.bp.blogspot.com/-MWpiekrll-g/YMW2vMk0CzI/AAAAAAAAtwo/6FwzorrofsML__bdshUQreQy0V1TPwdfgCNcBGAsYHQ/s0/mau-ao-nam.jpg"
            }
            shop={shop}
          />
        ) : null}
        <SeparateView />
        <BestSellerList />
        <SeparateView />
        <DescriptionProduct
          description={product != null ? product.description : null}
        />
        <SeparateView />
        <BriefEvaluation />
        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
