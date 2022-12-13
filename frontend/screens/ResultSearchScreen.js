import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import RecommendItem from "../components/homeComponents/RecommendItem";
import AgentIntro from "../components/searchComponents/AgentIntro";
import FliterBar from "../components/searchComponents/FliterBar";
import SearchBar from "../components/searchComponents/SearchBar";
import styles from "../components/styles";
import { selectShopById } from "../redux/shopSlice";
import { API_ELT_SEARCH } from "../utils/api";
import { _getApi } from "../utils/axios";

export default function ResultSearchScreen({ route }) {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await _getApi(API_ELT_SEARCH, {
      params: {
        name: route.params.text,
        type: route.params.type,
      },
    });

    setData(response.data);
  }, []);
  const shopId = data[0]?.shop._id;
  const shop = useSelector((state) => selectShopById(state, shopId));

  return (
    <SafeAreaView style={[styles.bg_white, { minHeight: "100%" }]}>
      <SearchBar
        widthSearchInput={"80%"}
        value={route.params.text}
        focus={false}
      />
      {data.length !== 0 ? (
        <View>
          <FliterBar
            handlePress1={() => {
              setData(
                data.sort((a, b) => {
                  if (a.standardPrice < b.standardPrice) {
                    return 1;
                  } else {
                    return -1;
                  }
                })
              );
            }}
            handlePress2={() => {
              setData(
                data.sort((a, b) => {
                  if (a.standardPrice > b.standardPrice) {
                    return 1;
                  } else {
                    return -1;
                  }
                })
              );
            }}
          />

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <RecommendItem recommendItem={item} containRating={true} />
            )}
            numColumns={2}
            scrollEnabled={true}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<AgentIntro shop={shop} />}
            ListFooterComponent={<View style={{ height: 100 }}></View>}
          />
        </View>
      ) : (
        <Text style={{ textAlign: "center" }}>Không tìm thấy sản phẩm nào</Text>
      )}
    </SafeAreaView>
  );
}
