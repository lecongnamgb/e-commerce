import { TouchableOpacity, ScrollView, View, SafeAreaView } from "react-native";
import HeaderUser from "./HeaderUser";
import UserOptionTag from "./UserOptionTag";
import record from "../../assets/icon/icon_record.png";
import store from "../../assets/icon/store.png";
import PurchaseStatus from "./PurchaseStatus";
import bagIcon from "../../assets/icon/bag.png";
import HorizontalProductList from "./HorizontalProductList";
import SeparateView from "./SeparateView";
import heartIcon from "../../assets/icon/heart.png";
import clockIcon from "../../assets/icon/clock.png";
import starIcon from "../../assets/icon/star.png";
import profileIcon from "../../assets/icon/profile.png";
import { useNavigation } from "@react-navigation/native";
import BottomNavigator from "../Navigator/BottomNavigator";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EDIT_INFO_SCREEN, SHOP_SCREEN, USER_ID } from "../../utils/const";
import { _getApi } from "../../utils/axios";
import { API_GET_USER } from "../../utils/api";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/userSlice";
import { selectShopByOwnerId } from "../../redux/shopSlice";

export default function MainUserScreen() {
  const userInfo = useSelector(selectCurrentUser);
  const userId = userInfo._id;

  const shop = useSelector((state) => {
    return selectShopByOwnerId(state, userId);
  });
  const shopId = shop?._id;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <BottomNavigator height={90} currentActive={"User"} />
      <ScrollView>
        <HeaderUser
          username={userInfo?.name ? userInfo.name : userInfo?.username}
          avatar={userInfo?.avatar ? userInfo.avatar : null}
        />
        <SeparateView />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BillStatus");
          }}
        >
          <UserOptionTag
            sourceIcon={record}
            title={"Đơn mua"}
            description={"Xem lịch sử mua hàng"}
          />
        </TouchableOpacity>
        <PurchaseStatus />
        <SeparateView />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BuyAgain");
          }}
        >
          <UserOptionTag
            sourceIcon={bagIcon}
            title={"Mua lại"}
            description={"Xem thêm sản phẩm"}
          />
        </TouchableOpacity>
        <SeparateView />
        {shop ? (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(SHOP_SCREEN, { shopId: shop._id });
              }}
            >
              <UserOptionTag
                sourceIcon={store}
                highlight={true}
                title={"Cửa hàng của bạn"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProductManager", { shopId });
              }}
            >
              <UserOptionTag
                sourceIcon={require("../../assets/icon/manage.png")}
                highlight={true}
                title={"Quản lý sản phẩm"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("orderManager");
              }}
            >
              <UserOptionTag
                sourceIcon={require("../../assets/icon/orderManagement.png")}
                highlight={true}
                title={"Quản lý đơn hàng"}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterSeller");
            }}
          >
            <UserOptionTag
              sourceIcon={store}
              highlight={true}
              title={"Bắt đầu bán"}
              description={"Đăng ký miễn phí"}
            />
          </TouchableOpacity>
        )}
        <SeparateView />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LikedProduct");
          }}
        >
          <UserOptionTag
            sourceIcon={heartIcon}
            title={"Đã thích"}
            description={"1 Like"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RecentlyView");
          }}
        >
          <UserOptionTag sourceIcon={clockIcon} title={"Đã xem gần đây"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyReview");
          }}
        >
          <UserOptionTag sourceIcon={starIcon} title={"Đánh giá của tôi"} />
        </TouchableOpacity>
        <SeparateView />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(EDIT_INFO_SCREEN);
          }}
        >
          <UserOptionTag
            sourceIcon={profileIcon}
            title={"Thiết lập tài khoản"}
          />
        </TouchableOpacity>
        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
