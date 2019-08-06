"use-strict";
import React, { Component } from "react";
import { View, Picker, StyleSheet, SafeAreaView } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import HeaderSetupMeeting from "src/components/setup_meetings/HeaderSetupMeeting";
import RowSetup from "src/components/setup_meetings/RowSetup";
import moment from "moment";

class RoomSetupMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      isTimePickerVisible: false,
      isRecurrencyPickerVisible: false,
      timePickerSelected: "start",
      pickedDate: Date(),
      startTime: Date(),
      endTime: Date(),
      recurrencySelected: "1"
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
            onPress={() => this.showTimePicker("start")}
            title="Start time"
            text={moment(this.state.startTime).format("LT")}
          />
          <RowSetup
            onPress={() => this.showTimePicker("end")}
            title="End time"
            text={moment(this.state.endTime).format("LT")}
          />
          <RowSetup
            title="Recurrency"
            onPress={() => this.showRecurrencyPicker()}
          />
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
          onConfirm={this.handleTimePicked}
          onCancel={this.hideTimePicker}
          mode="time"
        />
      </SafeAreaView>
    );
  }

  onRecurrencyChangedValue = (value, index) => {
    console.log("Recurrency changed value: ", value);
    this.setState({ recurrencySelected: value });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", moment(date).format("MMM Do"));
    this.setState({ pickedDate: date });
    this.hideDatePicker();
  };

  handleTimePicked = time => {
    const { timePickerSelected } = this.state;
    if (timePickerSelected === "start") {
      this.setState({ startTime: time });
    } else if (timePickerSelected === "end") {
      this.setState({ endTime: time });
    }

    this.hideTimePicker();
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  hideTimePicker = () => {
    this.setState({ isTimePickerVisible: false });
  };

  hideRecurrencyPicker = () => {
    this.setState({ isRecurrencyPickerVisible: false });
  };
  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };
  showTimePicker = comesFrom => {
    this.setState({ isTimePickerVisible: true, timePickerSelected: comesFrom });
  };

  showRecurrencyPicker = () => {
    //this.setState({ isRecurrencyPickerVisible: true });
    this.props.navigation.navigate('Modal')
  };
}

const RecurrencyPicker = props => {
  if (props.isVisible) {
    return (
      <View style={{ flex: 1 }}>
        <Picker
          selectedValue={props.selectedValue}
          onValueChange={props.onValueChange}
          mode="dialog"
        >
          <Picker.Item label="Does not repeat" value="1" />
          <Picker.Item label="Every Day" value="2" />
        </Picker>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1
  },
  rowsContainer: {
    flex: 5
  },
  extraContainer: {
    flex: 4
  },
  pickerStyle: {
    height: 100,
    width: 140
  }
});

export default RoomSetupMeeting;
