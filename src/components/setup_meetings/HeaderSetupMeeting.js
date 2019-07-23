"use-strict";
import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image
} from "react-native";
import { CRButton } from "../common"
const imageSource = require("../../images/image_placeholder_png.png");

const imageSize = 50;

class HeaderSetupMeeting extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageSource} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.roomNameText}>Stark Room</Text>
          <Text style={styles.statusText}>On Appointment</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CRButton>Save</CRButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row"
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  infoContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "baseline"
  },
  buttonContainer: {
    flex: 3,
    padding: 14
  },
  roomNameText: {
    fontSize: 24
  },
  statusText: {
    color: "red"
  }
});

export default HeaderSetupMeeting;
