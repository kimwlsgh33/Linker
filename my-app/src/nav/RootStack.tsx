import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUp from "../screens/SignUp";
import LoginScreen from "../screens/LoginScreen";
import BottomTabScreen from "./BottomTabScreen";
import TOSScreen from "../screens/TOSScreen";
import CreateNameScreen from "../screens/CreateNameScreen";
import NameConfirm from "../screens/NameConfirm";
import CompleteNScreen from "../screens/CompleteNScreen";
import BirthdayScreen from "../screens/BirthdayScreen";
import AnotherAcc from "../screens/AnotherAcc";
import LoginEr from "../screens/LoginEr";
import ErrTab from "../components/ErrTab";
import CodeCheck from "../screens/CodeCheck";
import CodeInput from "../screens/CodeInput";
import PwRe from "../screens/PwRe";
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTab" component={BottomTabScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TOS" component={TOSScreen} />
      <Stack.Screen name="CreateName" component={CreateNameScreen} />
      <Stack.Screen name="NameConfirm" component={NameConfirm} />
      <Stack.Screen name="CompleteN" component={CompleteNScreen} />
      <Stack.Screen name="Birthday" component={BirthdayScreen} />
      <Stack.Screen name="AnotherAcc" component={AnotherAcc} />
      <Stack.Screen name="LoginEr" component={LoginEr} />
      <Stack.Screen name="ErrTab" component={ErrTab} />
      <Stack.Screen name="CodeCheck" component={CodeCheck} />
      <Stack.Screen name="CodeInput" component={CodeInput} />
      <Stack.Screen name="PwRe" component={PwRe} />
    </Stack.Navigator>
  );
}

export default RootStack;

{
  /*RootStack.js의 Stack.Navigator 뒤에 initialRouteName="화면이름" */
}
