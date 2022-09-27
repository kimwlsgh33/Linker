import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";

function HomeScreen() {
  const navigation = useNavigation();

  const goLogin = () => {
    navigation.navigate("Login");
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
      <TouchableOpacity>
        <Text
          onPress={goLogin}
          style={{
            fontFamily: "강원교육모두 Bold",
            fontSize: 25,
            fontWeight: "500",
            textAlign: "center",
            marginTop: 200,
          }}
        >
          로그인 화면 돌아가기
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
