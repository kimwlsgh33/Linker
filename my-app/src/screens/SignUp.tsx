import { useNavigation } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
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
} from "react-native";
import { useForm } from "react-hook-form";
import Icon from "react-native-vector-icons/Ionicons";

function ExampleView(props) {
  return <Icon name="ios-person" size={30} color="#4F8EF7" />;
}

const Form = {};
/* interface ISignUpForm {
  email: string;
  name: string;
  pw: string;
  checkPw: string;
  birth: string;
  phone: string;
} */

const SignUp = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Text
          style={{
            fontFamily: "Lobster-Regular",
            fontSize: 55,
          }}
        >
          Instagram
        </Text>
        <Text></Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonOutline2]}>
            <Text style={styles.buttonOutlineText}>Facebook으로 로그인</Text>
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
        <TextInput
          placeholder="휴대폰 번호 또는 이메일 주소"
          style={[styles.input, styles.buttonOutline]}
        />
        <TextInput
          placeholder="성명"
          style={[styles.input, styles.buttonOutline]}
          secureTextEntry
        />
        <TextInput
          placeholder="사용자 이름"
          style={[styles.input, styles.buttonOutline]}
          secureTextEntry
        />
        <TextInput
          placeholder="비밀번호"
          style={[styles.input, styles.buttonOutline]}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonOutline2]}>
            <Text style={styles.buttonOutlineText}>가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
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
    width: "60%",
  },
  input: {
    backgroundColor: "ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    // backgroundColor: "#0782F9",
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 15,
    borderRadius: 10,

    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#f9f9f9",
    marginTop: 5,
    borderColor: "#ccc",
    borderWidth: 1,
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
    fontSize: 12,
    fontWeight: "700",
  },
  buttonOutline2: {
    backgroundColor: "#0782F9",
    borderColor: "#fff",
    borderWidth: 1,
  },
  mainText: {
    fontFamily: "Lobster-Regular",
    fontSize: 40,
  },
});
export default SignUp;
