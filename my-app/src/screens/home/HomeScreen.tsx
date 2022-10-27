import React, { useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  Pressable,
  Platform,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Stories from "../../components/screenComponents/Stories";

import Feather from "react-native-vector-icons/Feather";
import Posts from "../../components/screenComponents/Posts";
import TestPost from "../../components/screenComponents/TestPost";

const { width } = Dimensions.get("screen");

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ zIndex: 1 }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingVertical: 7,
          paddingHorizontal: 15,
          alignItems: "center",
        }}
      >
        <Text
          onPress={() => navigation.navigate("Login")}
          style={{
            fontFamily: "BackToSchoolRegular",
            fontSize: 25,
            fontWeight: "500",
          }}
        >
          Instagram
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={({ pressed }) => [
              { marginRight: 5 },
              Platform.OS === "ios" && pressed && { opacity: 0.5 },
            ]}
            android_ripple={{ color: "#ccc" }}
            onPress={() => navigation.navigate("Upload")}
          >
            <Feather name="plus-square" style={{ fontSize: 24 }} />
          </Pressable>
          <Feather name="send" style={{ fontSize: 24 }} />
        </View>
      </View>

      <Stories />
      <Posts />
    </SafeAreaView>
  );
}

export default HomeScreen;
