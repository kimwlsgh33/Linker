import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const NameConfirm = ({ route }) => {
  const navigation = useNavigation();
  const { name } = route.params;

  const goLogin = () => {
    navigation.navigate("Login" as any);
  };
  const goComplete = () => {
    navigation.navigate("CompleteN" as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopView}>
        <Text style={styles.title}>{name}님으로 가입하시겠어요?</Text>
        <Text style={styles.desc}>
          나중에 언제든지 사용자 이름을 변경할 수 있습니다.
        </Text>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
            업로드했을 수도 있습니다. <Text>더 알아보기</Text>
          </Text>
          <Pressable style={styles.button} onPress={goComplete}>
            <Text style={styles.buttonText}>가입하기</Text>
          </Pressable>
          <Text style={styles.desc}>
            이미 계정이 있으신가요?
            <Pressable onPress={goLogin}>
              <Text style={styles.gologin}>&nbsp;로그인</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
  },
  TopView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontFamily: "강원교육모두 Bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  desc: {
    fontFamily: "강원교육모두 Light",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 25,
  },
  button: {
    backgroundColor: "#0782F9",
    borderRadius: 5,
    width: 300,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "강원교육모두 Bold",
    fontSize: 16,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 25,
  },
  footerText: {
    fontFamily: "강원교육모두 Light",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  gologin: {
    fontFamily: "강원교육모두 Bold",
    color: "#0782F9",
  },
});

export default NameConfirm;
