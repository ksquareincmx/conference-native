"use-strict";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const CRHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conference Status</Text>
      <Text style={styles.text}>10:30pm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DC3343",
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: "white"
  }
});

export { CRHeader };
