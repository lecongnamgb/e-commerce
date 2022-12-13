import {
  SafeAreaView,
  FlatList,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/notiComponents/Header";
import styles from "../components/styles";
import Evaluation from "../components/productComponents/Evaluation";
import StarCategory from "../components/productComponents/StarCategory";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFeedbackByProductId } from "../redux/feedBackSlice";

export default function EvaluationScreen({ route }) {
  const productId = route.params?.productId;
  const feedbacks =
    useSelector((state) => selectFeedbackByProductId(state, productId)) || [];

  const [ratingData, setRatingData] = useState([
    {
      id: 1,
      stars: 5,
      numberOfVoting:
        feedbacks.filter((feedback) => feedback.numberStar === 5).length || 0,
      active: true,
      feedbacks:
        feedbacks.filter((feedback) => feedback.numberStar === 5) || [],
    },
    {
      id: 2,
      stars: 4,
      numberOfVoting:
        feedbacks.filter((feedback) => feedback.numberStar === 4).length || 0,
      active: false,
      feedbacks:
        feedbacks.filter((feedback) => feedback.numberStar === 4) || [],
    },
    {
      id: 3,
      stars: 3,
      numberOfVoting:
        feedbacks.filter((feedback) => feedback.numberStar === 3).length || 0,
      active: false,
      feedbacks:
        feedbacks.filter((feedback) => feedback.numberStar === 3) || [],
    },
    {
      id: 4,
      stars: 2,
      numberOfVoting:
        feedbacks.filter((feedback) => feedback.numberStar === 2).length || 0,
      active: false,
      feedbacks:
        feedbacks.filter((feedback) => feedback.numberStar === 2) || [],
    },
    {
      id: 5,
      stars: 1,
      numberOfVoting:
        feedbacks.filter((feedback) => feedback.numberStar === 1).length || 0,
      active: false,
      feedbacks:
        feedbacks.filter((feedback) => feedback.numberStar === 1) || [],
    },
  ]);
  const [fbs, setFbs] = useState(
    feedbacks.filter((feedback) => feedback.numberStar === 5) || []
  );
  return (
    <SafeAreaView style={styles.bg_white}>
      <Header title={"Đánh giá"} canBack={true} />
      <ScrollView>
        <View
          style={[
            styles.flex_row,
            styles.pb_10,
            styles.pt_10,
            styles.hr_bottom,
          ]}
        >
          {ratingData.map((item, index) => (
            <TouchableOpacity
              activeOpacity={1}
              key={index}
              onPress={() => {
                setRatingData(
                  ratingData.map((subItem, subIndex) => {
                    if (subIndex != index) {
                      return { ...subItem, active: false };
                    } else {
                      setFbs(subItem.feedbacks);
                      return { ...subItem, active: true };
                    }
                  })
                );
              }}
            >
              <StarCategory rating={item} />
            </TouchableOpacity>
          ))}
        </View>
        {fbs.map((item, index) => (
          <Evaluation evaluation={item} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
