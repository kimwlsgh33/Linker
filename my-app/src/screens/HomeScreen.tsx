import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Stories from "../components/screenComponents/Stories";
import Post from "../components/screenComponents/Post";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../models";

function HomeScreen() {
  const navigation = useNavigation();

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
          onPress={() => navigation.navigate("Login")}
          style={{
            fontFamily: "Lobster-Regular",
            fontSize: 25,
            fontWeight: "500",
          }}
        >
          Instagram
        </Text>
        <Feather name="send" style={{ fontSize: 24 }} />
      </View>
      <TouchableOpacity
        onPress={() => {
          (async () => {
            await DataStore.save(
              new User({
                username: "abkorc33",
                email: "abkorc33@gmail.com",
                followersID: "12354",
                likepostID: "1231213",
              })
            );
          })();
        }}
      >
        <View
          style={{ width: 100, height: 100, backgroundColor: "gray" }}
        ></View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
