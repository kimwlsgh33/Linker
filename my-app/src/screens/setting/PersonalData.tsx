import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Linking,
  Modal,
  ImageBackground,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import TextAndIcon from "../../components/TextAndIcon";
import IconLeft from "../../components/IconLeft";
import TextStyle from "../../components/TextStyle";

function PersonalData() {

  const [text, onChangeText] = useState("Useless Text");

  return (
    <View style={styles.container}>
      <View style={styles.PersonalTopViewBox}>
        <View style={styles.PersonalTopView}>
          <Text style={styles.PersonalTop}>
            비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인 정보를
            입력하세요. 공개 프로필에 포함되지 않습니다.
          </Text>
        </View>
    </View>
    <View>
      <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="검색"
            placeholderTextColor="#FFFAFA"
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  PersonalTop: {
    color: "#FFFAFA",
    textAlign: "center",
    fontWeight: "bold",
  },

  PersonalTopView: {
    width: "78%",
  },

  PersonalTopViewBox: {
    width:"100%",
    alignItems:"center",
    borderWidth: 1,
    borderTopColor: "#333333",
    borderBottomColor: "#333333",
    padding: 5,
  }

});

export default PersonalData;
