import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FieldWithUpperLabel from "../components/checkInComponents/FieldWithUpperLabel";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import SeparateView from "../components/userComponents/SeparateView";
import {
  createProduct,
  selectProductById,
  updateProduct,
} from "../redux/productSlice";
import { selectShopByOwnerId } from "../redux/shopSlice";
import { selectCurrentUser } from "../redux/userSlice";
import {
  ADD_PRODUCT_TITLE,
  NOTI,
  PRODUCT_MANAGER_SCREEN,
} from "../utils/const";
import { takePhotoAndUpload } from "../utils/helperFnc";

export default function EditProductInfo({ route }) {
  const userId = useSelector(selectCurrentUser)._id;
  const shopId = useSelector((state) => selectShopByOwnerId(state, userId))._id;

  const productId = route.params.productId;
  const product = productId
    ? useSelector((state) => selectProductById(state, productId))
    : {};

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [productName, setProductName] = useState(product.name);
  const [price, setPrice] = useState(product.standardPrice?.toString());
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
  const [description, setDescription] = useState(product.description);
  const [origin, setOrigin] = useState(product.location);
  const [openCategory, setOpenCategory] = useState(false);
  const [quantityInInventory, setQuantityInInventory] = useState(
    product.quantityInInventory?.toString()
  );
  const listCategory = [
    {
      id: 2,
      title: "Qu???n ??o nam",
    },
    {
      id: 3,
      title: "Qu???n ??o n???",
    },
    {
      id: 4,
      title: "Nh?? c???a & ?????i s???ng",
    },
    {
      id: 5,
      title: "????? ch??i",
    },
    {
      id: 6,
      title: "S??ch",
    },
    {
      id: 7,
      title: "Thi???t b??? ??i???n t???",
    },
    {
      id: 8,
      title: "M??? ph???m",
    },
    {
      id: 9,
      title: "Gi??y d??p nam",
    },
    {
      id: 10,
      title: "Gi??y d??p n???",
    },
    {
      id: 11,
      title: "Ph??? ki???n",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(
    product.category ? product.category : "Qu???n ??o nam"
  );
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <ScrollView style={{ height: "100%", backgroundColor: "#fff" }}>
        <Header title={route.params.title} canBack={true} />
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"T??n s???n ph???m"}
            plhdTitle={"T??n s???n ph???m"}
            value={productName}
            onChangeText={(txt) => setProductName(txt)}
          />
        </View>
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Gi?? s???n ph???m"}
            plhdTitle={"Gi??"}
            value={price}
            // keyboardType={"numeric"}
            onChangeText={(txt) => setPrice(txt)}
          />
        </View>
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"???nh ?????i di???n s???n ph???m"}
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
            label={"S??? l?????ng trong kho"}
            plhdTitle={"S??? l?????ng"}
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
            <Text>Danh m???c h??ng</Text>
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
                {selectedCategory == "" ? "Qu???n ??o nam" : selectedCategory}
              </Text>
              <Image
                source={require("../assets/icon/right_arrow.png")}
                style={styles.img_24x24}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Xu???t s??? s???n ph???m"}
            plhdTitle={"Xu???t s???"}
            value={origin}
            onChangeText={(txt) => setOrigin(txt)}
          />
        </View>
        <SeparateView />
        <View style={styles.hr_light_bottom}>
          <FieldWithUpperLabel
            label={"Link ???nh ph??? 1"}
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
            label={"Link ???nh ph??? 2"}
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
            label={"Link ???nh ph??? 3"}
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
            placeholder={"M?? t??? s???n ph???m"}
            multiline={true}
            value={description}
            onChangeText={(txt) => setDescription(txt)}
          />
        </View>
        <TouchableOpacity
          disabled={
            !(
              productName &&
              price &&
              uriProductAvt &&
              quantityInInventory &&
              origin
            )
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
            !(
              productName &&
              price &&
              uriProductAvt &&
              quantityInInventory &&
              origin
            )
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
                location: origin,
                salePrice: price,
                shopId,
              };
              if (route.params.title === ADD_PRODUCT_TITLE) {
                dispatch(createProduct(data));

                Alert.alert(NOTI, "Th??m s???n ph???m th??nh c??ng");
              } else {
                data.id = productId;
                dispatch(updateProduct(data));

                Alert.alert(NOTI, "Ch???nh s???a s???n ph???m th??nh c??ng");
              }
              navigation.navigate(PRODUCT_MANAGER_SCREEN, { shopId });
            } catch (err) {
              Alert.alert("Oops!", err.message);
            }
          }}
        >
          <Text style={{ color: "#fff" }}>L??u</Text>
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
