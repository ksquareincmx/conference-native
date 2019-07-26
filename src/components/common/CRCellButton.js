"use-strict";
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class CRCellButton extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity>
          <Text>Accept</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

export { CRCellButton };
