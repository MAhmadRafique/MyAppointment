import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUp";
import VerificationScreen from "./src/screens/Verification";

const navigator = createStackNavigator (
  {
    Home: HomeScreen,
    Logoo: Login,
    SignUp: SignUpScreen,
    Verification: VerificationScreen
  },
  {
    initialRouteName: "Logoo",
    defaultNavigationOptions: { title: "App" }
  }
);

export default createAppContainer(navigator);