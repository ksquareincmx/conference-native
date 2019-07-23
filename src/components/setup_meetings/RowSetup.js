"use-strict";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const imageSize = 20;
const imageUri = require("../../images/image_placeholder_png.png");

const RowSetup = props => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.imageTitleContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageUri} />
        </View>
        <Text style={styles.title}>Date</Text>
      </View>
      <Text style={styles.text}>Abril 20</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  image: {
    width: imageSize,
    height: imageSize
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center"
  },
  imageTitleContainer: {
    flex: 8,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  title: {
      flex: 8,
      justifyContent: "center",
      alignItems: "center"
  },
  text: {
    flex: 8,
    justifyContent: "center"
  }
});

export default RowSetup;
