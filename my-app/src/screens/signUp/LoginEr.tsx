import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Linking,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Ionicons";

const LoginEr = () => {
  const [isId, setIsId] = useState(true);
  const [id, setId] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [disable, setDisable] = useState(true);
  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate("Login" as any);
  };
  const goCodeCheck = () => {
    navigation.navigate("CodeCheck" as any);
  };

  const idCheck = (id) => {
    const reg = /[a-zA-Z0-9]{2,20}$/;
    setId(id);
    if (reg.test(id)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const phNumberCheck = (phNumber) => {
    setPhNumber(phNumber);
    const reg = /^[0-9]{10,11}$/;
    if (reg.test(phNumber)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
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
      <View style={styles.componentView}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Pressable
              style={({ pressed }) => [
                styles.choice,
                Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
              ]}
              android_ripple={{ color: "#FFF" }}
              onPress={() => setIsId(true)}
            >
              <Text>사용자 이름</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.choice,
                Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
              ]}
              android_ripple={{ color: "#FFF" }}
              onPress={() => setIsId(false)}
            >
              <Text>전화번호</Text>
            </Pressable>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            {isId ? (
              <TextInput
                style={styles.input}
                placeholder="사용자 이름을 입력하세요."
                onChangeText={(id) => idCheck(id)}
              />
            ) : (
              <TextInput
                style={styles.input}
                placeholder="전화번호를 입력하세요."
                onChangeText={(phNumber) => phNumberCheck(phNumber)}
              />
            )}
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
            disable ? { opacity: 0.5 } : {},
          ]}
          disabled={disable}
          android_ripple={{ color: "#FFF" }}
          onPress={goCodeCheck}
        >
          <Text style={styles.btn_txt}>다음</Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text
          style={styles.noma}
          onPress={() => Linking.openURL("http://google.com")}
        >
          비밀번호를 재설정할 수 없나요?
        </Text>
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
    marginTop: 50,
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
    marginBottom: 20,
    marginTop: 20,
  },
  componentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  choice: {
    backgroundColor: "tomato",
    borderColor: "black",
    width: "50%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
    marginTop: 5,
  },
  input: {
    width: 360,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    alignSelf: "center",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#0782F9",
    width: 350,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btn_txt: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "GangwonEduAllBold",
  },
});

export default LoginEr;
