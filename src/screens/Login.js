import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Top from "../../components/Top";
import InputField from "../../components/InputField";
import PasswordInputField from "../../components/PasswordInputField";
import { AuthSession } from "expo";

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={{ marginBottom: 350 }}>
          <Top />

          <View style={styles.container}>
            <Text style={styles.heading}> Login to your Account </Text>

            <InputField pholder="Username" kbType="default" />

            <PasswordInputField />

            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.loginButtonContainer}
            >
              <Text style={styles.loginButtonText}> Sign In </Text>
            </TouchableOpacity>

            <Text
              style={styles.bottomText}
              onPress={() => navigation.navigate("SignUp")}
            >
              Don't have an account? Click here
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
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
    paddingHorizontal: 12,
  },
  loginButtonText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  bottomText: {
    margin: 20,
    fontSize: 10,
    fontWeight: "bold",
    color: "#308DFF",
  },
});

export default Login;
