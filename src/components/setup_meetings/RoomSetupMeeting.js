"use-strict";
import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  SafeAreaView
} from "react-native";
import HeaderSetupMeeting from "src/components/setup_meetings/HeaderSetupMeeting";
import RowSetup from "src/components/setup_meetings/RowSetup";

class RoomSetupMeeting extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <HeaderSetupMeeting />
        </View>
        <View style={styles.rowsContainer}>
          <RowSetup />
          <RowSetup />
          <RowSetup />
          <RowSetup />
          <RowSetup />
        </View>
        <View style={styles.extraContainer} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1
  },
  rowsContainer: {
    flex: 5
  },
  extraContainer: {
    flex: 4
  }
});

export default RoomSetupMeeting;
