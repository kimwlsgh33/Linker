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

const PwRe = () => {
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");
  const [pwGood, setPwGood] = useState(false);
  const [disable, setDisable] = useState(true);

  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("HomeTab" as any);
  };

  const pwCheck = (pw) => {
    setPw(pw);
    const reg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (reg.test(pw)) {
      setPwGood(true);
    } else {
      setPwGood(false);
    }
  };

  const pwContrast = (rePw) => {
    setRePw(rePw);
    if (rePw === pw && pwGood) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>변경하실 새 비밀번호를 입력해주세요.</Text>
        <TextInput
          style={styles.input}
          placeholder="새 비밀번호"
          value={pw}
          onChangeText={pwCheck}
          secureTextEntry
        ></TextInput>
        {pw !== "" && (
          <Text style={styles.desc}>
            {pwGood ? (
              <Text style={styles.descb}>안전한 비밀번호입니다.</Text>
            ) : (
              <Text style={styles.descr}>
                비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이상이어야
                합니다.
              </Text>
            )}
          </Text>
        )}
        <Text style={styles.title}>다시 한번 새 비밀번호를 입력해주세요.</Text>
        <TextInput
          style={styles.input}
          placeholder="새 비밀번호 다시 입력"
          value={rePw}
          onChangeText={pwContrast}
          secureTextEntry
        ></TextInput>
        {rePw !== "" && (
          <Text style={styles.desc}>
            {disable ? (
              <Text style={styles.descr}>비밀번호가 일치하지 않습니다.</Text>
            ) : (
              <Text style={styles.descb}>비밀번호가 일치합니다.</Text>
            )}
          </Text>
        )}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
            disable ? { opacity: 0.5 } : {},
          ]}
          disabled={disable}
          android_ripple={{ color: "#FFF" }}
          onPress={goHome}
        >
          <Text style={styles.buttonText}>홈으로</Text>
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
    marginHorizontal: 20,
  },
  title: {
    fontFamily: "GangwonEduAllBold",
    fontSize: 22,
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 5,
  },
  desc: {
    fontFamily: "GangwonEduAllLight",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    marginHorizontal: 50,
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
  button: {
    backgroundColor: "#0782F9",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "GangwonEduAllBold",
  },
  descr: {
    fontFamily: "GangwonEduAllLight",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    color: "red",
  },
  descb: {
    fontFamily: "GangwonEduAllLight",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    color: "#0782F9",
  },
});

export default PwRe;
