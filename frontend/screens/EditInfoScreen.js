import AsyncStorage from "@react-native-async-storage/async-storage";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import SeparateView from "../components/userComponents/SeparateView";
import UserOptionTag from "../components/userComponents/UserOptionTag";
import {
  editUserInfo,
  fetchUserInfo,
  selectCurrentUser,
} from "../redux/userSlice";
import {
  EDIT_ADDRESS_SCREEN,
  EDIT_NAME_SCREEN,
  EDIT_PASSWORD_SCREEN,
  EDIT_PHONE_NUMBER_SCREEN,
  LOGIN_SCREEN,
  USER_ID,
} from "../utils/const";
import * as ImagePicker from "expo-image-picker";
import { _uploadApi } from "../utils/axios";
import { API_UPLOAD } from "../utils/api";
import axios from "axios";

export default function EditInfoScreen(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  const userInfo = useSelector(selectCurrentUser);

  const navigation = useNavigation();

  const [openDob, setOpenDob] = useState(false);
  const [selectedGender, setSelectedGender] = useState();
  const [date, setDate] = useState();
  const [openGender, setOpenGender] = useState(false);
  const [dob, setDob] = useState(userInfo.dob ? userInfo.dob : null);
  const [gender, setGender] = useState(userInfo.gender);

  // const createFormData = (photo, body = {}) => {
  //   const data = new FormData();

  //   data.append("photo", {
  //     name: photo.fileName,
  //     type: photo.type,
  //     uri: photo.uri.replace("file://", ""),
  //   });

  //   Object.keys(body).forEach((key) => {
  //     data.append(key, body[key]);
  //   });

  //   return data;
  // };

  // const [image, setImage] = useState(null);

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.canceled) {
  //     console.log("result:", result.uri);
  //     // const response = await _uploadApi(API_UPLOAD, { data: result });
  //     const formData = new FormData();
  //     const body = createFormData(response, { userId: 1 });
  //     formData.append()

  //     const response = await _uploadApi(API_UPLOAD, { file: body });
  //     console.log(response);
  //   }
  // };

  const [photo, setPhoto] = React.useState(null);
  const [photoShow, setPhotoShow] = React.useState(null);

  const takePhotoAndUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result.uri);
      let localUri = result.uri.replace("file://", "");
      setPhotoShow(localUri);
      let filename = localUri.split("/").pop();
      console.log(filename);

      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      let formData = new FormData();
      formData.append("photo", { uri: localUri, name: filename, type });

      console.log(formData);

      await axios
        .post("http://localhost:8000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setPhoto(res.data.photo.photo);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <SafeAreaView style={[{ backgroundColor: "#fff", height: "100%" }]}>
      <Header title={"Sửa hồ sơ"} canBack={true} />
      <TouchableOpacity
        style={[
          { height: 150, backgroundColor: "#99ddff" },
          styles.alignCenterItem,
          styles.alignCenterItemVertically,
        ]}
        onPress={takePhotoAndUpload}
      >
        <Image
          source={require("../assets/icon/user.png")}
          style={styles.img_64x64}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(EDIT_NAME_SCREEN, { name: userInfo.name });
        }}
      >
        <UserOptionTag
          title={"Tên"}
          description={userInfo.name == null ? null : userInfo.name}
          containIcon={false}
        />
      </TouchableOpacity>
      <UserOptionTag
        title={"Tên đăng nhập"}
        description={userInfo.username}
        containIcon={false}
        containRightArrow={false}
      />
      <SeparateView />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setOpenDob(false);
          setOpenGender(true);
        }}
      >
        <UserOptionTag
          title={"Giới tính"}
          description={gender}
          containIcon={false}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setOpenGender(false);
          setOpenDob(true);
        }}
        activeOpacity={1}
      >
        <UserOptionTag
          title={"Ngày sinh"}
          description={dob}
          containIcon={false}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(EDIT_PHONE_NUMBER_SCREEN, {
            phoneNumber: userInfo.phoneNumber,
          });
        }}
      >
        <UserOptionTag
          title={"Số điện thoại"}
          description={
            userInfo.phoneNumber == null ? null : userInfo.phoneNumber
          }
          containIcon={false}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(EDIT_ADDRESS_SCREEN, {
            address: userInfo.address,
          });
        }}
      >
        <UserOptionTag
          title={"Địa chỉ"}
          description={userInfo.address == null ? null : userInfo.address}
          containIcon={false}
        />
      </TouchableOpacity>
      <SeparateView />
      <TouchableOpacity
        style={styles.hr_bottom}
        onPress={() => {
          navigation.navigate(EDIT_PASSWORD_SCREEN);
        }}
      >
        <UserOptionTag title={"Thay đổi mật khẩu"} containIcon={false} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.alignCenterItem,
          styles.alignCenterItemVertically,
          { height: 40, backgroundColor: "#ff6600", margin: 20 },
        ]}
        onPress={() => {
          AsyncStorage.clear();

          navigation.navigate(LOGIN_SCREEN);
        }}
      >
        <View>
          <Text style={{ fontSize: 16, color: "#fff" }}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
      {openDob ? (
        <View
          style={{ borderTopColor: "#ccc", borderTopWidth: 1, paddingTop: 10 }}
        >
          <TouchableOpacity
            onPress={() => {
              // dispatch(
              //   editUserInfo({ date: date.toLocaleDateString("vi-VN") })
              // );
              // console.log(dob);
              dispatch(
                editUserInfo({
                  dob:
                    date?.toLocaleDateString("vi-VN") ||
                    new Date().toLocaleDateString("vi-VN"),
                })
              );
              setOpenDob(false);
              setDob(
                date?.toLocaleDateString("vi-VN") ||
                  new Date().toLocaleDateString("vi-VN")
              );
            }}
            style={{ alignItems: "flex-end" }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#3399ff",
                paddingRight: 10,
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
          <RNDateTimePicker
            mode="date"
            value={date || new Date()}
            dateFormat={"day month year"}
            onChange={(event, date) => {
              setDate(date);
            }}
            display={"spinner"}
          />
        </View>
      ) : null}
      {openGender ? (
        <View
          style={{ borderTopColor: "#ccc", borderTopWidth: 1, paddingTop: 10 }}
        >
          <TouchableOpacity
            onPress={() => {
              dispatch(editUserInfo({ gender: gender }));
              setOpenGender(false);
              setGender(selectedGender);
            }}
            style={{ alignItems: "flex-end" }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#3399ff",
                paddingRight: 10,
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
          <Picker
            selectedValue={gender}
            onValueChange={async (itemValue, itemIndex) => {
              const userId = await AsyncStorage.getItem(USER_ID);
              // await _patchApi(`${API_GET_USER}/${userId}`, {
              //   gender: itemValue,
              // });
              setGender(itemValue);
              setSelectedGender(itemValue);
            }}
          >
            <Picker.Item label="Nam" value={"Nam"} />
            <Picker.Item label="Nữ" value={"Nữ"} />
            <Picker.Item label="Khác" value={"Khác"} />
          </Picker>
        </View>
      ) : null}
    </SafeAreaView>
  );
}
