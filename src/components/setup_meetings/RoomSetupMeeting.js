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
import DateTimePicker from "react-native-modal-datetime-picker";
import HeaderSetupMeeting from "src/components/setup_meetings/HeaderSetupMeeting";
import RowSetup from "src/components/setup_meetings/RowSetup";

class RoomSetupMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <HeaderSetupMeeting />
        </View>
        <View style={styles.rowsContainer}>
          <RowSetup onPress={this.showDatePicker} />
          <RowSetup onPress={this.showDatePicker} />
          <RowSetup onPress={this.showDatePicker} />
          <RowSetup onPress={this.showDatePicker} />
          <RowSetup onPress={this.showDatePicker} />
        </View>
        <View style={styles.extraContainer} />
        <DateTimePicker 
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatePicker}
        />
      </SafeAreaView>
    );
  }

  handleDatePicked = date => {
    console.log("A date has been picked: ", date)
    this.hideDatePicker()
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false })
  };

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true })
  };
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
