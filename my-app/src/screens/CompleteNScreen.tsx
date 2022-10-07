import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";

const CompleteNScreen = () => {
  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("Home" as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopBar}>
        <Pressable
          style={({ pressed }) => [
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
          ]}
          android_ripple={{ color: "#CCC" }}
          onPress={goHome}
        >
          <Feather name="x" size={40} color="#000" />
        </Pressable>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#333",
              width: "100%",
            }}
          />
        </View>
      </View>
      <View style={styles.header}>
        <View>
          <LinearGradient colors={["purple", "red", "pink", "yellow"]}>
            <AntDesign name="checkcircleo" size={50} />
          </LinearGradient>
        </View>
        <Text style={styles.title}>완료되었습니다!</Text>
        <Text style={styles.desc}>
          정보 수집, 이용 및 제공에 관한 내용을 검토하고 동의해주셔서
          감사합니다.
        </Text>
      </View>
      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
          ]}
          android_ripple={{ color: "#FFF" }}
          onPress={goHome}
        >
          <Text style={styles.buttonText}>닫기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  TopBar: {
    flex: 0.15,
    alignItems: "flex-start",
    marginTop: 10,
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 18,
  },
  title: {
    fontFamily: "강원교육모두 Bold",
    fontSize: 30,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  desc: {
    fontFamily: "강원교육모두 Light",
    fontSize: 16,
    marginTop: 10,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    fontFamily: "강원교육모두 Light",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    borderRadius: 10,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "강원교육모두 Bold",
    fontSize: 16,
    color: "#fff",
  },
});

export default CompleteNScreen;
