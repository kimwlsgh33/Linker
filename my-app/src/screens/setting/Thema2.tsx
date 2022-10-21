import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import TextAndIcon from "../../components/TextAndIcon";
import IconLeft from "../../components/IconLeft";
import TextStyle from "../../components/TextStyle";
import ScreenSetting from "../ScreenSetting";
import { RadioButton } from "react-native-paper";

function Thema2({ navigation, route }) {
  const [checked, setChecked] = useState("first");

  return (
    <ScrollView style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text style={styles.Thema2Text}>라이트 모드</Text>
          <RadioButton
            value="first"
            color="#0080FF"
            uncheckedColor="white"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text style={styles.Thema2Text}>다크 모드</Text>
          <RadioButton
            value="second"
            color="#0080FF"
            uncheckedColor="white"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text style={styles.Thema2Text}>시스템 기본 설정</Text>
          <RadioButton
            value="third"
            color="#0080FF"
            uncheckedColor="white"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => [setChecked("third"), console.log("click")]}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },

  Thema2Text: {
    fontSize: 20,
    color: "#FFFAFA",
  },

  TestView: {
    backgroundColor: "blue",
  },
});

export default Thema2;
