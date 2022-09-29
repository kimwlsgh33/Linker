import { useRef } from "react";
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/Ionicons";

const LoginScreen = () => {
  const ref_input: Array<React.RefObject<TextInput>> = [];
  ref_input[0] = useRef(null);
  ref_input[1] = useRef(null);

  // const onFocusNext = (index: number) => {
  //   if (ref_input[index + 1] && index < ref_input.length - 1) {
  //     ref_input[index + 1].current?.focus();
  //   }
  //   if (ref_input[index + 1] && index == ref_input.length - 1) {
  //     ref_input[index].current?.blur();
  //   }
  // };

  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("BottomTab" as any);
  };

  const goSignUp = () => {
    navigation.navigate("SignUp" as any);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.logo}>instagram</Text>
        <View style={styles.inputContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : undefined}
          >
            <TextInput
              ref={ref_input[0]}
              onSubmitEditing={() => {
                ref_input[1].current.focus();
              }}
              placeholder="전화번호, 이메일 주소 또는 사용자 이름"
              style={[styles.input, styles.buttonOutline]}
            />
            <TextInput
              ref={ref_input[1]}
              onSubmitEditing={() => null}
              placeholder="비밀번호"
              style={[styles.input, styles.buttonOutline]}
              secureTextEntry
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={goHome} style={styles.button}>
                <Text style={styles.buttonText}>로그인</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <Text style={styles.text}>
            로그인 상세정보를 잊으셨나요?
            <Text onPress={goSignUp} style={styles.link}>
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
          <TouchableOpacity style={[styles.button, styles.buttonOutline2]}>
            <Text style={styles.buttonOutlineText}>
              <Icon name="logo-facebook" size={15} color="#0782F9" />
              Facebook으로 로그인
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.bar2}></View>
          <Text style={styles.text2}>계정이 없으신가요?</Text>
          <View>
            <TouchableOpacity>
              <Text onPress={goSignUp} style={styles.text3}>
                가입하기.
              </Text>
            </TouchableOpacity>
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
