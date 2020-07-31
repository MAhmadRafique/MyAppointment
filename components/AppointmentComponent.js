import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const AppointmentComponent = (props) => {
  return (
    <View style={styles.uppercontainer}>
      <Text style={styles.text}>
        {props.object.appointmentDate} | {props.object.appointmentTime}
      </Text>
      <View style={styles.mainContainer}>
        <View style={styles.timeStyle}>
          <Text style={{ fontSize: 15 }}>
            {props.object.appointmentTimeLeft}
          </Text>
          <Text style={{ fontSize: 15 }}>Mins</Text>
        </View>
        <View style={styles.detailStyle}>
          <Text style={{ fontSize: 15, padding: 2 }}>
            {props.object.appointmentTitle}
          </Text>
          <Text style={{ fontSize: 10, padding: 2 }}>
            {props.object.appointmentDesc}
          </Text>
          <Image
            source={require("../assets/call_icon.png")}
            style={{ width: 40, height: 40, alignSelf: "flex-end" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uppercontainer: {
    paddingVertical: 7,
    paddingHorizontal: 7,
  },
  text: {
    fontSize: 10,
    color: "white",
    fontWeight: "normal",
    padding: 10,
    backgroundColor: "#308DFF",
  },
  mainContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  timeStyle: {
    alignItems: "center",
    padding: 20,
    justifyContent: "center",
    flexDirection: "column",
    borderRightColor: "lightgrey",
    borderRightWidth: 1,
  },
  detailStyle: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 5,
    justifyContent: "center",
  },
});

export default AppointmentComponent;
