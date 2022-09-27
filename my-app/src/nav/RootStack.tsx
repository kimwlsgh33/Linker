import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import BottomTab from "./BottomTab";
import PostScreen from "../screens/PostScreen";
import StoryScreen from "../screens/StoryScreen";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Story" component={StoryScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
