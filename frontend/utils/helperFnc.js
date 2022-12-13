import * as ImagePicker1 from "expo-image-picker";
import moment from "moment";
import { Alert } from "react-native";
import { API_UPLOAD } from "./api";
import { _uploadApi } from "./axios";

export const takePhotoAndUpload = async () => {
  try {
    const result = await ImagePicker1.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const localUri = result.uri.replace("file://", "");
      const filename = localUri.split("/").pop();

      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      const formData = new FormData();
      formData.append("file", { uri: localUri, name: filename, type });

      const response = await _uploadApi(API_UPLOAD, formData);
      return response.url;
    }
  } catch (err) {
    Alert(err.message);
  }
};

export const handlePrice = (number) => {
  const numberStr = String(number);
  let temp_price = [];
  for (let i = numberStr.length - 1; i >= 0; i--) {
    if ((numberStr.length - i) % 3 === 0 && i != 0) {
      temp_price.unshift(`.${numberStr.charAt(i)}`);
    } else {
      temp_price.unshift(numberStr.charAt(i));
    }
  }
  let ans = "";
  for (let i = 0; i < temp_price.length; i++) {
    ans += temp_price[i];
  }
  return ans;
};

export const formatDate = (dateString) =>
  moment(dateString).format("HH:mm DD/MM/YYYY");
