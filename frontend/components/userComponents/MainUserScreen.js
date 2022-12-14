import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import bagIcon from "../../assets/icon/bag.png";
import heartIcon from "../../assets/icon/heart.png";
import record from "../../assets/icon/icon_record.png";
import profileIcon from "../../assets/icon/profile.png";
import starIcon from "../../assets/icon/star.png";
import store from "../../assets/icon/store.png";
import { selectMyOrder } from "../../redux/orderSlice";
import { fetchShopOrders } from "../../redux/shopOrderSlice";
import { selectShopByOwnerId } from "../../redux/shopSlice";
import { selectCurrentUser } from "../../redux/userSlice";
import { EDIT_INFO_SCREEN, SHOP_SCREEN } from "../../utils/const";
import BottomNavigator from "../Navigator/BottomNavigator";
import HeaderUser from "./HeaderUser";
import PurchaseStatus from "./PurchaseStatus";
import SeparateView from "./SeparateView";
import UserOptionTag from "./UserOptionTag";

export default function MainUserScreen() {
  const userInfo = useSelector(selectCurrentUser);
  const userId = userInfo._id;

  const shop = useSelector((state) => selectShopByOwnerId(state, userId));
  const shopId = shop?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (shopId) {
      dispatch(fetchShopOrders(shopId));
    }
  }, []);

  const navigation = useNavigation();
  console.log("userInfo:", userInfo);

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
            title={"????n mua"}
            description={"Xem l???ch s??? mua h??ng"}
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
            title={"Mua l???i"}
            description={"Xem th??m s???n ph???m"}
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
                title={"C???a h??ng c???a b???n"}
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
                title={"Qu???n l?? s???n ph???m"}
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
                title={"Qu???n l?? ????n h??ng"}
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
              title={"B???t ?????u b??n"}
              description={"????ng k?? mi???n ph??"}
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
            title={"???? th??ch"}
            description={`${userInfo.favoriteProductIds?.length || 0} Like`}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("RecentlyView");
          }}
        >
          <UserOptionTag sourceIcon={clockIcon} title={"???? xem g???n ????y"} />
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MyReview");
          }}
        >
          <UserOptionTag sourceIcon={starIcon} title={"????nh gi?? c???a t??i"} />
        </TouchableOpacity>
        <SeparateView />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(EDIT_INFO_SCREEN);
          }}
        >
          <UserOptionTag
            sourceIcon={profileIcon}
            title={"Thi???t l???p t??i kho???n"}
          />
        </TouchableOpacity>
        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
