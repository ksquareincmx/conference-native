"use-strict";
import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";

const LoginButton = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("src/images/LetterIcon.png")}
          />
        </View>
        <Text style={styles.textStyle}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  buttonStyle: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "stretch",
    backgroundColor: "#DC3343",
    borderRadius: 8,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
    flex: 8
  },
  image: {
    width: 20,
    height: 20,
    tintColor: 'white'
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoginButton;
