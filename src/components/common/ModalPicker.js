import React, { Component } from "react";
import { StyleSheet, View, Picker, TouchableOpacity, Text } from "react-native";
import { CRButton } from "src/components/common";

class ModalPicker extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centerContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue="1"
              onValueChange={this.props.onValueChange}
              mode="dropdown"
              itemStyle={styles.pickerItem}
            >
              <Picker.Item label="Does not repeat" value="1" />
              <Picker.Item label="Every Day" value="2" />
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.buttonText}>Choose</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#6565677F',
  },
  centerContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.8,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "white"
  },
  picker: {
    width: 200,
    backgroundColor: "white",
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8
  },
  pickerContainer: {
    flex: 2.5,
    // borderWidth: 0.7,
    // borderColor: "black",
    justifyContent: "center",
    borderRadius: 8
  },
  pickerItem: {
    color: "#DC3343",
    height: 90
  },
  button: {
    margin: 6,
    backgroundColor: "#DC3343",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row"
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }
});

export default ModalPicker;
