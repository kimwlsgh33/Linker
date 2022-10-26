import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TestAnim2 from "./screens/TestAnim2";
import UseAmplify from "./screens/UseAmplify";
import TestBTab from "./TestBTab";

const Stack = createStackNavigator();

function TestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UseAmplify" component={UseAmplify} />
      <Stack.Screen
        name="TestAnim2"
        component={TestAnim2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default TestStack;
