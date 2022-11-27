import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import bell_icon from "../../assets/icon/bell.png";
import bell_active_icon from "../../assets/icon/bell_active.png";
import home_icon from "../../assets/icon/home.png";
import home_active_icon from "../../assets/icon/home_active.png";
import userscreen_icon from "../../assets/icon/userscreen.png";
import userscreen_active_icon from "../../assets/icon/userscreen_active.png";
import { API_GET_LIST_NOTI_BY_USERID } from "../../utils/api";
import { handleRefreshToken, _getApi } from "../../utils/axios";
import ItemNavigator from "../bottomNavigatorComponents/ItemNavigator";
import styles from "../styles";

export default function BottomNavigator(props) {
  const [numOfNoti, setNumOfNoti] = useState(0);

  useEffect(async () => {
    try {
      const response = await _getApi(API_GET_LIST_NOTI_BY_USERID);
      setNumOfNoti(response.data.length);
    } catch (err) {
      console.log(err);
      // if (err.message === "Unauthorized") {
      //   handleRefreshToken();
      //   const response = await _getApi(API_GET_LIST_NOTI_BY_USERID);
      //   setNumOfNoti(response.data.length);
      // }
      Alert.alert("Oops!", "Invalid access token");
    }
  }, []);
  return (
    <View
      style={[
        {
          height: props.height,
          width: "100%",
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
        },
        styles.hr_top,
      ]}
    >
      <View style={styles.flex_row}>
        <ItemNavigator
          pageOnClick={"Home"}
          title={"Home"}
          icon_active={home_active_icon}
          icon_unactive={home_icon}
          numOfNoti={0}
          isActive={props.currentActive === "Home" ? true : false}
        />
        <ItemNavigator
          pageOnClick={"NotiMain"}
          title={"Thông báo"}
          icon_active={bell_active_icon}
          icon_unactive={bell_icon}
          numOfNoti={numOfNoti}
          isActive={props.currentActive === "Noti" ? true : false}
        />
        <ItemNavigator
          pageOnClick={"User"}
          title={"Tôi"}
          icon_active={userscreen_active_icon}
          icon_unactive={userscreen_icon}
          numOfNoti={0}
          isActive={props.currentActive === "User" ? true : false}
        />
      </View>
    </View>
  );
}
