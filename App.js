import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Login from "./src/screens/Login";
import SignUpScreen from "./src/screens/SignUp";
import VerificationScreen from "./src/screens/Verification";
import AppointmentItemScreen from "./src/screens/AppointmentItemScreen"

const navigator = createStackNavigator (
  {
    Home: HomeScreen,
    Logoo: Login,
    SignUp: SignUpScreen,
    Verification: VerificationScreen,
    AppointmentItem: AppointmentItemScreen
  },
  {
    initialRouteName: "Logoo",
    defaultNavigationOptions: { title: "MyAppointments" },
  }
);

export default createAppContainer(navigator);