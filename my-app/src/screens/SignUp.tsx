import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
//import { useForm } from "react-hook-form";
import Icon from "react-native-vector-icons/Ionicons";

// function ExampleView(props) {
//   return <Icon name="ios-person" size={30} color="#4F8EF7" />;
// }

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
  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate("Login" as any);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "height" : undefined}
    >
      <View style={styles.inputContainer}>
        <Text
          style={{
            fontFamily: "BackToSchool",
            fontSize: 50,
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          instagram
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
        <Text style={{ fontFamily: "강원교육모두 Bold" }}>
          계정이 있으신가요?{" "}
          <Text onPress={goLogin} style={styles.gologin}>
            로그인
          </Text>
        </Text>
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
