import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Header } from "react-native/Libraries/NewAppScreen";
import Top from "../../components/Top";
import InputField from "../../components/InputField";
import PasswordInputField from "../../components/PasswordInputField";
import { AuthSession } from "expo";

const SignUp = ({ navigation }) => {
  return (
    <ScrollView>
    <Top />

      <View style={styles.container}>
        <Text style={styles.heading}> Create an Account </Text>
        
        <InputField pholder="Full Name" kbType="default" />
        
        <InputField pholder="Email" kbType="email-address" />
        
        <InputField pholder="Phone Number" kbType="phone-pad"/>
        
        <PasswordInputField />
        
        <PasswordInputField />
        
        <InputField pholder="Reference Code" kbType="number-pad"/>
        
        <TouchableOpacity onPress={() => navigation.navigate("Verification")} style={styles.signUpButtonContainer}>
          <Text style={styles.signUpButtonText}> Sign Up </Text>
        </TouchableOpacity>

        <Text style={styles.bottomText} onPress={() => navigation.navigate("Logoo")}>
          Already have an account? Click here
        </Text>
      </View>
    </ScrollView>
  );
};

  const styles = StyleSheet.create({
    container: {
      margin: 10,
      alignItems: "center",
      justifyContent: "center"
    },
    heading: {
      margin: 10,
      fontSize: 25,
      fontWeight: "bold",
      color: "black"
    },
    signUpButtonContainer: {
      margin: 20,
      elevation: 8,
      backgroundColor: "#308DFF",
      width: "80%",
      height: 50,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    signUpButtonText: {
      fontSize: 20,
      color: "#FFFFFF",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    bottomText: {
      margin: 20,
      fontSize: 15,
      fontWeight: "bold",
      color: "#308DFF"
    }
});

export default SignUp;