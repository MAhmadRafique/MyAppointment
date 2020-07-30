import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import HeaderScreen from "../../components/HeaderScreen";
import ImageComponent from "../../components/ImageComponent";
import ProfileDetail from "../../components/ProfileDetail";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderScreen title="Profile" />
      <ImageComponent title="Joey Tribbiani" />

      <View style={styles.conatiner}>
        <ProfileDetail name="Date Of Birth" detail="23rd May 1985" />
        <ProfileDetail name="Email" detail="react.native@development.com" />
        <ProfileDetail name="Contact #" detail="0324 6574245" />
        <ProfileDetail name="Address" detail="Gordon Town, Glasgow" />
        <ProfileDetail name="Country" detail="United Kingdom" />
        <ProfileDetail name="Postal Code" detail="DK34N" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 5,
    paddingHorizontal: 30,
  },
});

export default ProfileScreen;
