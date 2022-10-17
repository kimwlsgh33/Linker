import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createAppContainer } from "react-navigation";
import DetailScreen from "../screens/DetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ScreenSetting from "../screens/ScreenSetting";
import HomeTab from "../nav/HomeTab";
import PostScreen from "../screens/PostScreen";
import StoryScreen from "../screens/StoryScreen";
import Icon from "react-native-vector-icons/AntDesign";
import AddUser2 from "../screens/AddUser2";
import Bells2 from "../screens/Bells2";
import Lock2 from "../screens/Lock2";
import Safety2 from "../screens/Safety2";
import Thema2 from "../screens/Thema2";
import User2 from "../screens/User2";
import PersonalData from "../screens/PersonalData";

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

      <Stack.Screen
        name="Lock2"
        component={Lock2}
        options={{
          title: "개인정보 보호",
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

      <Stack.Screen
        name="Safety2"
        component={Safety2}
        options={{
          title: "보안",
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

      <Stack.Screen
        name="User2"
        component={User2}
        options={{
          title: "계정",
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

      <Stack.Screen
        name="Thema2"
        component={Thema2}
        options={{
          title: "테마 설정",
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

      <Stack.Screen
        name="PersonalData"
        component={PersonalData}
        options={{
          title: "개인정보",
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
