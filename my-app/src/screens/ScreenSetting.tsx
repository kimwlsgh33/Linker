import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SearchBar } from "react-native-screens";

export default function ScreenSetting() {
  return (
    <ScrollView style={styles.container}>
      <SearchBar placeholder="검색" onChangeText={this.updateSearch} />
      <View style={styles.menutextbox}>
        <Text style={styles.menutext}>친구 팔로우 및 초대</Text>
        <Text style={styles.menutext}>알림</Text>
        <Text style={styles.menutext}>개인정보 보호</Text>
        <Text style={styles.menutext}>관리 감독</Text>
        <Text style={styles.menutext}>보안</Text>
        <Text style={styles.menutext}>광고</Text>
        <Text style={styles.menutext}>계정</Text>
        <Text style={styles.menutext}>도움말</Text>
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
        <Text style={styles.menutext}>로그아웃</Text>
        <Text style={styles.menutext}>계정 삭제</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    // alignItems: "center",
    // justifyContent: "center",
  },

  menutext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4682B4",
    // flexDirection: "column",
    // alignItems: "flex-start",
    // flexGrow: 1,
    // justify: "space-between",
    margin: 50,
  },

  menutextbox: {
    backgroundColor: "#FFFF00",
    width: "100%",
    height: 20,
    justifyContent: "space-around",
  },

  footerbox: {
    backgroundColor: "#00FF00",
    width: "100%",
    height: 10,
    justifyContent: "space-around",
  },

  Overfooterbox: {
    // flex: 1,
    backgroundColor: "#7B68EE",
    height: 10,
    // width: "100%",
    // justifyContent: "space-around",
  },

  Overfootertext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
  },
});
