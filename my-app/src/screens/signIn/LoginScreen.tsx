import { useCallback, useRef, useState } from "react";
import React from "react";
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
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../../models";
import { Auth } from "aws-amplify";
import { useUserContext } from "../../hooks/UserContext";
import CryptoJS from "crypto-js";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);

  const { setUser } = useUserContext();
  const goHome = () => {
    navigation.navigate("HomeTab" as any);
  };

  const username = id;

  const forPhone = (id) => {
    const result = "+82" + id.slice(1);
    return result;
  };

  const SignIn = async () => {
    const regExp = /^[a-zA-Z0-9%-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    // const newPW = getHashedPassword(password);
    const SignInEmail = async () => {
      try {
        const user = await Auth.signIn(username, password);
        const UserInfo = {
          username: user.attributes.phone_number,
          name: user.attributes.name,
          nickname: user.attributes.nickname,
          password: user.attributes.password,
        };
        setUser(UserInfo);
      } catch (error) {
        alert("이메일 또는 비밀번호를 확인해 주세요.");
        console.log("error signing in", error);
        return;
      }
      navigation.navigate("Welcome" as any);
    };
    const SignInPhone = async () => {
      try {
        const user = await Auth.signIn(forPhone(username), password);
        const UserInfo = {
          username: user.attributes.phone_number,
          name: user.attributes.name,
          nickname: user.attributes.nickname,
          password: user.attributes.password,
        };
        setUser(UserInfo);
        console.log(user);
      } catch (error) {
        alert("전화번호 또는 비밀번호를 확인해 주세요.");
        console.log("error signing in", error);
        return;
      }
      navigation.navigate("Welcome" as any);
    };
    if (regExp.test(username)) {
      SignInEmail();
    } else {
      SignInPhone();
    }
  };

  const handleIdChange = (text) => {
    setId(text);
  };
  const handlePwChange = (text) => {
    setPassword(text);
  };

  const idCheck = useCallback((id) => {
    handleIdChange(id);

    const regExp = /^[a-zA-Z0-9%-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    const phnum = /^[0-9]{10,11}$/;

    if (regExp.test(id) || phnum.test(id)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, []);

  const pwCheck = useCallback((password) => {
    handlePwChange(password);
    if (password.length < 8) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, []);

  const [text, setText] = useState("");

  const onChange = (e: any) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  const ref_input: Array<React.RefObject<TextInput>> = [];
  ref_input[0] = useRef(null);
  ref_input[1] = useRef(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.logo}>LINKER</Text>
        <View style={styles.inputContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : undefined}
          >
            <TextInput
              returnKeyType="next"
              ref={ref_input[0]}
              onChange={onChange}
              value={text}
              onSubmitEditing={() => {
                ref_input[1].current.focus();
              }}
              placeholder="전화번호, 이메일 주소 또는 사용자 이름"
              style={[styles.input, styles.buttonOutline]}
              onChangeText={idCheck}
            />
            <TextInput
              returnKeyType="next"
              ref={ref_input[1]}
              onChange={onChange}
              value={text}
              onSubmitEditing={() => null}
              placeholder="비밀번호"
              style={[styles.input, styles.buttonOutline]}
              onChangeText={pwCheck}
              secureTextEntry
            />
            <View style={styles.buttonContainer}>
              <Pressable
                onPress={() => {
                  navigation.navigate("HomeTab" as any), onReset(), SignIn();
                }}
                style={({ pressed }) => [
                  styles.button,
                  Platform.select({
                    ios: { opacity: pressed ? 0.5 : 1 },
                  }),
                  disable ? { opacity: 0.5 } : {},
                ]}
                android_ripple={{ color: "#FFF" }}
                disabled={disable}
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
    fontFamily: "BackToSchoolRegular",
    color: "black",
    fontSize: 50,
    marginBottom: 18,
  },
  inputContainer: {
    width: "90%",
  },
  input: {
    fontFamily: "GangwonEduAllLight",
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
    fontFamily: "GangwonEduAllBold",
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
    fontFamily: "GangwonEduAllBold",
    color: "white",
    fontSize: 16,
  },
  text: {
    fontFamily: "GangwonEduAllLight",
    color: "#404040",
    fontSize: 11,
    padding: 13,
    textAlign: "center",
  },
  link: {
    fontFamily: "GangwonEduAllBold",
    color: "#404040",
    fontSize: 11,
  },
  buttonOutlineText: {
    fontFamily: "GangwonEduAllBold",
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
    fontFamily: "GangwonEduAllLight",
    color: "gray",
    fontSize: 11,
    position: "absolute",
    marginTop: 148,
    paddingRight: 40,
  },
  text3: {
    fontFamily: "GangwonEduAllBold",
    color: "#404040",
    fontSize: 11,
    position: "absolute",
    marginTop: 148,
    marginLeft: 20,
  },
});

export default LoginScreen;
