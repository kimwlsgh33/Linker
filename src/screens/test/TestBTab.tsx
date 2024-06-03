import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import TestAnim from "./screens/TestAnim";
import TestAnim2 from "./screens/TestAnim2";
import TestTabView from "./screens/TestTabView";

const Tab = createBottomTabNavigator();

const { width } = Dimensions.get("window");

function TestBTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TestAnim" component={TestAnim} />
      <Tab.Screen name="TabView" component={TestTabView} />
    </Tab.Navigator>
  );
}

export default TestBTab;
