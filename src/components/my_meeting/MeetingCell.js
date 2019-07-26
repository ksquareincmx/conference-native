"use-strict";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Card } from "src/components/common";

class MeetingCell extends Component {
  render() {
    return (
      <Card>
        <View style={styles.container}>
          <View style={styles.leftView}>
            <View style={styles.availableContainer}>
              <View style={styles.availableDot} />
              <Text style={styles.availableText}>Available</Text>
            </View>
            <Text style={styles.roomNameText}>Stark Room</Text>
            <Text style={styles.infoText}>Next Meeting 4:30pm to 5pm</Text>
            <TouchableOpacity onPress={this.props.onPress}>
              <Text style={styles.appointButton}>Appoint</Text>
            </TouchableOpacity>
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
  availableDot: {
    backgroundColor: "green",
    width: dotSize,
    height: dotSize,
    borderRadius: dotSize / 2
  },
  image: {
    width: 70,
    height: 50
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
  availableText: {
    fontSize: 16,
    paddingLeft: 6
  },
  roomNameText: {
    fontSize: 20
  },
  infoText: {
    fontSize: 14
  },
  appointButton: {
    fontSize: 18,
    color: "red"
  }
});

export default MeetingCell;
