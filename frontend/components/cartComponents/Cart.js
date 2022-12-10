import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, FlatList, SafeAreaView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentCart, updateCart } from "../../redux/cartSlice";
import Header from "../notiComponents/Header";
import CartBill from "./CartBill";
import CartItem from "./CartItem";

export default function Cart() {
  const navigation = useNavigation();
  const cart = useSelector(selectCurrentCart) || {};
  const products = cart.products || [];
  const height = Dimensions.get("window").height;
  const dispatch = useDispatch();
  let totalValue = 0;
  products.map((prd) => {
    totalValue += prd.product.standardPrice * prd.quantity;
  });

  return (
    <SafeAreaView style={{ minHeight: height }}>
      <View>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <CartItem
              sourceIcon={item.product.avatar}
              description={item.product.name}
              shopName={item.product.shop.name}
              price={item.product.standardPrice}
              shopId={item.product.shop._id}
              key={(item) => item._id}
              quantity={item.quantity}
              handleClickMinus={() => {
                let newPrds = [];
                if (item.quantity > 1) {
                  newPrds = products.map((prd) => {
                    if (prd.product._id == item.product._id) {
                      return {
                        ...prd,
                        quantity: prd.quantity - 1,
                      };
                    } else {
                      return prd;
                    }
                  });
                } else {
                  newPrds = products.filter(
                    (prd) => prd.product._id !== item.product._id
                  );
                }
                dispatch(updateCart({ products: newPrds }));
              }}
              handleClickPlus={() => {
                let newPrds = [];
                newPrds = products.map((prd) => {
                  if (prd.product._id == item.product._id) {
                    return {
                      ...prd,
                      quantity: prd.quantity + 1,
                    };
                  } else {
                    return prd;
                  }
                });
                dispatch(updateCart({ products: newPrds }));
              }}
            />
          )}
          keyExtractor={(item) => item.product._id}
          ListHeaderComponent={<Header title="Giỏ hàng" canBack={true} />}
          stickyHeaderIndices={[0]}
        />
      </View>
      <View
        style={{ position: "absolute", bottom: 60, height: 50, width: "100%" }}
      >
        <CartBill
          totalValue={totalValue}
          handleClickBuy={() => {
            navigation.navigate("ConfirmBuy", {
              totalPrice: totalValue,
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
}
