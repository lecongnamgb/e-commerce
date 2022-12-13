import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, TextInput, View } from "react-native";
import HistorySearchItem from "../components/searchComponents/HistorySearchItem";
import styles from "../components/styles";
import { API_SUGGESTER } from "../utils/api";
import { _getApi } from "../utils/axios";

export default function SearchScreen() {
  const [input, setInput] = useState("");
  const navigation = useNavigation();

  const handleSubmitText = () => {
    navigation.navigate("resultSearch", { text: input, type: "name" });
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [dataSuggestion, setDataSuggestion] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const response = await _getApi(API_SUGGESTER, {
        params: {
          name: searchTerm,
        },
      });
      setDataSuggestion(response.data);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <SafeAreaView style={[styles.bg_white]}>
      <View
        style={[
          styles.flex_row,
          { borderBottomColor: "#f2f2f2", borderBottomWidth: 1 },
        ]}
      >
        <TextInput
          placeholder="Tìm kiếm sản phẩm hoặc shop"
          enablesReturnKeyAutomatically={true}
          returnKeyType="search"
          autoFocus={true}
          onChangeText={(text) => {
            setSearchTerm(text);
            setInput(text);
          }}
          onSubmitEditing={handleSubmitText}
          defaultValue={""}
          style={[
            {
              width: "80%",
              height: 36,
              backgroundColor: "#f2f2f2",
              borderRadius: 3,
              fontSize: 15,
            },
            styles.p_10,
            styles.mb_15,
            styles.ml_10,
            styles.mt_10,
          ]}
        />
        <View style={[styles.mt_10]}>
          <Button
            title={"Thoát"}
            color="red"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      </View>
      <View>
        {dataSuggestion.map((item, index) => {
          return <HistorySearchItem name={item.name} key={index} />;
        })}
      </View>
    </SafeAreaView>
  );
}
