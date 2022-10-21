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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/ionicons";
import TextAndIcon from "../../components/TextAndIcon";
import IconLeft from "../../components/IconLeft";
import TextStyle from "../../components/TextStyle";
import ScreenSetting from "../ScreenSetting";
// import IonicLeft from "../components/IonicLeft"

const Stack = createNativeStackNavigator();

function Safety2({ navigation, route }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Safety2textBox}>
        <Text style={styles.Safety2text}>로그인 보안</Text>
        <IconLeft iconName={"rocket1"} iconSize={20} text="로그인 활동" />
        <IconLeft iconName={"rocket1"} iconSize={20} text="로그인 활동" />
        <IconLeft
          iconName={"rocket1"}
          iconSize={20}
          text="저장된 로그인 정보"
        />
        <IconLeft iconName={"rocket1"} iconSize={20} text="2단계 인증" />
        <IconLeft
          iconName={"rocket1"}
          iconSize={20}
          text="Instagram에서 보낸 이메일"
        />
        <IconLeft iconName={"rocket1"} iconSize={20} text="계정 보안 확인" />
      </View>
      <Text style={styles.Safety2text}>데이터 및 내역</Text>
      <IconLeft iconName={"rocket1"} iconSize={20} text="앱 및 웹사이트" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },

  Safety2text: {
    color: "#FFFAFA",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },

  Safety2textBox: {
    borderWidth: 1,
    borderBottomColor: "#333333",
  },
});

export default Safety2;
