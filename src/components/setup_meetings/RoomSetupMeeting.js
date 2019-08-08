"use-strict";
import React, { Component } from "react";
import { View, Picker, StyleSheet, SafeAreaView } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import HeaderSetupMeeting from "src/components/setup_meetings/HeaderSetupMeeting";
import RowSetup from "src/components/setup_meetings/RowSetup";
import moment from "moment";

const recurrencyData = [
  {
    name: "Does not repeat",
    value: "1"
  },
  {
    name: "Every day",
    value: "2"
  }
]

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
      recurrencySelected: recurrencyData[0]
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
            text={this.state.recurrencySelected.name}
          />
          <RowSetup title="Add People" onPress={this.showDatePicker} />
          <RowSetup title="Add Description" onPress={this.showDatePicker} />
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
    this.props.navigation.navigate('Modal', {
      items: recurrencyData,
      returnData: this.recurrencyPickerOnChangeValue.bind(this),
      selectedItem: this.state.recurrencySelected
    });
  };

  recurrencyPickerOnChangeValue = (value, index) => {
    this.setState({
      recurrencySelected: recurrencyData[index]
    });
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
  },
  pickerStyle: {
    height: 100,
    width: 140
  }
});

export default RoomSetupMeeting;
