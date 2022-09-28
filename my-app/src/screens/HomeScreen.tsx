import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";

function HomeScreen() {
  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate("Login" as any);
  };

  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
        <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
        <Text
          onPress={goLogin}
          style={{
            fontFamily: "Lobster-Regular",
            fontSize: 25,
            fontWeight: "500",
          }}
        >
          Instagram
        </Text>
        <Feather name="navigation" style={{ fontSize: 24 }} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Story")}>
        <View
          style={{ width: 100, height: 100, backgroundColor: "gray" }}
        ></View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
