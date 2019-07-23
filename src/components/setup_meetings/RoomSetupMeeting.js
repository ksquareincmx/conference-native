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
import HeaderSetupMeeting from "../setup_meetings/HeaderSetupMeeting";
import RowSetup from "./RowSetup";

class RoomSetupMeeting extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <HeaderSetupMeeting />
        </View>
        <View style={styles.rowsContainer}>
          <View style={styles.row}>
            <RowSetup />
          </View>
          <View style={styles.row}>
            <RowSetup />
          </View>
          <View style={styles.row}>
            <RowSetup />
          </View>
          <View style={styles.row}>
            <RowSetup />
          </View>
          <View style={styles.row}>
            <RowSetup />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 0.5
  },
  headerContainer: {
    flex: 1
  },
  rowsContainer: {
    flex: 9
  }
});

export default RoomSetupMeeting;
