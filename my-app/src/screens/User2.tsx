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
import { createStackNavigator } from "react-navigation-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import TextAndIcon from "../components/TextAndIcon";
import IconLeft from "../components/IconLeft";
import TextStyle from "../components/TextStyle";
import ScreenSetting from "./ScreenSetting";

const Stack = createNativeStackNavigator();

function User2({ navigation, route }) {

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={() => navigation.navigate("PersonalData")}>
        <Text style={styles.User2text}>개인정보</Text>
      </Pressable>
        <Text style={styles.User2text}>저장됨</Text>
        <Text style={styles.User2text}>친한 친구</Text>
        <Text style={styles.User2text}>계정 상태</Text>
        <Text style={styles.User2text}>아바타</Text>
        <Text style={styles.User2text}>언어</Text>
        <Text style={styles.User2text}>캡션</Text>
        <Text style={styles.User2text}>브라우저 설정</Text>
        <Text style={styles.User2text}>민감한 내용이 포함된 콘텐츠 관리하기</Text>
        <Text style={styles.User2text}>연락처 동기화</Text>
        <Text style={styles.User2text}>다른 앱과 공유</Text>
        <Text style={styles.User2text}>셀룰러 데이터 사용</Text>
        <Text style={styles.User2text}>원래 게시물</Text>
        <Text style={styles.User2text}>인증 요청</Text>
        <Text style={styles.User2text}>리뷰 활동</Text>
        <Text style={styles.User2text}>브랜디드 콘텐츠</Text>
        <Pressable>
        <Text style={styles.Presstext}>프로페셔널 계정으로 전환</Text>
        </Pressable>
        <Pressable>
        <Text style={styles.Presstext}>새로운 프로페셔널 계정 추가</Text>
        </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },

  User2text: {
    color: "#FFFAFA",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },

  Presstext : {
    color: "#013ADF",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  }
});

export default User2;
