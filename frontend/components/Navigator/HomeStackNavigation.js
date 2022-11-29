import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RecommendListItem from "../homeComponents/RecommendListItem";
import SearchScreen from "../../screens/SearchScreen";
import LogInScreen from "../../screens/LogInScreen";
import CartScreen from "../../screens/CartScreen";

import ResultSearchScreen from "../../screens/ResultSearchScreen";
import Product from "../../screens/Product";
import EvaluationScreen from "../../screens/EvaluationScreen";
import NotiMain from "../notiComponents/NotiMain";
import MainUserScreen from "../userComponents/MainUserScreen";
import SignInScreen from "../../screens/SignInScreen";
import EditInfoScreen from "../../screens/EditInfoScreen";
import LikedProduct from "../../screens/LikedProduct";
import RecentlyView from "../../screens/RecentlyView";
import BuyAgain from "../../screens/BuyAgain";
import BillStatus from "../../screens/BillStatus";
import RegisterSeller from "../../screens/RegisterSeller";
import ShopScreen from "../../screens/ShopScreen";
import ResultShop from "../../screens/ResultShop";
import EditName from "../../screens/EditScreen/EditName";
import EditPhoneNumber from "../../screens/EditScreen/EditPhoneNumber";
import EditAddress from "../../screens/EditScreen/EditAddress";
import EditPassword from "../../screens/EditScreen/EditPassword";
import ProductReview from "../../screens/ProductReview";
import ProductManager from "../../screens/ProductManager";
import EditProductInfo from "../../screens/EditProductInfo";
import OrderManager from "../../screens/OrderManager";
import MyReview from "../../screens/MyReview";
import ConfirmBuyProducts from "../../screens/ConfirmBuyProducts";
import ForgetPwScreen from "../../screens/ForgetPwScreen";
import {
  BILL_SCREEN,
  CART_SCREEN,
  CONFIRM_BUY_SCREEN,
  EDIT_ADDRESS_SCREEN,
  EDIT_INFO_SCREEN,
  EDIT_NAME_SCREEN,
  EDIT_PASSWORD_SCREEN,
  EDIT_PHONE_NUMBER_SCREEN,
  EDIT_PRODUCT_INFO_SCREEN,
  EVALUATION_SCREEN,
  FORGET_SCREEN,
  HOME_SCREEN,
  LIKED_PRODUCT_SCREEN,
  LOGIN_SCREEN,
  MY_REVIEW_SCREEN,
  ORDER_MANAGER_SCREEN,
  PRODUCT_MANAGER_SCREEN,
  PRODUCT_REVIEW_SCREEN,
  PRODUCT_SCREEN,
  REGISTER_SELLER_SCREEN,
  RESULT_SEARCH_SCREEN,
  RESULT_SHOP_SCREEN,
  SEARCH_SCREEN,
  SHOP_SCREEN,
  SIGNUP_SCREEN,
  TYPE_CODE_SCREEN,
  USER_SCREEN,
} from "../../utils/const";
import TypeCodeScreen from "../../screens/TypeCodeScreen";

const Stack = createStackNavigator();
export default function HomeStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LOGIN_SCREEN}
        component={LogInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={HOME_SCREEN}
        component={RecommendListItem}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={CART_SCREEN}
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={BILL_SCREEN}
        component={BillStatus}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RESULT_SEARCH_SCREEN}
        component={ResultSearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PRODUCT_SCREEN}
        component={Product}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={EVALUATION_SCREEN}
        component={EvaluationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"NotiMain"}
        component={NotiMain}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={USER_SCREEN}
        component={MainUserScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={TYPE_CODE_SCREEN}
        component={TypeCodeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SIGNUP_SCREEN}
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={EDIT_INFO_SCREEN}
        component={EditInfoScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={LIKED_PRODUCT_SCREEN}
        component={LikedProduct}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"RecentlyView"}
        component={RecentlyView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"BuyAgain"}
        component={BuyAgain}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={REGISTER_SELLER_SCREEN}
        component={RegisterSeller}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={FORGET_SCREEN}
        component={ForgetPwScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={SHOP_SCREEN}
        component={ShopScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={RESULT_SHOP_SCREEN}
        component={ResultShop}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={EDIT_NAME_SCREEN}
        component={EditName}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={EDIT_PHONE_NUMBER_SCREEN}
        component={EditPhoneNumber}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={EDIT_ADDRESS_SCREEN}
        component={EditAddress}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={EDIT_PASSWORD_SCREEN}
        component={EditPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PRODUCT_REVIEW_SCREEN}
        component={ProductReview}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PRODUCT_MANAGER_SCREEN}
        component={ProductManager}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={EDIT_PRODUCT_INFO_SCREEN}
        component={EditProductInfo}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ORDER_MANAGER_SCREEN}
        component={OrderManager}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={MY_REVIEW_SCREEN}
        component={MyReview}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={CONFIRM_BUY_SCREEN}
        component={ConfirmBuyProducts}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
