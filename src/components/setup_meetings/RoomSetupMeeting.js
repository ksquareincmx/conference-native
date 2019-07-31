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
import moment from "moment"

class RoomSetupMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      isTimePickerVisible: false,
      pickedDate: Date(),
      startTime: Date(),
      endTime: Date()
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <HeaderSetupMeeting />
        </View>
        <View style={styles.rowsContainer}>
          <RowSetup 
            onPress={this.showDatePicker} 
            title="Date"
            text={moment(this.state.pickedDate).format("MMM Do")}
          />
          <RowSetup 
            onPress={this.showTimePicker}
            title="Start time"
            text={moment(this.state.startTime).format('LT')}
          />
          <RowSetup 
            onPress={this.showTimePicker}
            title="End time"
            text={moment(this.state.endTime).format('LT')}
          />
          <RowSetup onPress={this.showDatePicker} />
          <RowSetup onPress={this.showDatePicker} />
        </View>
        <View style={styles.extraContainer} />
        <DateTimePicker 
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDatePicker}
        />
        <DateTimePicker 
          isVisible={this.state.isTimePickerVisible}
          onConfirm={this.handleStartTimePicked}
          onCancel={this.hideTimePicker}
          mode="time"
        />
      </SafeAreaView>
    );
  }

  handleDatePicked = date => {
    console.log("A date has been picked: ", moment(date).format('MMM Do'))
    this.setState({ pickedDate: date })
    this.hideDatePicker()
  };

  handleStartTimePicked = time => {
    this.setState({ startTime: time })
    this.hideTimePicker()
  }

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false })
  };

  hideTimePicker = () => {
    this.setState({ isTimePickerVisible: false })
  }

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true })
  };
  showTimePicker = () => {
    this.setState({ isTimePickerVisible: true })
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
