import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
<<<<<<< HEAD
import SignUp from "../screens/SignUp";
=======
import LoginScreen from "../screens/LoginScreen";
>>>>>>> 55d3e3ccccf87b44e83aa3eef27464a2e7ebce3a

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
<<<<<<< HEAD
      initialRouteName="SignUp"
      screenOptions={{ headerShown: false }}
    >
=======
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
>>>>>>> 55d3e3ccccf87b44e83aa3eef27464a2e7ebce3a
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default RootStack;

{
  /*RootStack.js의 Stack.Navigator 뒤에 initialRouteName="화면이름" */
}
