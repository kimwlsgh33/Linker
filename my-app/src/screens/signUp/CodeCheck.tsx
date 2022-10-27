import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Keyboard,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const CodeCheck = ({ route }) => {
  const navigation = useNavigation();

  const [id, setId] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [isId, setIsId] = useState(true);
  const [disable, setDisable] = useState(true);

  const goLogin = () => {
    navigation.navigate("Login" as any);
  };

  const goCodeInput = () => {
    navigation.navigate("CodeInput" as any, {
      id: id,
      phNumber: phNumber,
    });
  };

  const idCheck = (id) => {
    const reg = /^[a-zA-Z0-9%-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
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
      style={{ height: "100%", width: "100%", flex: 1 }}
      onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        <Text style={styles.Title}>이메일 주소 또는 전화번호 입력</Text>
        <View>
          {/* <ErrTab
            locate={goCodeInput}
            names={["이메일", "전화번호"]}
            pHolder={["이름을 입력하세요.", "전화번호를 입력하세요."]}
            reg={[
              /^[a-zA-Z0-9%-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
              /^[0-9]{10,11}$/,
            ]}
            id={id}
            phNumber={phNumber}
            setId={setId}
            setPhNumber={setPhNumber}
          /> */}
          <View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
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
                <Text>이메일</Text>
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
                  placeholder="이메일을 입력하세요."
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
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
            disable ? { opacity: 0.5 } : {},
          ]}
          disabled={disable}
          android_ripple={{ color: "#FFF" }}
          onPress={goCodeInput}
        >
          <Text style={styles.btn_txt}>다음</Text>
        </Pressable>
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
    marginTop: 100,
  },
  Title: {
    fontSize: 30,
    fontFamily: "GangwonEduAllBold",
    marginBottom: 40,
  },
  nomb: {
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    color: "#0782F9",
  },
  bottomView: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  componentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  btn: {
    backgroundColor: "#0782F9",
    width: 350,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 100,
  },
  btn_txt: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "GangwonEduAllBold",
  },
  choice: {
    backgroundColor: "tomato",
    width: "50%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
    marginTop: 20,
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
});

export default CodeCheck;
