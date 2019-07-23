"use-strict";
import React, { Component } from "react";
import { View, Text, FlatList, Dimensions, StyleSheet, SafeAreaView } from "react-native";
import HeaderSetupMeeting from "../setup_meetings/HeaderSetupMeeting"


class RoomSetupMeeting extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <HeaderSetupMeeting />
        </View>
        <View style={styles.row}>
          <Text>Date</Text>
        </View>
        <View style={styles.row}>
          <Text>Time</Text>
        </View>
        <View style={styles.row}>
          <Text>Recurrency</Text>
        </View>
        <View style={styles.row}>
          <Text>Add people</Text>
        </View>
        <View style={styles.row}>
          <Text>add description</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 2
  }
})

export default RoomSetupMeeting;