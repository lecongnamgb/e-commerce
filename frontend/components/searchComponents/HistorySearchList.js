import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { selectAllSuggester } from "../../redux/suggesterSlice";
import HistorySearchItem from "./HistorySearchItem";

export default function HistorySearchList() {
  const [showMore, setShowMore] = useState(false);

  const dumpData = useSelector(selectAllSuggester);
  console.log("dump:", dumpData);

  return (
    <ScrollView>
      {dumpData.map((item, index) => (
        <HistorySearchItem title={item.title} key={index} />
      ))}
    </ScrollView>
  );
}
