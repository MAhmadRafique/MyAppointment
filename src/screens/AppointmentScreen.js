import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const AppointmentScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Click Me" onPress={() => navigation.navigate("Logoo")} />
      <Text style={styles.text}>Appointment Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default AppointmentScreen;