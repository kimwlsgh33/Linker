import React from "react";
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
      <ScrollView>
        <Stories />
        {/* <Post /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
