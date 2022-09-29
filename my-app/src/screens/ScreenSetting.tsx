import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import TextAndIcon from "../components/TextAndIcon";
import IconLeft from "../components/IconLeft";
import TextStyle from "../components/TextStyle";

export default function ScreenSetting() {
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
        <IconLeft iconName={"rocket1"} iconSize={20} text="Meta" />
        <TextStyle text="계정 센터" />
        <Text style={styles.footertext}>
          {`스토리 및 게시물 공유, 로그인 등 Instagram, Facebook 앱,\nMessenger간에 연결된 환경에 대한 설정을 관리하세요.`}
        </Text>
      </View>
      <View style={styles.Overfooterbox}>
        <Text style={styles.Overfootertext}>로그인</Text>
        <Text style={styles.Overfootertext}>계정 삭제</Text>
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

  footerbox: {
    backgroundColor: "#000000",
    justifyContent: "space-between",
    borderBottomColor: "#333333",
    borderWidth: 1,
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
    marginLeft: 15,
    marginBottom: 20,
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
    // width: 390,
  },
});
