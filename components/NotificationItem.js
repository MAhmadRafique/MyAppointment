import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const NotificationItem = (props) => {
    console.log(props);
  return (
    <View style={styles.notif}>
      <View style={styles.txtCont}>
        <Text style={styles.txt}>{props.itm.time}</Text>
      </View>
      <View style={styles.styl1}>
      <Image source={require('../assets/bell_icon.png')} style={styles.img} />
      <View style={styles.txts}>
        <Text style={{fontSize: 20}}>{props.itm.title}</Text>
        <Text>{props.itm.description}</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notif: {
    width: "90%",
    marginHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 10,
    height: 100,
    flexDirection: "column",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  txtCont: {
    width: "100%",
    alignItems: "flex-end"
  },
  txts: {
    marginVertical: 15,
    flexDirection: "column",
    paddingHorizontal: 20
  },
  txt: {
  },
  styl1: {
    flexDirection: "row",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "grey"
  },
});

export default NotificationItem;
