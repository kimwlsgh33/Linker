import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { DataStore } from "aws-amplify";
import { User } from "../models";

const authComp = ({ route }) => {
  const navigation = useNavigation();

  const goTOS = async () => {
    await DataStore.save(
      new User({
        username: route.params.username,
        name: route.params.name,
        nickname: route.params.nick,
        password: route.params.password,
      })
    );

    navigation.navigate("TOS" as any);
  };

  const LinearGradientProps = {
    colors: ["#FFB6C1", "#FFA07A"],
  };

  const username = route.params.username;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopBar}>
        <Pressable
          style={({ pressed }) => [
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
          ]}
          android_ripple={{ color: "#CCC" }}
          onPress={goTOS}
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
        <MaskedView
          style={{ flex: 1, flexDirection: "row", height: "100%" }}
          maskElement={
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign
                name="checkcircleo"
                size={50}
                color="white"
                style={styles.shadow}
              />
            </View>
          }
        >
          <LinearGradient
            colors={["green", "purple", "red"]}
            style={{ flex: 1 }}
            start={{ x: 0.1, y: 0.3 }}
            end={{ x: 0.6, y: 0.7 }}
          />
        </MaskedView>
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
          onPress={goTOS}
        >
          <Text style={styles.buttonText}>다음</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
    fontFamily: "GangwonEduAllBold",
    fontSize: 30,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  desc: {
    fontFamily: "GangwonEduAllLight",
    fontSize: 16,
    marginTop: 30,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    fontFamily: "GangwonEduAllLight",
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
    fontFamily: "GangwonEduAllBold",
    fontSize: 16,
    color: "#fff",
  },
});

export default authComp;
