import React, { Component } from "react";
import { StyleSheet, View, Picker } from "react-native";

class ModalPicker extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Picker
          selectedValue={this.props.selectedValue}
          onValueChange={this.props.onValueChange}
          mode="dialog"
        >
          <Picker.Item label="Does not repeat" value="1" />
          <Picker.Item label="Every Day" value="2" />
        </Picker>
      </View>
    );
  }
}

export { ModalPicker };
