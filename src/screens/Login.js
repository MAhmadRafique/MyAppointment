import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Header } from "react-native/Libraries/NewAppScreen";
import Top from "../../components/Top";
import InputField from "../../components/InputField";
import PasswordInputField from "../../components/PasswordInputField";
import { AuthSession } from "expo";

const Login = ({ navigation }) => {
  return (
    <View>
      <Top />

      <View style={styles.container}>
        <Text style={styles.heading}> Login to your Account </Text>

        <InputField pholder="Username" kbType="default" />

        <PasswordInputField />

        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.loginButtonContainer}>
          <Text style={styles.loginButtonText}> Sign In </Text>
        </TouchableOpacity>

        <Text style={styles.bottomText} onPress={() => navigation.navigate("SignUp")}>
          Don't have an account? Click here
        </Text>
      </View>
    </View>
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
  loginButtonContainer: {
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
  loginButtonText: {
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

export default Login;