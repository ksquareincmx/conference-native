import React, { Component } from "react";
import { StyleSheet, View, Picker, TouchableOpacity, Text } from "react-native";
import { CRButton } from "src/components/common";

class ModalPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.navigation.getParam("items", [
        { name: "Does not repeat", value: "1" },
        { name: "Every Day", value: "2" }
      ]),
      selectedItem: this.props.navigation.getParam("selectedItem", "1")
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centerContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.selectedItem}
              onValueChange={this.onValueChange}
              mode="dialog"
              itemStyle={styles.pickerItem}
            >
              {this.state.items.map(item => {
                return <Picker.Item label={item.name} value={item.value} />;
              })}
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.dismissModal}>
              <Text style={styles.buttonText}>Choose</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  onValueChange = (value, index) => {
    this.setState({ selectedItem: value });
    const returnData = this.props.navigation.state.params.returnData;
    returnData(value, index);
  };

  dismissModal = () => this.props.navigation.goBack();
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6565677F"
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
