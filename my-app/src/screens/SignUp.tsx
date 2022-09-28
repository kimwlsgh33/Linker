//import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback, Component, useRef } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
//import { useForm } from "react-hook-form";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function ExampleView(props) {
  return <Icon name="ios-person" size={30} color="#4F8EF7" />;
}

//const Form = {};
/* interface ISignUpForm {
  email: string;
  name: string;
  pw: string;
  checkPw: string;
  birth: string;
  phone: string;
} */

const SignUp = () => {
  const ref_input: Array<React.RefObject<TextInput>> = [];
  ref_input[0] = useRef(null);
  ref_input[1] = useRef(null);
  ref_input[2] = useRef(null);
  ref_input[3] = useRef(null);

  const onFocusNext = (index: number) => {
    if (ref_input[index + 1] && index < ref_input.length - 1) {
      ref_input[index + 1].current?.focus();
    }
    if (ref_input[index + 1] && index == ref_input.length - 1) {
      ref_input[index].current?.blur();
    }
  };

  const Stack = createStackNavigator();

  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("BottomTab" as any);
  };

  const goLogin = () => {
    navigation.navigate("Login" as any);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <Text
            style={{
              fontFamily: "BackToSchool",
              fontSize: 50,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Instagram
          </Text>
          <Text style={[styles.recommadText]}>
            친구들의 사진과 동영상을 보려면
          </Text>
          <Text style={[styles.recommadText]}>가입하세요.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.buttonOutline2]}>
              <Text style={styles.buttonOutlineText}>
                <Icon name="logo-facebook" size={15} color="#FFF" />
                &nbsp;&nbsp;Facebook으로 로그인
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#ccc",
                width: "90%",
              }}
            />
            <View>
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  color: "gray",
                  marginTop: 10,
                  marginBottom: 10,
                  fontFamily: "강원교육모두 Bold",
                  fontSize: 15,
                }}
              >
                또는
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#ccc",
                width: "90%",
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="휴대폰 번호 또는 이메일 주소"
              style={[styles.input, styles.buttonOutline]}
              returnKeyType="next"
              ref={ref_input[0]}
              onSubmitEditing={() => {
                ref_input[1].current.focus();
              }}
            />
            <TextInput
              placeholder="성명"
              style={[styles.input, styles.buttonOutline]}
              secureTextEntry
              returnKeyType="next"
              ref={ref_input[1]}
              onSubmitEditing={() => {
                ref_input[2].current.focus();
              }}
            />
            <TextInput
              placeholder="사용자 이름"
              style={[styles.input, styles.buttonOutline]}
              secureTextEntry
              returnKeyType="next"
              ref={ref_input[2]}
              onSubmitEditing={() => {
                ref_input[3].current.focus();
              }}
            />
            <TextInput
              placeholder="비밀번호"
              style={[styles.input, styles.buttonOutline]}
              secureTextEntry
              ref={ref_input[3]}
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.buttonOutline2]}>
              <Text style={styles.buttonOutlineText}>가입</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.policyView}>
          <Text style={styles.policyText}>
            가입하면 Instagram의{" "}
            <Text style={styles.policyTextIm}>약관, 데이터</Text>
          </Text>
          <Text style={styles.policyText}>
            <Text style={styles.policyTextIm}>정책</Text> 및{" "}
            <Text style={styles.policyTextIm}>쿠키 정책</Text>에 동의하게 됩니
          </Text>
          <Text style={styles.policyText}>다.</Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={goLogin}>
            <Text style={{ fontFamily: "강원교육모두 Bold" }}>
              계정이 있으신가요? <Text style={styles.gologin}>로그인</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
    fontFamily: "강원교육모두 Light",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    // backgroundColor: "#0782F9",
    height: 50,
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
    borderRadius: 10,

    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#f9f9f9",
    marginTop: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  text: {
    color: "#404040",
    fontSize: 10,
    padding: 16,
    textAlign: "center",
  },
  link: {
    color: "#404040",
    fontWeight: "700",
    fontSize: 10,
    padding: 16,
    textAlign: "center",
  },
  buttonOutlineText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "강원교육모두 Bold",
  },
  buttonOutline2: {
    backgroundColor: "#0782F9",
    borderColor: "#fff",
    borderWidth: 1,
  },
  bottomView: {
    marginTop: 40,
  },
  gologin: {
    color: "#0782F9",
  },
  recommadText: {
    fontSize: 20,
    color: "#999",
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "강원교육모두 Bold",
  },
  policyView: {
    marginTop: 15,
  },
  policyText: {
    fontSize: 18,
    color: "#999",
    textAlign: "center",
    fontFamily: "강원교육모두 Bold",
  },
  policyTextIm: {
    fontWeight: "bold",
  },
});
export default SignUp;
