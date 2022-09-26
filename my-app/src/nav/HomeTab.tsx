import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomTabScreen from "./BottomTabScreen";

function HomeTab() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomTabScreen} />
      </Stack.Navigator>
  )
}

export default HomeTab;
