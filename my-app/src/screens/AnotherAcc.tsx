import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AnotherAcc = () => {
  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("Home" as any);
  };

  const goLogin = () => {
    navigation.navigate("Login" as any);
  };

  const goSignUp = () => {
    navigation.navigate("SignUp" as any);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.Title}>Instagram</Text>
        {/* <View>저장된 계정 정보</View> */}
        <Pressable style={styles.btn} onPress={goHome}>
          <Text style={styles.btn_txt}>로그인</Text>
        </Pressable>
        <Text style={styles.nom} onPress={goLogin}>
          다른 계정으로 로그인
        </Text>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.bottomt}>
          Instagram에 처음 오셨나요?{" "}
          <Text style={styles.nom} onPress={goSignUp}>
            가입하기
          </Text>
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Title: {
    fontSize: 50,
    fontFamily: "BackToSchoolRegular",
    marginBottom: 50,
  },
  btn: {
    backgroundColor: "#0782F9",
    marginBottom: 20,
    width: "80%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btn_txt: {
    fontSize: 18,
    fontFamily: "GangwonEduAllBold",
    color: "#FFF",
  },
  bottomt: {
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    color: "#000",
  },

  nom: {
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    color: "#0782F9",
    textAlign: "center",
  },
  bottomView: {
    justifyContent: "flex-end",
    marginBottom: 15,
    alignItems: "center",
  },
});

export default AnotherAcc;
