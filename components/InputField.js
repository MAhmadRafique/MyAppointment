import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const InputField = (props) => {
  return (
    <View style={styles.input}>
      <TextInput placeholder={props.pholder} style={{fontSize: 20}} keyboardType={props.kbType}/>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    padding: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    margin: 10
  }
});

export default InputField;