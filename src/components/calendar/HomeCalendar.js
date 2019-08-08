"use-strict";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CRHeader } from 'src/components/common'
import CalendarView from "src/components/calendar/CalendarView"

class HomeCalendar extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <CRHeader leftText="Calendar" />
        <View style={styles.calendarContainer}>
          <CalendarView />
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  calendarContainer: {
    flex: 1
  }
})

export default HomeCalendar;