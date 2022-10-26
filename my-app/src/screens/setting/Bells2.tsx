import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  ScrollView,
  Switch,
  Alert,
  Modal,
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import icon from "react-native-vector-icons/ionicons";
import TextAndIcon from "../../components/TextAndIcon";
import IconLeft from "../../components/IconLeft";
import TextStyle from "../../components/TextStyle";
import ScreenSetting from "./ScreenSetting";

const Stack = createNativeStackNavigator();

function Bells2({ navigation, route }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Bells2textBox}>
        <Modal
          animationType="fade"
          visible={isEnabled}
          transparent={true} // 배경 투명하게 만들기
        >
          <Pressable
            style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}
            onPress={() => setIsEnabled(false)}
          >
            <View style={styles.ModalBox}>
              <View style={styles.ModalView}>
                <View style={styles.ModalInnerBox}>
                  <Text
                    style={styles.ModalBoxText}
                  >{`푸시 알림을 받지는 않지만, Instagram을\n열면 새 알림을 볼 수 있습니다.`}</Text>
                </View>
                <Pressable>
                  <Text style={styles.ModalText}>15분</Text>
                  <Text style={styles.ModalText}>1시간</Text>
                  <Text style={styles.ModalText}>2시간</Text>
                  <Text style={styles.ModalText}>4시간</Text>
                  <Text style={styles.ModalText}>8시간</Text>
                </Pressable>
                <Pressable onPress={() => setIsEnabled(!isEnabled)}>
                  <Text style={styles.ModalText}>취소</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Modal>
        <Text style={styles.Bells2text}>푸시 알림</Text>
        <View style={styles.toggleBox}>
          <Text style={styles.Bells2text}>모두 일시 중단</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#4169E1" : "#f4f3f4"}
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
    borderBottomColor: "rgba(60,60,60,0.3)",
  },

  toggleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ModalView: {
    width: "80%",
    backgroundColor: "#151515",
  },

  ModalBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  ModalText: {
    color: "#FFFAFA",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },

  ModalInnerBox: {
    borderWidth: 1,
    borderBottomColor: "#333333",
  },

  ModalBoxText: {
    color: "#FFFAFA",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});

export default Bells2;
