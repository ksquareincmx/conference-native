"use-strict";
import React, { Component } from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { CRHeader } from "src/components/common"
import MeetingCell from "src/components/my_meeting/MeetingCell"

const cellWidth = Dimensions.get("window").width;
const data = [{ id: "0", title: "hola" }, { id: "1", title: "Hola" }, { id: "2", title: "Hola" }, { id: "3", title: "Hola" }];

class HomeMyMeetings extends Component {
  render() {
    return (
      <View style={styles.main}>
        <CRHeader />
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

  renderItem = ({ item }) => (
    <View style={{ width: cellWidth, height: cellWidth * 0.5, padding: 5 }}>
      <MeetingCell onPress={this.onPressAppoint} text={item.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFDADB'
  }
});

export default HomeMyMeetings;