"use-strict";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const imageSize = 20;
const imageUri = require("src/images/image_placeholder_png.png");

const RowSetup = props => {
  const { imageUrl, title, text, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imageTitleContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={imageUrl ? imageUrl : imageUri}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title ? title : "Title"}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text ? text : "Info Text"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 8,
    flexDirection: "row"
  },
  container: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    width: imageSize,
    height: imageSize
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleContainer: {
    flex: 5,
    justifyContent: "center"
  },
  imageTitleContainer: {
    flex: 7,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  textContainer: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {},
  text: {
    
    textAlign: "center"
  }
});

export default RowSetup;
