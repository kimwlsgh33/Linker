import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Linking,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";
import ErrTab from "../components/ErrTab";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const LoginEr = () => {
  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate("Login" as any);
  };

  return (
    <Pressable
      style={{ height: "100%", width: "100%" }}
      onPress={Keyboard.dismiss}
    >
      <KeyboardAvoidingView style={styles.container}>
        <Feather name="lock" size={50} color="#000" />
        <Text style={styles.Title}>로그인에 문제가 있나요?</Text>
        <Text style={styles.desc}>
          전화번호를 입력하면 계정에 다시 액세스할 수 있는 로그인 코드가
          전송됩니다.
        </Text>
      </KeyboardAvoidingView>
      <ErrTab />
      <View style={styles.container}>
        <Text style={styles.noma}>비밀번호를 재설정할 수 없나요?</Text>
        <Text style={styles.or}>또는</Text>
        <Text
          style={styles.nomb}
          onPress={() => Linking.openURL("http://facebook.com")}
        >
          <Icon name="logo-facebook" size={15} color="#0782F9" /> Facebook으로
          로그인
        </Text>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.nomb} onPress={goLogin}>
          로그인으로 돌아가기
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: 20,
    fontFamily: "GangwonEduAllBold",
    marginBottom: 20,
    marginTop: 20,
  },
  desc: {
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    marginBottom: 10,
    textAlign: "center",
    marginHorizontal: 50,
  },
  noma: {
    fontSize: 12,
    fontFamily: "GangwonEduAllLight",
    color: "#0782F9",
  },
  nomb: {
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    color: "#0782F9",
  },
  or: {
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    color: "#000",
    marginTop: 20,
    marginBottom: 20,
  },
  bottomView: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default LoginEr;
