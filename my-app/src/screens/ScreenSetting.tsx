import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import TextAndIcon from "../components/TextAndIcon";
import IconLeft from "../components/IconLeft";

export default function ScreenSetting() {
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.menutextbox}>
        {/* <IconLeft iconName="search1" iconSize={10} /> 돋보기 아이콘  */}

        <View style={styles.Viewtest}>
          <Icon name={"search1"} size={25} color="#FFFAFA" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="검색"
            placeholderTextColor="#FFFAFA"
          />
        </View>

        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="검색"
          placeholderTextColor="#FFFAFA"
        /> */}

        <TextAndIcon
          text="친구 팔로우 및 초대"
          iconName="right"
          iconName2="adduser"
          iconSize={20}
        />

        <TextAndIcon
          text="알림"
          iconName="right"
          iconName2="bells"
          iconSize={20}
        />

        <TextAndIcon
          text="개인정보 보호"
          iconName="right"
          iconName2="lock"
          iconSize={20}
        />

        <TextAndIcon
          text="관리 감독"
          iconName="right"
          iconName2="team"
          iconSize={20}
        />

        <TextAndIcon
          text="보안"
          iconName="right"
          iconName2="Safety"
          iconSize={20}
        />

        <TextAndIcon
          text="광고"
          iconName="right"
          iconName2="appstore-o"
          iconSize={20}
        />

        <TextAndIcon
          text="계정"
          iconName="right"
          iconName2="user"
          iconSize={20}
        />

        <TextAndIcon
          text="도움말"
          iconName="right"
          iconName2="questioncircleo"
          iconSize={20}
        />

        <TextAndIcon
          text="정보"
          iconName="right"
          iconName2="infocirlceo"
          iconSize={20}
        />
      </View>
      <View style={styles.footerbox}>
        <IconLeft iconName="roket1" iconSize={20} />
        <Text style={styles.menutext}>Meta</Text>
        <Text style={styles.menutext}>계정 센터</Text>
        <Text style={styles.menutext}>
          스토리 및 게시물 공유, 로그인 등 Instagram, Facebook 앱, Messenger
          간에 연결된 환경에 대한 설정을 관리하세요.
        </Text>
      </View>
      <View style={styles.Overfooterbox}>
        <Text style={styles.menutext}>로그인</Text>
        <Text style={styles.menutext}>계정 삭제</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },

  menutext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFAFA",
    margin: 40,
  },

  menutextbox: {
    backgroundColor: "#000000",
    width: "100%",

    borderTopColor: "#333333",
    borderBottomColor: "#333333",
    borderWidth: 1,
  },

  footerbox: {
    backgroundColor: "#000000",
    width: "100%",
    height: 200,
    justifyContent: "space-around",
    borderBottomColor: "#333333",
    borderWidth: 1,
  },

  Overfooterbox: {
    backgroundColor: "#000000",
    height: 130,
    justifyContent: "space-around",
  },

  Overfootertext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
  },

  IconRight: {
    marginTop: 45,
    marginRight: 5,
    marginLeft: 5,
    alignItems: "flex-end",
  },

  IconLeft: {
    marginTop: 45,
    marginRight: 5,
    marginLeft: 5,
    alignItems: "flex-start",
  },

  input: {
    width: 375,
    height: 40,
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "#333333",
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 10,
    paddingLeft: 35,
  },

  Viewtest: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#333333",
  },
});
