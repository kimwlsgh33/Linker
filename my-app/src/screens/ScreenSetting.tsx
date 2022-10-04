import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Linking,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import icon from "react-native-vector-icons/ionicons";
import TextAndIcon from "../components/TextAndIcon";
import IconLeft from "../components/IconLeft";
import TextStyle from "../components/TextStyle";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import AddUser2 from "./AddUser2";
import Bells2 from "./Bells2";

const Stack = createNativeStackNavigator();

const navbars = [
  {
    navigateUri: "AddUser2",
    text: "친구 팔로우 및 초대",
    iconName: "right",
    iconName2: "adduser",
    iconSize: 20,
  },
  {
    navigateUri: "Bells2",
    text: "알림",
    iconName: "right",
    iconName2: "bells",
    iconSize: 20,
  },
  {
    navigateUri: "AddUser2",
    text: "개인정보 보호",
    iconName: "right",
    iconName2: "lock",
    iconSize: 20,
  },
  {
    navigateUri: "AddUser2",
    text: "관리 감독",
    iconName: "right",
    iconName2: "team",
    iconSize: 20,
  },
  {
    navigateUri: "AddUser2",
    text: "보안",
    iconName: "right",
    iconName2: "Safety",
    iconSize: 20,
  },
  {
    navigateUri: "AddUser2",
    text: "광고",
    iconName: "right",
    iconName2: "appstore-o",
    iconSize: 20,
  },
  {
    navigateUri: "AddUser2",
    text: "계정",
    iconName: "right",
    iconName2: "user",
    iconSize: 20,
  },
  {
    navigateUri: "AddUser2",
    text: "도움말",
    iconName: "right",
    iconName2: "questioncircleo",
    iconSize: 20,
  },
  {
    navigateUri: "AddUser2",
    text: "소개",
    iconName: "right",
    iconName2: "infocirlceo",
    iconSize: 20,
  },
];

export default function ScreenSetting({ navigation, route }) {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.menutextbox}>
        <View style={styles.Viewtest}>
          <Icon name={"search1"} size={20} color="#FFFAFA" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="검색"
            placeholderTextColor="#FFFAFA"
          />
        </View>

        {navbars.map((item, index) => (
          <Pressable
            onPress={() => {
              navigation.navigate(item.navigateUri);
            }}
            key={index}
          >
            <TextAndIcon
              text={item.text}
              iconName={item.iconName}
              iconName2={item.iconName2}
              iconSize={item.iconSize}
            />
          </Pressable>
        ))}
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerbox}>
          <IconLeft iconName={"rocket1"} iconSize={20} text="Meta" />
          <Pressable
            style={({ pressed }) => [pressed && { opacity: 0.4 }]}
            onPress={() => Linking.openURL("https://naver.com")}
          >
            <TextStyle text="계정 센터" />
          </Pressable>
          <Text style={styles.footertext}>
            {`스토리 및 게시물 공유, 로그인 등 Instagram, Facebook 앱,\nMessenger간에 연결된 환경에 대한 설정을 관리하세요.`}
          </Text>
        </View>
      </View>
      <View style={styles.Overfooterbox}>
        <Text style={styles.Overfootertext}>로그인</Text>
        <Text style={styles.Overfootertext}>계정 추가</Text>
        <Text style={styles.Overfootertext}>로그아웃</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    borderBottomColor: "#333333",
  },

  menutextbox: {
    borderTopColor: "#333333",
    borderBottomColor: "#333333",
    borderWidth: 1,
  },

  footerContainer: {
    justifyContent: "space-between",
    borderBottomColor: "#333333",
    borderWidth: 1,
  },

  footerbox: {
    backgroundColor: "#000000",
    margin: 15,
  },

  footertext: {
    fontSize: 10,
    color: "#FFFAFA",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 15,
  },
  Overfooterbox: {
    backgroundColor: "#000000",
  },

  Overfootertext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFAFA",
    margin: 15,
  },

  input: {
    fontWeight: "bold",
    paddingLeft: 10,
  },

  Viewtest: {
    marginTop: 15,
    marginLeft: 12,
    width: 360,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 4,
    backgroundColor: "#333333",
    borderRadius: 10,
  },
});
