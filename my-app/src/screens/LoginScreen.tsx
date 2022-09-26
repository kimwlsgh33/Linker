import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>instagram</Text>
      <View style={styles.inputContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "height" : "padding"}
        >
          <TextInput
            placeholder="전화번호, 이메일 주소 또는 사용자 이름"
            style={[styles.input, styles.buttonOutline]}
          />
          <TextInput
            placeholder="비밀번호"
            style={[styles.input, styles.buttonOutline]}
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <Text style={styles.text}>
          로그인 상세정보를 잊으셨나요?
          <Text style={styles.link}>로그인 도움말 보기.</Text>
        </Text>
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
                fontFamily: "강원교육모두 Bold",
                width: 50,
                textAlign: "center",
                color: "gray",
              }}
            >
              OR
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
        <View
          style={{
            marginTop: 125,
            borderTopWidth: 1,
            borderTopColor: "#ccc",
            width: "100%",
            position: "absolute",
          }}
        >
          <Text
            style={{
              fontFamily: "강원교육모두 Light",
              color: "gray",
              fontSize: 11,
              padding: 13,
              textAlign: "center",
            }}
          >
            계정이 없으신가요?
            <Text
              style={{
                fontFamily: "강원교육모두 Bold",
                color: "#404040",
                fontSize: 11,
                padding: 13,
                textAlign: "center",
              }}
            >
              가입하기.
            </Text>
          </Text>
        </View>
      </View>
    </View>
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
    marginTop: 5,
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
    padding: 13,
    textAlign: "center",
  },
  buttonOutlineText: {
    fontFamily: "강원교육모두 Bold",
    color: "#0782F9",
    fontSize: 13,
  },
  buttonOutline2: {
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
  },
});

export default LoginScreen;
