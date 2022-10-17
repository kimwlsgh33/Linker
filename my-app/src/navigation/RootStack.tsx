import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeTab from "./HomeTab";
import PostScreen from "../screens/PostScreen";
import StoryScreen from "../screens/StoryScreen";

import SignUp from "../screens/SignUp";
import LoginScreen from "../screens/LoginScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import HeaderBar from "../components/HeaderBar";
import TOSScreen from "../screens/TOSScreen";
import CreateNameScreen from "../screens/CreateNameScreen";
import NameConfirm from "../screens/NameConfirm";
import BirthdayScreen from "../screens/BirthdayScreen";
import CompleteNScreen from "../screens/CompleteNScreen";
import LoginEr from "../screens/LoginEr";
import CodeCheck from "../screens/CodeCheck";
import CodeInput from "../screens/CodeInput";
import PwRe from "../screens/PwRe";
const Stack = createNativeStackNavigator();

const screenOptions = ({ navigation, route }) => {
  let title;
  if (route.name === "Welcome") {
    title = "Welcome";
  } else if (route.name === "Detail") {
    title = "Detail";
  } else if (route.name === "Post") {
    title = "New Post";
  } else if (route.name === "Story") {
    title = "Story";
  } else if (route.name === "SignUp") {
    title = "SignUp";
  } else if (route.name === "Discover") {
    title = "탐색 탭";
  }

  return {
    header: () => (
      <HeaderBar title={title} leftIconPressed={navigation.goBack} />
    ),
  };
};

function RootStack() {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="SignUp">
      <Stack.Group>
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Story" component={StoryScreen} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoginEr" component={LoginEr} />
        <Stack.Screen name="CodeCheck" component={CodeCheck} />
        <Stack.Screen name="CodeInput" component={CodeInput} />
        <Stack.Screen name="PwRe" component={PwRe} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TOS" component={TOSScreen} />
        <Stack.Screen name="CreateName" component={CreateNameScreen} />
        <Stack.Screen name="NameConfirm" component={NameConfirm} />
        <Stack.Screen name="Birthday" component={BirthdayScreen} />
        <Stack.Screen name="CompleteN" component={CompleteNScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStack;

{
  /*RootStack.js의 Stack.Navigator 뒤에 initialRouteName="화면이름" */
}
