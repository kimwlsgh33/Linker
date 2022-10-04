import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  ScrollView,
  Switch,
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

function Bells2({ navigation, route }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Bells2textBox}>
        <Text style={styles.Bells2text}>푸시 알림</Text>
        <View style={styles.toggleBox}>
          <Text style={styles.Bells2text}>모두 일시 중단</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Text style={styles.Bells2text}>게시물,스토리 및 댓글</Text>
        <Text style={styles.Bells2text}>팔로잉 및 팔로워</Text>
        <Text style={styles.Bells2text}>라이브 방송 및 릴스</Text>
        <Text style={styles.Bells2text}>Direct 메시지 및 통화</Text>
        <Text style={styles.Bells2text}>기부 캠페인</Text>
        <Text style={styles.Bells2text}>Instagram에서 보내는 알림</Text>
      </View>
      <Text style={styles.Bells2text}>기타 알림 유형</Text>
      <Text style={styles.Bells2text}>이메일 알림</Text>
      <Text style={styles.Bells2text}>쇼핑</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },

  Bells2text: {
    color: "#FFFAFA",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },

  Bells2textBox: {
    borderWidth: 1,
    borderBottomColor: "#333333",
  },

  toggleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Bells2;
