import { useRef, useState } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Keyboard,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/Ionicons";

const LoginScreen = () => {
  const [id, setId] = useState(""); // ui바꿀때 사용
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);

  const ref_input: Array<React.RefObject<TextInput>> = [];
  ref_input[0] = useRef(null); //주소값 저장
  ref_input[1] = useRef(null);

  const onFocusNext = (index: number) => {
    if (ref_input[index + 1] && index < ref_input.length - 1) {
      ref_input[index + 1].current?.focus();
    }
    if (ref_input[index + 1] && index == ref_input.length - 1) {
      ref_input[index].current?.blur();
    }
  };

  const handleIdChange = (text) => {
    setId(text);
  };
  const handlePwChange = (text) => {
    setPassword(text);
  };

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.logo}>instagram</Text>
        <View style={styles.inputContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : undefined}
          >
            <TextInput
              returnKeyType="next"
              ref={ref_input[0]}
              onSubmitEditing={() => {
                ref_input[1].current.focus();
              }}
              onChangeText={handleIdChange}
              placeholder="전화번호, 이메일 주소 또는 사용자 이름"
              style={[styles.input, styles.buttonOutline]}
            />
            <TextInput
              returnKeyType="next"
              ref={ref_input[1]}
              onSubmitEditing={Keyboard.dismiss}
              onChangeText={handlePwChange}
              placeholder="비밀번호"
              style={[styles.input, styles.buttonOutline]}
              secureTextEntry
            />
            <View style={styles.buttonContainer}>
              <Pressable
                onPress={() => navigation.navigate("Instagram")}
                style={({ pressed }) => [
                  styles.button,
                  Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
                  disable ? { opacity: 0.5 } : {},
                ]}
                android_ripple={{ color: "#FFF" }}
                // disabled={disable}
              >
                <Text style={styles.buttonText}>로그인</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
          <Text style={styles.text}>
            로그인 상세정보를 잊으셨나요?
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={styles.link}
            >
              로그인 도움말 보기.
            </Text>
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.bar} />
            <View>
              <Text style={styles.barText}>OR</Text>
            </View>
            <View style={styles.bar} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.buttonOutline2,
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <Text style={styles.buttonOutlineText}>
              <Icon name="logo-facebook" size={15} color="#0782F9" />
              Facebook으로 로그인
            </Text>
          </Pressable>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.bar2}></View>
          <Text style={styles.text2}>계정이 없으신가요?</Text>
          <View>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
              ]}
            >
              <Text
                onPress={() => navigation.navigate("SignUp")}
                style={styles.text3}
              >
                가입하기.
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontFamily: "BackToSchool",
    color: "black",
    fontSize: 50,
    marginBottom: 18,
  },
  inputContainer: {
    width: "90%",
  },
  input: {
    fontFamily: "강원교육모두 Light",
    backgroundColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  bar: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    width: "90%",
  },
  barText: {
    fontFamily: "강원교육모두 Bold",
    width: 50,
    textAlign: "center",
    color: "gray",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#f9f9f9",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: "강원교육모두 Bold",
    color: "white",
    fontSize: 16,
  },
  text: {
    fontFamily: "강원교육모두 Light",
    color: "#404040",
    fontSize: 11,
    padding: 13,
    textAlign: "center",
  },
  link: {
    fontFamily: "강원교육모두 Bold",
    color: "#404040",
    fontSize: 11,
  },
  buttonOutlineText: {
    fontFamily: "강원교육모두 Bold",
    color: "#0782F9",
    fontSize: 13,
  },
  buttonOutline2: {
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  bar2: {
    marginTop: 130,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    width: "100%",
    position: "absolute",
  },
  text2: {
    fontFamily: "강원교육모두 Light",
    color: "gray",
    fontSize: 11,
    position: "absolute",
    marginTop: 143,
    paddingRight: 40,
  },
  text3: {
    fontFamily: "강원교육모두 Bold",
    color: "#404040",
    fontSize: 11,
    position: "absolute",
    marginTop: 143,
    marginLeft: 20,
  },
});

export default LoginScreen;
