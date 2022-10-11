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
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import TextAndIcon from "../components/TextAndIcon";
import IconLeft from "../components/IconLeft";
import TextStyle from "../components/TextStyle";
import ScreenSetting from "./ScreenSetting";

const Stack = createNativeStackNavigator();

function Thema2({ navigation, route }) {
  return (
    <ScrollView style={styles.container}>
    <View>
        <View>
            <Text style={styles.Thema2Text}>라이트 모드</Text>
            <AntDesign name="checkcircleo" size={20} color="#FFFAFA" />
        </View>
        <View>
            <Text style={styles.Thema2Text}>다크 모드</Text>
            <AntDesign name="checkcircleo" size={20} color="#FFFAFA" />
        </View>
    <View>
        <Text style={styles.Thema2Text}>시스템 기본 설정</Text>
        <AntDesign name="checkcircleo" size={20} color="#FFFAFA" />
    </View>
      </View>
    </ScrollView>
  );
}

{/* ellipse-outline 동그라미 */}
{/* checkcircleo 체크 동그라미 */}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },

  Thema2Text: {
    fontSize: 20,
    color: "#FFFAFA",
    },

});

export default Thema2;