import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import TextAndIcon from "../components/TextAndIcon";

export default function ScreenSetting() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.menutextbox}>
        {/* <View style={styles.IconRight}>
          <Icon name="right" size={20} color="#FFFAFA" />
        </View>
        <Text style={styles.menutext}>친구 팔로우 및 초대</Text> */}
        <TextAndIcon
          text="친구 팔로우 및 초대"
          iconName="right"
          iconSize={20}
        />
        <TextAndIcon text="알림" iconName="right" iconSize={20} />

        <View style={styles.IconRight}>
          <Icon name="right" size={20} color="#FFFAFA" />
        </View>
        <Text style={styles.menutext}>개인정보 보호</Text>

        <View style={styles.IconRight}>
          <Icon name="right" size={20} color="#FFFAFA" />
        </View>
        <Text style={styles.menutext}>관리 감독</Text>

        <View style={styles.IconRight}>
          <Icon name="right" size={20} color="#FFFAFA" />
        </View>
        <Text style={styles.menutext}>보안</Text>

        <View style={styles.IconRight}>
          <Icon name="right" size={20} color="#FFFAFA" />
        </View>
        <Text style={styles.menutext}>광고</Text>

        <View style={styles.IconRight}>
          <Icon name="right" size={20} color="#FFFAFA" />
        </View>
        <Text style={styles.menutext}>계정</Text>

        <View style={styles.IconRight}>
          <Icon name="right" size={20} color="#FFFAFA" />
        </View>
        <Text style={styles.menutext}>도움말</Text>

        <View style={styles.IconRight}>
          <Icon name="right" size={20} color="#FFFAFA" />
        </View>
        <Text style={styles.menutext}>정보</Text>
      </View>
      <View style={styles.footerbox}>
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
    // flex: 1,
    backgroundColor: "#000000",
    // alignItems: "center",
    // justifyContent: "center",
  },

  menutext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFAFA",
    // flexDirection: "column",
    // alignItems: "flex-start",
    // flexGrow: 1,
    // justify: "space-between",
    margin: 40,
  },

  menutextbox: {
    backgroundColor: "#000000",
    width: "100%",
    height: 400,
    justifyContent: "space-around",
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
    // flex: 1,
    backgroundColor: "#000000",
    height: 130,
    // width: "100%",
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
    // justifyContent: "center",
  },
});
