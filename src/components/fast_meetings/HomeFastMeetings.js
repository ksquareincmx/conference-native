"use-strict";
import React, { Component } from "react";
import { View, Text, FlatList, Dimensions, StyleSheet } from "react-native";
import RoomCell from "./RoomCell";
import { CRHeader } from "../common";
import Colors from '../../utils/Colors'

const cellWidth = Dimensions.get("window").width;
const data = [{ id: "0", title: "hola" }, { id: "1", title: "Hola" }, { id: "2", title: "Hola" }, { id: "3", title: "Hola" }];

class HomeFastMeetings extends Component {
  constructor() {
    super();
    this.state = {
      //Loading state used while loading the data for the first time
      loading: false,
      //Data source for the FlatList
      serverData: data,
      //Loading state used while loading more data
      fetchingFromServer: false
    };
    this.offset = 0;
  }

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
      <RoomCell onPress={this.onPressAppoint} text={item.title} />
    </View>
  );

  onPressAppoint = () => {
    this.props.navigation.navigate("Setup")
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFDADB'
  }
});

export default HomeFastMeetings;
