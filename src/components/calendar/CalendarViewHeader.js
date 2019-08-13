import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const imageUri = require("src/images/image_placeholder_png.png");

const CalendarViewHeader = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageUri} />
      </View>
      <Text style={styles.text}>Week</Text>
    </View>
  );
};

const imageSize = 50;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  imageContainer: {
    margin: 12
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  },
  text: {
    fontSize: 18,
    marginLeft: 8
  }
});

export default CalendarViewHeader;
