import React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const Top = () => {
  return <View style={styles.text}>
    <Image source={require('../assets/logo_icon.png')} style={{width: 200, height: 200}} />
  </View>;
};

const styles = StyleSheet.create({
  text: {
    height: 300,
    borderBottomRightRadius: 80,
    backgroundColor: "#308DFF",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Top;