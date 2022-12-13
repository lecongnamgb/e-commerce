import { View, Text } from "react-native";
import React from "react";
import Evaluation from "./Evaluation";
import HeaderEvaluation from "./HeaderEvaluation";

export default function BriefEvaluation(props) {
  const { feedbacks } = props;
  return (
    <View>
      <HeaderEvaluation
        productId={feedbacks[0]?.product?._id}
        totalRating={feedbacks[0]?.product?.totalRatingStar || 0}
        numberOfFeedbacks={feedbacks?.length || 0}
      />
      {feedbacks.map((feedback) => (
        <Evaluation key={feedback._id} evaluation={feedback} />
      ))}
    </View>
  );
}
