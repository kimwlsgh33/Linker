import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import icon from "react-native-vector-icons/ionicons";
import TextAndIcon from "../components/TextAndIcon";
import IconLeft from "../components/IconLeft";
import TextStyle from "../components/TextStyle";
import ScreenSetting from "./ScreenSetting";

const Stack = createNativeStackNavigator();

function AddUser2({ navigation, route }) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <TextAndIcon
          text="연락처에 있는 사람 팔로우"
          iconName="right"
          iconName2="adduser"
          iconSize={20}
        />

        <TextAndIcon
          text="이메일로 친구 초대"
          iconName="right"
          iconName2="mail"
          iconSize={20}
        />

        <TextAndIcon
          text="SMS로 친구 초대"
          iconName="right"
          iconName2="message1"
          iconSize={20}
        />

        <TextAndIcon
          text="친구 초대..."
          iconName="right"
          iconName2="sharealt"
          iconSize={20}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },
});

export default AddUser2;
