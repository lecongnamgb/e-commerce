import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FilterItem from "../components/billStatusComponents/FilterItem";
import ItemStatus from "../components/billStatusComponents/ItemStatus";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import SeparateView from "../components/userComponents/SeparateView";
import {
  selectCanceledOrder,
  selectDeliveredOrder,
  selectWaitingOrder,
  updateOrder,
  selectDeliveringOrder,
} from "../redux/orderSlice";
import { NOTI, STATE_CANCELED } from "../utils/const";
import { updateShopOrder } from "../redux/shopOrderSlice";

export default function BillStatus({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const waitingOrders = useSelector((state) => selectWaitingOrder(state));
  const deliveringOrders = useSelector((state) => selectDeliveringOrder(state));
  const deliveredOrders = useSelector((state) => selectDeliveredOrder(state));
  const canceledOrders = useSelector((state) => selectCanceledOrder(state));

  console.log("delivering:", deliveringOrders);

  const [listCategory, setListCategory] = useState([
    {
      id: 0,
      title: "Chờ lấy hàng",
      active:
        route.params?.activePage == "Chờ lấy hàng" ||
        route.params?.activePage === undefined
          ? true
          : false,
      prd: waitingOrders,
    },
    {
      id: 1,
      title: "Đang giao",
      active: route.params?.activePage == "Đang giao" ? true : false,
      prd: deliveringOrders,
    },
    {
      id: 2,
      title: "Đã giao",
      active: route.params?.activePage == "Đã giao" ? true : false,
      prd: deliveredOrders,
    },
    {
      id: 3,
      title: "Đã huỷ",
      active: route.params?.activePage == "Đã huỷ" ? true : false,
      prd: canceledOrders,
    },
  ]);
  const activeCate = listCategory.find((cate) => cate.active == true);

  const [listData, setListData] = useState(activeCate.prd);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Header title={"Đơn mua"} canBack={true} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {listCategory.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() => {
              setListData(item.prd);
              setListCategory(
                listCategory.map((subItem, subIndex) => {
                  if (index == subIndex) {
                    return { ...subItem, active: true };
                  } else {
                    return { ...subItem, active: false };
                  }
                })
              );
            }}
          >
            <FilterItem
              title={item.title}
              active={item.active}
              pl={20}
              pr={21}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <ScrollView>
        <SeparateView />
        {listData.map((item, index) => (
          <ItemStatus
            key={item._id}
            state={item.state}
            products={item.products}
            handlePress={() => {
              navigation.navigate("Review", { products: item.products });
            }}
            handleCancel={() => {
              Alert.alert(
                "Cảnh báo",
                "Bạn có chắc chắn muốn huỷ đơn hàng này không ?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => {
                      const data = { state: STATE_CANCELED, _id: item._id };
                      dispatch(updateOrder(data));
                      dispatch(updateShopOrder(data));
                      navigation.goBack();
                      Alert.alert(NOTI, "Huỷ đơn hàng thành công!");
                    },
                  },
                ]
              );
            }}
          />
        ))}
        <View
          style={[
            styles.alignCenterItem,
            styles.alignCenterItemVertically,
            { backgroundColor: "#f2f2f2" },
          ]}
        >
          {listData.length == 0 ? <Text>Không có sản phẩm nào</Text> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
