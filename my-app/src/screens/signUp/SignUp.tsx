//import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { LinearGradient } from "expo-linear-gradient";
import { SHA256 } from "crypto-js";
import Base64 from "crypto-js/enc-base64";

// function ExampleView(props) {
//   return <Icon name="ios-person" size={30} color="#4F8EF7" />;
// }

const SignUp = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const [idCheck, setIdCheck] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [nickCheck, setNickCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const hashDigest = SHA256("1234" + password);
  // function getHashedPassword(password) {
  //   let random = CryptoJS.lib.WordArray.random(128 / 8);
  //   return CryptoJS.SHA256(password, random).toString();
  // }
  const ref_input: Array<React.RefObject<TextInput>> = [];
  ref_input[0] = useRef(null);
  ref_input[1] = useRef(null);
  ref_input[2] = useRef(null);
  ref_input[3] = useRef(null);

  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate("Login" as any);
  };

  // 핸드폰 번호를 국가번호와 함께 가져오기 위한 함수
  const forPhone = (id) => {
    const result = "+82" + id.slice(1);
    return result;
  };

  // 회원가입 로직.
  const goCodeInput = async () => {
    const regExp = /^[a-zA-Z0-9%-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

    // amplify email 가입
    const newPw = Base64.stringify(hashDigest);
    const SignUpEmail = async () => {
      try {
        // const newPW = getHashedPassword(password);
        // if (DataStore.query(User, (user) => user.username("eq", id))) {
        //   alert("이미 존재하는 아이디입니다.");
        //   return;
        // } else {
        const { user } = await Auth.signUp({
          username: id,
          password: newPw,
          attributes: {
            email: id,
            name: name,
            nickname: nick,
          },
        });
      } catch (error) {
        console.log("error signing up:", error);
        if (error.code === "UsernameExistsException") {
          alert("이미 존재하는 이메일입니다.");
          return;
        } else {
          alert("Unknown error. ㅋㅋ");
          return;
        }
      }
      navigation.navigate("CodeInput" as any, {
        username: id,
        name: name,
        nick: nick,
        password: newPw,
      });
    };

    // amplify phone 가입
    const SignUpPhoneNumber = async () => {
      // 전화번호 포맷 수정
      const formattedPhone = forPhone(id);
      // 가입 로직
      try {
        const { user } = await Auth.signUp({
          username: formattedPhone,
          password: password,
          attributes: {
            phone_number: formattedPhone,
            name: name,
            nickname: nick,
          },
        });
        console.log("newPw", newPw);
      } catch (error) {
        // console.log("error signing up:", error);
        if (error.code === "UsernameExistsException") {
          alert("이미 존재하는 전화번호입니다.");
          return;
        } else {
          alert("Unknown error. ㅋㅋ");
          return;
        }
      }
      navigation.navigate("CodeInput" as any, {
        username: formattedPhone,
        name: name,
        nick: nick,
        password: newPw,
      });
    };

    // 형식 검사 후, 가입 로직 실행.
    if (regExp.test(id)) {
      SignUpEmail();
    } else {
      SignUpPhoneNumber();
    }
  };

  // 이메일 인지 전화번호인지 체크하여 상태 저장해서 문구띄워줄때 사용.
  const handleIdChange = (text) => {
    console.log(text);
    setErrorMsg("");
    const reg = /^[a-zA-Z0-9%-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    const phnum = /^[0-9]{10,11}$/;

    // email check
    if (!reg.test(text) && !phnum.test(text)) {
      setErrorMsg("올바른 형식이 아닙니다.");
    } else {
      setIdCheck(true);
    }
  };

  const nmCheck = (text) => {
    setName(text);
    const regExp = /^[a-zA-Z0-9\s]{2,30}$/;
    if (regExp.test(name)) {
      setNameCheck(true);
    } else {
      setNameCheck(false);
    }
  };

  const nkCheck = (nick) => {
    setNick(nick);
    const regExp = /^[a-zA-Z0-9%-_\s]{1,20}$/;
    if (regExp.test(nick)) {
      setNickCheck(true);
    } else {
      setNickCheck(false);
    }
  };

  const pwCheck = (password) => {
    setPassword(password);
    const reg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/;
    if (reg.test(password)) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  };

  // 버튼을 활성화 하는 함수
  const allCheck = () => {
    if (idCheck && nameCheck && nickCheck && passwordCheck) {
      setDisable(false);
      console.log(id);
    } else {
      setDisable(true);
    }
  };
  useEffect(() => {
    allCheck();
  }, [idCheck, nameCheck, nickCheck, passwordCheck]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={["pink", "white"]}
        style={styles.LinearGradient}
        locations={[0, 0.9]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.inputContainer}>
          <Text
            style={{
              fontFamily: "BackToSchoolRegular",
              fontSize: 50,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            LINKER
          </Text>
          <Text style={[styles.recommadText]}>
            인플루언서와 소비자를 연결해주는
          </Text>
          <Text style={[styles.recommadText]}>당신의 링크를 공유해보세요.</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.buttonOutline2,
                Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
              ]}
              onPress={() => Linking.openURL("http://facebook.com")}
              android_ripple={{ color: "#FFF" }}
            >
              <Text style={styles.buttonOutlineText}>
                <Icon name="logo-facebook" size={15} color="#FFF" />
                &nbsp;&nbsp;Facebook으로 로그인
              </Text>
            </Pressable>
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
                  fontFamily: "GangwonEduAllBold",
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
                handleIdChange(id);
              }}
              onChangeText={setId}
              onEndEditing={() => handleIdChange(id)}
            />
            {errorMsg && <Text style={styles.descr}>{errorMsg}</Text>}
            <TextInput
              placeholder="성명"
              style={[styles.input, styles.buttonOutline]}
              returnKeyType="next"
              ref={ref_input[1]}
              onSubmitEditing={() => {
                ref_input[2].current.focus();
              }}
              onChangeText={nmCheck}
            />
            {name !== "" && (
              <Text style={styles.input}>
                {nameCheck ? (
                  <Text style={styles.descb}>
                    사용하실 수 있는 이름 입니다.
                  </Text>
                ) : (
                  <Text style={styles.descr}>
                    영문, 숫자 2~30자로 입력해 주세요.
                  </Text>
                )}
              </Text>
            )}
            <TextInput
              placeholder="사용자 이름"
              style={[styles.input, styles.buttonOutline]}
              returnKeyType="next"
              ref={ref_input[2]}
              onSubmitEditing={() => {
                ref_input[3].current.focus();
              }}
              onChangeText={nkCheck}
            />
            {nick !== "" && (
              <Text style={styles.input}>
                {nickCheck ? (
                  <Text style={styles.descb}>
                    사용하실 수 있는 사용자 이름 입니다.
                  </Text>
                ) : (
                  <Text style={styles.descr}>
                    영문, 숫자 1~20자로 입력해 주세요.
                  </Text>
                )}
              </Text>
            )}
            <TextInput
              placeholder="비밀번호"
              style={[styles.input, styles.buttonOutline]}
              secureTextEntry
              ref={ref_input[3]}
              //onSubmitEditing={Keyboard.dismiss}
              onChangeText={pwCheck}
              onEndEditing={allCheck}
            />
            {password !== "" && (
              <Text style={styles.input}>
                {passwordCheck ? (
                  <Text style={styles.descb}>
                    사용하실 수 있는 비밀번호 입니다.
                  </Text>
                ) : (
                  <Text style={styles.descr}>
                    영문, 숫자, 특수문자를 포함한 8자 이상으로 입력해 주세요.
                  </Text>
                )}
              </Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            {/* <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.buttonOutline2,
                Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
                disable ? { opacity: 0.5 } : {},
              ]}
              android_ripple={{ color: "#FFF" }}
              disabled={disable}
              onPress={goCodeInput}
            >
              <Text style={styles.buttonOutlineText}>가입</Text>
            </Pressable> */}
          </View>
        </View>
        <View style={styles.policyView}>
          <Text style={styles.policyText}>
            가입하면 LINKER의{" "}
            <Text style={styles.policyTextIm}>데이터 정책</Text>
          </Text>
          <Text style={styles.policyText}>
            {" "}
            및 <Text style={styles.policyTextIm}>쿠키 정책</Text>에 동의하게
            됩니다.
          </Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={goLogin}>
            <Text style={{ fontFamily: "GangwonEduAllBold" }}>
              계정이 있으신가요? <Text style={styles.gologin}>로그인</Text>
            </Text>
          </TouchableOpacity>
        </View>
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
    fontFamily: "GangwonEduAllLight",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
    fontFamily: "GangwonEduAllBold",
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
    fontFamily: "GangwonEduAllBold",
  },
  policyView: {
    marginTop: 15,
  },
  policyText: {
    fontSize: 18,
    color: "#999",
    textAlign: "center",
    fontFamily: "GangwonEduAllBold",
  },
  policyTextIm: {
    fontWeight: "bold",
  },
  descr: {
    fontFamily: "GangwonEduAllLight",
    fontSize: 12,
    textAlign: "center",
    color: "red",
  },
  descb: {
    fontFamily: "GangwonEduAllLight",
    fontSize: 12,
    textAlign: "center",
    color: "#0782F9",
  },
});
export default SignUp;
