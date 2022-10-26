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

const CodeInput = ({ route }) => {
  const [code, setCode] = useState("");
  const [disable, setDisable] = useState(true);

  console.log(route);

  const navigation = useNavigation();
  const id = route.params.id;
  const phNumber = route.params.phNumber;

  const codeCheck = (code) => {
    setCode(code);
    const reg = /^[0-9]{6}$/;
    if (reg.test(code)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const codeContrast = (code) => {
    if (code === "123456") {
      navigation.navigate("PwRe" as any);
    } else {
      alert("인증번호가 일치하지 않습니다.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {id === "" ? phNumber + " 번" : id} 으로 전송된 인증 코드를
          입력하세요.
        </Text>
        <Text style={styles.desc}>
          <Text style={styles.nomb}>전화번호 변경</Text> 또는{" "}
          <Text style={styles.nomb}>SMS 재전송</Text>.
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
          onPress={() => codeContrast(code)}
        >
          <Text style={styles.buttonText}>다음</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: "GangwonEduAllBold",
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 5,
  },
  desc: {
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    marginBottom: 10,
    textAlign: "center",
    marginHorizontal: 50,
  },
  button: {
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 5,
    width: "100%",
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
    width: "100%",
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
