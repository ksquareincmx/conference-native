import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import WeekView from "react-native-week-view";
import moment from "moment";
import CalendarViewHeader from "src/components/calendar/CalendarViewHeader";

const events = [
  {
    id: 1,
    description: "Event 1",
    startDate: moment("2019-08-08T15:35:01").toDate(),
    endDate: moment("2019-08-08T16:35:01").toDate(),
    color: "blue"
  },
  {
    id: 2,
    description: "Event 2",
    startDate: moment("2019-08-09T15:35:01").toDate(),
    endDate: moment("2019-08-09T16:35:01").toDate(),
    color: "blue"
  },
  {
    id: 3,
    description: "Event 3",
    startDate: moment("2019-08-10T16:35:01").toDate(),
    endDate: moment("2019-08-10T17:35:01").toDate(),
    color: "blue"
  }
];

const CalendarView = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <CalendarViewHeader />
      </View>
      <View style={styles.weekViewContainer}>
        <WeekView
          headerStyle={styles.weekViewHeader}
          events={events}
          numberOfDays={3}
          selectedDate={new Date()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  weekViewHeader: {
    backgroundColor: "red"
  },
  headerContainer: {
    flex: 1
  },
  weekViewContainer: {
    flex: 6
  }
});
export default CalendarView;
