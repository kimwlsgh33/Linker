import React, { useContext } from "react";
import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import { Auth } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../hooks/UserContext";

function WelcomeScreen() {
  const navigation = useNavigation();
  const { user, setUser } = useUserContext();

  console.log("유저정보" + user.username);

  const goSignOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.log("error signing out: ", error);
    }
    navigation.navigate("Login" as any);
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Welcome Screen</Text>
        <Pressable
          style={({ pressed }) => [
            styles.Button,
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
          ]}
          android_ripple={{ color: "#FFF" }}
          onPress={goSignOut}
        >
          <Text>로그아웃 버튼</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    backgroundColor: "#0782F9",
    borderRadius: 10,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    height: 35,
  },
});

export default WelcomeScreen;
