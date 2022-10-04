import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createAppContainer } from "react-navigation";
import DetailScreen from "../screens/DetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ScreenSetting from "../screens/ScreenSetting";
import BottomTab from "./BottomTab";
import PostScreen from "../screens/PostScreen";
import StoryScreen from "../screens/StoryScreen";
import Icon from "react-native-vector-icons/AntDesign";
import AddUser2 from "../screens/AddUser2";
import Bells2 from "../screens/Bells2";

import SignUp from "../screens/SignUp";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

function RootStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={ScreenSetting}
        options={{
          title: "설정",
          headerTitleAlign: "center",
          headerTintColor: "#FFFAFA",
          headerStyle: { backgroundColor: "#000000" },
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name={"left"} size={20} color="#FFFAFA" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Story" component={StoryScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="AddUser2"
        component={AddUser2}
        options={{
          title: "친구 팔로우 및 초대",
          headerTitleAlign: "center",
          headerTintColor: "#FFFAFA",
          headerStyle: { backgroundColor: "#000000" },
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Icon name={"left"} size={20} color="#FFFAFA" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="Bells2"
        component={Bells2}
        options={{
          title: "알림",
          headerTitleAlign: "left",
          headerTintColor: "#FFFAFA",
          headerStyle: { backgroundColor: "#000000" },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.headertitle}
            >
              <Icon name={"left"} size={20} color="#FFFAFA" />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headertitle: {
    marginRight: 20,
  },
});

export default RootStack;

{
  /*RootStack.js의 Stack.Navigator 뒤에 initialRouteName="화면이름" */
}
