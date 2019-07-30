"use-strict";
import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { CRHeader } from "src/components/common";
import MeetingCell from "src/components/my_meeting/MeetingCell";

const cellWidth = Dimensions.get("window").width;
const data = [
  { id: "0", title: "hola" },
  { id: "1", title: "Hola" },
  { id: "2", title: "Hola" },
  { id: "3", title: "Hola" }
];

const HomeMyMeetings = () => {
  return (
    <View style={styles.main}>
      <CRHeader leftText="Profile" />
      <FlatList data={data} renderItem={Item} keyExtractor={item => item.id} />
    </View>
  );
};

const Item = ({ item }) => (
  <View style={{ width: cellWidth, height: cellWidth * 0.5, padding: 5 }}>
    <MeetingCell text={item.title} />
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FFDADB"
  }
});

export default HomeMyMeetings;
