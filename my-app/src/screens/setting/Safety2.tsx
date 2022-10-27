import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import IconLeft from "../components/IconLeft";

function Safety2() {
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.Safety2textBox}>
        <Text style={styles.Safety2text}>로그인 보안</Text>
        <IconLeft iconName={"rocket1"} iconSize={20} text="로그인 활동" />
        <IconLeft iconName={"rocket1"} iconSize={20} text="로그인 활동" />
        <IconLeft
          iconName={"rocket1"}
          iconSize={20}
          text="저장된 로그인 정보"
        />
        <IconLeft iconName={"rocket1"} iconSize={20} text="2단계 인증" />
        <IconLeft
          iconName={"rocket1"}
          iconSize={20}
          text="Instagram에서 보낸 이메일"
        />
        <IconLeft iconName={"rocket1"} iconSize={20} text="계정 보안 확인" />
      </View>
      <Text style={styles.Safety2text}>데이터 및 내역</Text>
      <IconLeft iconName={"rocket1"} iconSize={20} text="앱 및 웹사이트" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },

  Safety2text: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
    margin: 10,
  },

  Safety2textBox: {
    borderBottomWidth: 1,
    borderBottomColor: "#d6d4d4",
  },
});

export default Safety2;
