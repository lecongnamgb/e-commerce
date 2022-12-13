import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import { useDispatch } from "react-redux";
import { createFeedback } from "../redux/feedBackSlice";
import { NOTI } from "../utils/const";

export default function ProductReview({ route }) {
  const products = route.params.products || [];
  const [numberOfStars, setNumberOfStars] = useState(5);
  const [review, setReview] = useState("");
  const [activePrd, setActivePrd] = useState(0);

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <Header title={"Đánh giá sản phẩm"} canBack={true} />
      {products.map((prd, index) => {
        return (
          <TouchableOpacity
            style={[
              { padding: 10 },
              styles.flex_row,
              styles.hr_light_bottom,
              index === activePrd ? styles.highlight_prd : null,
            ]}
            onPress={() => {
              setActivePrd(index);
            }}
          >
            <Image
              source={{ uri: prd.product.avatar }}
              style={styles.img_40x40}
            />
            <Text
              style={{ marginLeft: 10, top: 10, width: "80%" }}
              numberOfLines={1}
            >
              {prd.product.name}
            </Text>
          </TouchableOpacity>
        );
      })}
      <View
        style={[
          styles.flex_row,
          styles.alignCenterItem,
          styles.alignCenterItemVertically,
          { marginTop: 30, marginBottom: 30 },
        ]}
      >
        <TouchableOpacity
          style={[styles.ml_5, styles.mr_5]}
          activeOpacity={1}
          onPress={() => {
            setNumberOfStars(1);
          }}
        >
          <Image
            source={
              numberOfStars >= 1
                ? require("../assets/icon/1star.png")
                : require("../assets/icon/noneStar.png")
            }
            style={styles.img_32x32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.ml_5, styles.mr_5]}
          activeOpacity={1}
          onPress={() => {
            setNumberOfStars(2);
          }}
        >
          <Image
            source={
              numberOfStars >= 2
                ? require("../assets/icon/1star.png")
                : require("../assets/icon/noneStar.png")
            }
            style={styles.img_32x32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.ml_5, styles.mr_5]}
          activeOpacity={1}
          onPress={() => {
            setNumberOfStars(3);
          }}
        >
          <Image
            source={
              numberOfStars >= 3
                ? require("../assets/icon/1star.png")
                : require("../assets/icon/noneStar.png")
            }
            style={styles.img_32x32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.ml_5, styles.mr_5]}
          activeOpacity={1}
          onPress={() => {
            setNumberOfStars(4);
          }}
        >
          <Image
            source={
              numberOfStars >= 4
                ? require("../assets/icon/1star.png")
                : require("../assets/icon/noneStar.png")
            }
            style={styles.img_32x32}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.ml_5, styles.mr_5]}
          activeOpacity={1}
          onPress={() => {
            setNumberOfStars(5);
          }}
        >
          <Image
            source={
              numberOfStars >= 5
                ? require("../assets/icon/1star.png")
                : require("../assets/icon/noneStar.png")
            }
            style={styles.img_32x32}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          placeholder="Hãy chia sẻ những điều bạn thích về sản phẩm này nhé"
          style={{
            backgroundColor: "#f2f2f2",
            height: 150,
            marginLeft: 20,
            marginRight: 20,
            padding: 10,
            paddingTop: 10,
            fontSize: 16,
          }}
          multiline={true}
          value={review}
          onChangeText={(txt) => setReview(txt)}
        />
      </View>
      <TouchableOpacity
        style={[
          {
            marginLeft: 40,
            marginTop: 20,
            marginRight: 40,
            backgroundColor: "#66b3ff",
            borderRadius: 10,
            height: 30,
          },
          styles.alignCenterItem,
          styles.alignCenterItemVertically,
        ]}
        onPress={() => {
          const data = {
            comment: review,
            numberStar: numberOfStars,
            productId: products[activePrd].product._id,
          };
          dispatch(createFeedback(data));
          Alert.alert(NOTI, "Thêm bình luận thành công");
        }}
      >
        <Text style={{ color: "#fff" }}>Lưu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
