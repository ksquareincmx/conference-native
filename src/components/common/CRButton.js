"use-strict";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const CRButton = props => {
  return (
    <View style={styles.buttonStyle}>
      <TouchableOpacity>
        <Text style={styles.textStyle}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "stretch",
    backgroundColor: "red",
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
      color: 'white',
      fontSize: 18
  }
});

export { CRButton };
