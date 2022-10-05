import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Linking,
  Button,
  Switch,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import ionic from "react-native-vector-icons/ionicons";
import TextAndIcon from "../components/TextAndIcon";
import IconLeft from "../components/IconLeft";
import TextStyle from "../components/TextStyle";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function Lock2({ navigation, route }) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
  <ScrollView style={styles.container}>
      <View style={styles.BorderBox}>
        <Text style={styles.lock2Text}>계정 공개 범위</Text>
        <View style={styles.Rightbox}>  
          <IconLeft iconName={"lock"} iconSize={20} text={"비공개 계정"} />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#4169E1" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.BorderBox}>
        <Text style={styles.lock2Text}>활동</Text>
          <View style={styles.Rightbox}>
          <IconLeft iconName={"exclamationcircleo"} iconSize={20} text={"일시 제한"} />
            <Text style={styles.lock2RightText}>해제</Text>
          </View>
        <IconLeft iconName={"lock"} iconSize={20} text={"숨겨진 단어"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"댓글"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"게시물"} />
          <View style={styles.Rightbox}>
          <IconLeft iconName={"lock"} iconSize={20} text={"언급"} />
            <Text style={styles.lock2RightText}>전체 공개</Text>
          </View>
        <IconLeft iconName={"lock"} iconSize={20} text={"스토리"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"라이브 방송"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"가이드"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"활동 상태"} />
        <IconLeft iconName={"lock"} iconSize={20} text={"메시지"} />
      </View>
        <View style={styles.BottomBox}>
          <Text style={styles.lock2Text}>연결된 연락처</Text>
          <IconLeft iconName={"lock"} iconSize={20} text={"제한된 계정"} />
          <IconLeft iconName={"lock"} iconSize={20} text={"차단된 계정"} />
          <IconLeft iconName={"lock"} iconSize={20} text={"숨긴 계정"} />
          <IconLeft iconName={"lock"} iconSize={20} text={"팔로우하는 계정"} />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:  "#000000",
  },

  lock2Text: {
    fontSize: 15,
    color: "#FFFAFA",
    fontWeight: "bold",
    margin: 15,
  },

  lock2RightText: {
  color: "#333333",
  margin: 15,
  },

  Rightbox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  BorderBox: {
    borderWidth: 1,
    borderBottomColor: "#333333",
  },

  BottomBox: {
  }

});

export default Lock2;
