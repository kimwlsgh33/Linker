import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { LinearGradient } from "expo-linear-gradient";

const CodeInput = ({ route }) => {
  const [code, setCode] = useState("");
  const [disable, setDisable] = useState(true);

  const navigation = useNavigation();
  const username = route.params.username;
  const name = route.params.name;
  const nick = route.params.nick;
  const password = route.params.password;

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
      navigation.navigate("Birthday" as any, {
        username: username,
        name: name,
        nick: nick,
        password: password,
      });
      console.log(password);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }
  const codeCheck = (code) => {
    setCode(code);
    const reg = /^[0-9]{6}$/;
    if (reg.test(code)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username);
      console.log("code resent successfully");
    } catch (err) {
      alert(err.message);
    }
  }

  //  id로 인증번호를 분류하는 함수를 써야할수도있음.
  // const typeCheck = (id) => {
  //   setId(username);
  //   const reg = /^[a-zA-Z0-9%-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
  //   if(reg.test(id)) {

  //   }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={["pink", "white"]}
        style={styles.LinearGradient}
        locations={[0, 0.9]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.title}>
          {username} 으로 전송된 인증 코드를 입력하세요.
        </Text>
        <Text style={styles.desc}>
          인증 코드는 6자리 숫자입니다. 인증 코드를 받지 못하셨다면 재전송을
          눌러 다시 받으세요.
        </Text>

        <Text style={styles.nomb} onPress={resendConfirmationCode}>
          재전송
        </Text>
        <TextInput
          style={styles.input}
          placeholder="인증 코드"
          onChangeText={codeCheck}
        ></TextInput>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
            disable ? { opacity: 0.5 } : {},
          ]}
          disabled={disable}
          android_ripple={{ color: "#FFF" }}
          onPress={confirmSignUp}
        >
          <Text style={styles.buttonText}>다음</Text>
        </Pressable>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "GangwonEduAllBold",
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 35,
  },
  desc: {
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    marginBottom: 10,
    textAlign: "center",
    marginHorizontal: 75,
  },
  button: {
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 5,
    width: "85%",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "GangwonEduAllBold",
  },
  nomb: {
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    color: "#0782F9",
  },
  input: {
    width: "85%",
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
    marginTop: 20,
  },
});

export default CodeInput;