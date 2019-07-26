"use-strict";
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, CardSection, Button } from "../common";
import LoginButton from 'src/components/login/LoginButton'
const imageSize = 100

class Login extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={{ flex: 2 }} />
        <View style={styles.centerContainer}>
          <Card>
            <View style={styles.cardContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Welcome!</Text>
              </View>
              <View style={styles.imageContainer}>
                <Image 
                  source={require('../../images/ProfileAvatar.png')}
                  style={styles.image}
                />
              </View>
              <View style={styles.buttonContainer}>
                <LoginButton onPress={this.onPress}> Sign in with Google </LoginButton>
              </View>
            </View>
          </Card>
        </View>
        <View style={{ flex: 4 }} />
      </View>
    );
  }

  onPress = () => {
    this.props.navigation.navigate('MainApp')
  };
}

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  main: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFDADB"
  },
  centerContainer: {
    flexDirection: 'row',
    flex: 4,
    justifyContent: "space-evenly",
    paddingRight: 40,
    paddingLeft: 40
  },
  imageContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 18
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: "red",
    paddingTop: 15
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
    padding: 30
  }
});

export default Login;
