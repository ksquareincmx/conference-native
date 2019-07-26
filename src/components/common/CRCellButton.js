"use-strict";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class CRCellButton extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Accept</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    borderRadius: 12
  },
  button: {
    alignItems: "center"
  },
  text: {
    color: "gray",
    fontSize: 18
  }
});

export { CRCellButton };
