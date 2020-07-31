import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import AppointmentTop from "../../components/AppointmentTop";
import AppointmentComponent from "../../components/AppointmentComponent";
import { TouchableOpacity } from "react-native-gesture-handler";

const AppointmentScreen = ({navigation}) => {
  const obj = [
    {
      key: "0",
      appointmentDate: "22 May 2020",
      appointmentTime: "10:00 AM",
      appointmentTimeLeft: "10",
      appointmentTitle: "Dr. Khalisur Rahman",
      appointmentDesc: "Recal Exam | Hygiene",
    },
    {
      key: "1",
      appointmentDate: "23 May 2020",
      appointmentTime: "10:00 AM",
      appointmentTimeLeft: "30",
      appointmentTitle: "Dr. Drake Romeray",
      appointmentDesc: "Recal Exam | Hygiene",
    },
    {
      key: "2",
      appointmentDate: "24 May 2020",
      appointmentTime: "10:00 AM",
      appointmentTimeLeft: "120",
      appointmentTitle: "Dr. Drake Romeray",
      appointmentDesc: "Recal Exam | Hygiene",
    },
    {
      key: "3",
      appointmentDate: "24 May 2020",
      appointmentTime: "11:00 AM",
      appointmentTimeLeft: "180",
      appointmentTitle: "Dr. Khalisur Rahman",
      appointmentDesc: "Recal Exam | Hygiene",
    },
  ];
  return (
    <View style={styles.container}>
      <AppointmentTop Num={obj.length} />
      <FlatList
        data={obj}
        renderItem={(itemData) => (
          <TouchableOpacity onPress={
            () => navigation.navigate("AppointmentItem", {
              object: itemData.item
            })
          }>
            <AppointmentComponent object={itemData.item}/>
          </TouchableOpacity>
        )} style={{marginBottom: 10}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 7,
    paddingTop: 5,
    paddingBottom: 30,
  },
});

export default AppointmentScreen;
