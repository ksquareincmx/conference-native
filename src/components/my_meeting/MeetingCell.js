"use-strict";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card, CRCellButton } from "src/components/common";

const imageRoute = require("src/images/image_placeholder_png.png");

class MeetingCell extends Component {
  render() {
    return (
      <Card>
        <View style={styles.container}>
          <View style={styles.leftView}>
            <View style={styles.textsContainer}>
              <Text style={styles.meetingNameText}>LMS Demo</Text>
              <Text style={styles.infoText}>
                Next Meeting 4:30pm to 5pm Next Meeting 4:30pm to 5pm Next
                Meeting 4:30pm to 5pm
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonLeftView}>
                <CRCellButton />
              </View>
              <View style={styles.buttonRightView}>
                <CRCellButton />
              </View>
            </View>
          </View>
          <View style={styles.rightView}>
            <Image style={styles.image} source={imageRoute} />
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    flex: 1,
    borderRadius: 15
  },
  availableContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-around",
    padding: 10
  },
  buttonLeftView: {
    flex: 1,
    padding: 8
  },
  buttonRightView: {
    flex: 1,
    padding: 8
  },
  image: {
    width: 70,
    height: 80
  },
  leftView: {
    flex: 8,
    justifyContent: "space-evenly",
    paddingLeft: 10
  },
  rightView: {
    flex: 2,
    padding: 20
  },
  textsContainer: {
    flex: 5,
    paddingLeft: 6,
    paddingTop: 10,
    justifyContent: "space-around"
  },
  meetingNameText: {
    fontSize: 22
  },
  infoText: {
    fontSize: 16
  },
  appointButton: {
    fontSize: 18,
    color: "red"
  }
});

export default MeetingCell;
