import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import FieldWithUpperLabel from "../components/checkInComponents/FieldWithUpperLabel";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import SeparateView from "../components/userComponents/SeparateView";
import UserOptionTag from "../components/userComponents/UserOptionTag";
import { Picker } from "@react-native-picker/picker";
import { takePhotoAndUpload } from "../utils/helperFnc";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, selectProductById } from "../redux/productSlice";
import { selectShopById, selectShopByOwnerId } from "../redux/shopSlice";
import { NOTI, PRODUCT_MANAGER_SCREEN } from "../utils/const";
import { useNavigation } from "@react-navigation/native";
import { selectCurrentUser } from "../redux/userSlice";

export default function EditProductInfo({ route }) {
  const userId = useSelector(selectCurrentUser)._id;
  const shopId = useSelector((state) => selectShopByOwnerId(state, userId))._id;

  const productId = route.params.productId;
  const product =
    useSelector((state) => selectProductById(state, productId)) || {};

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [productName, setProductName] = useState(product.name);
  const [price, setPrice] = useState(Number(product.standardPrice));
  const [uriProductAvt, setUriProductAvt] = useState(product.avatar);
  const [uriProductImg1, setUriProductImg1] = useState(
    route.params?.uriProductImg1
  );
  const [uriProductImg2, setUriProductImg2] = useState(
    route.params?.uriProductImg2
  );
  const [uriProductImg3, setUriProductImg3] = useState(
    route.params?.uriProductImg3
  );
  const [description, setDescription] = useState(route.params?.description);
  const [origin, setOrigin] = useState(route.params?.origin);
  const [openCategory, setOpenCategory] = useState(false);
  const [quantityInInventory, setQuantityInInventory] = useState(
    route.params?.quantityInInventory
  );
  const listCategory = [
    {
      id: 2,
      title: "Quần áo nam",
    },
    {
      id: 3,
      title: "Quần áo nữ",
    },
    {
      id: 4,
      title: "Nhà cửa & đời sống",
    },
    {
      id: 5,
      title: "Đồ chơi",
    },
    {
      id: 6,
      title: "Sách",
    },
    {
      id: 7,
      title: "Thiết bị điện tử",
    },
    {
      id: 8,
      title: "Mỹ phẩm",
    },
    {
      id: 9,
      title: "Giày dép nam",
    },
    {
      id: 10,
      title: "Giày dép nữ",
    },
    {
      id: 11,
      title: "Phụ kiện",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <ScrollView style={{ height: "100%", backgroundColor: "#fff" }}>
        <Header title={route.params.title} canBack={true} />
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Tên sản phẩm"}
            plhdTitle={"Tên sản phẩm"}
            value={productName}
            onChangeText={(txt) => setProductName(txt)}
          />
        </View>
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Giá sản phẩm"}
            plhdTitle={"Giá"}
            value={price}
            keyboardType={"numeric"}
            onChangeText={(txt) => setPrice(txt.replace(/[^0-9]/g, ""))}
          />
        </View>
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Ảnh đại diện sản phẩm"}
            chooseImage={true}
            sourceImage={uriProductAvt}
            onPress={async () => {
              const url = await takePhotoAndUpload();
              setUriProductAvt(url);
            }}
          />
        </View>
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Số lượng trong kho"}
            plhdTitle={"Số lượng"}
            value={quantityInInventory}
            keyboardType={"numeric"}
            onChangeText={(txt) =>
              setQuantityInInventory(txt.replace(/[^0-9]/g, ""))
            }
          />
        </View>
        <TouchableOpacity
          style={[styles.p_10, styles.flex_row, styles.hr_light_bottom]}
          onPress={() => {
            setOpenCategory(true);
          }}
        >
          <View
            style={[styles.alignCenterItem, styles.alignCenterItemVertically]}
          >
            <Text>Danh mục hàng</Text>
          </View>
          <View style={{ width: "75%", alignItems: "flex-end" }}>
            <View
              style={[
                styles.alignCenterItem,
                styles.alignCenterItemVertically,
                styles.flex_row,
              ]}
            >
              <Text
                style={selectedCategory == "" ? { color: "#8c8c8c" } : null}
              >
                {selectedCategory == "" ? "Quần áo nam" : selectedCategory}
              </Text>
              <Image
                source={require("../assets/icon/right_arrow.png")}
                style={styles.img_24x24}
              />
            </View>
          </View>
        </TouchableOpacity>
        {/* <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Xuất sứ sản phẩm"}
            plhdTitle={"Xuất sứ"}
            value={origin}
            onChangeText={(txt) => setOrigin(txt)}
          />
        </View> */}
        <SeparateView />
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Link ảnh phụ 1"}
            chooseImage={true}
            sourceImage={uriProductImg1}
            onPress={async () => {
              const url = await takePhotoAndUpload();
              setUriProductImg1(url);
            }}
          />
        </View>
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Link ảnh phụ 2"}
            sourceImage={uriProductImg2}
            chooseImage={true}
            onPress={async () => {
              const url = await takePhotoAndUpload();
              setUriProductImg2(url);
            }}
          />
        </View>
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Link ảnh phụ 3"}
            chooseImage={true}
            sourceImage={uriProductImg3}
            onPress={async () => {
              const url = await takePhotoAndUpload();
              setUriProductImg3(url);
            }}
          />
        </View>
        <SeparateView />
        <View>
          <TextInput
            style={{
              backgroundColor: "#f2f2f2",
              height: 150,
              margin: 10,
              paddingLeft: 10,
              paddingTop: 10,
            }}
            placeholder={"Mô tả sản phẩm"}
            multiline={true}
            value={description}
            onChangeText={(txt) => setDescription(txt)}
          />
        </View>
        <TouchableOpacity
          disabled={
            !(productName && price && uriProductAvt && quantityInInventory)
          }
          style={[
            {
              marginLeft: 20,
              marginTop: 20,
              marginRight: 20,
              backgroundColor: "#66b3ff",
              borderRadius: 10,
              height: 30,
            },
            styles.alignCenterItem,
            styles.alignCenterItemVertically,
            !(productName && price && uriProductAvt && quantityInInventory)
              ? { backgroundColor: "#ced9e3" }
              : null,
          ]}
          onPress={() => {
            try {
              const uriArr = [uriProductImg1, uriProductImg2, uriProductImg3];
              const img = [];
              for (let i = 0; i < img.length; i++) {
                if (uriArr[i]) {
                  img.push(uriArr[i]);
                }
              }
              const data = {
                name: productName,
                category: selectedCategory,
                description: description,
                standardPrice: price,
                shopId,
                quantityInInventory,
                avatar: uriProductAvt,
                img: [...img],
              };

              dispatch(createProduct(data));

              Alert.alert(NOTI, "Thêm sản phẩm thành công");
              navigation.navigate(PRODUCT_MANAGER_SCREEN, { shopId });
            } catch (err) {
              Alert.alert("Oops!", err.message);
            }
          }}
        >
          <Text style={{ color: "#fff" }}>Lưu</Text>
        </TouchableOpacity>
        {openCategory ? (
          <View
            style={{
              borderTopColor: "#ccc",
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "#fff",
              borderTopWidth: 1,
              paddingTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setOpenCategory(false);
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
              style={{ marginBottom: 120 }}
              selectedValue={selectedCategory}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedCategory(itemValue);
              }}
            >
              {listCategory.map((item) => (
                <Picker.Item
                  key={item.id}
                  label={item.title}
                  value={item.title}
                />
              ))}
            </Picker>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
