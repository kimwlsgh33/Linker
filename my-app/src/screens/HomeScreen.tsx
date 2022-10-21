import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Pressable,
  Platform,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Stories from "../components/screenComponents/Stories";
import Post from "../components/screenComponents/Post";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../models";
import { Swipeable } from "react-native-gesture-handler";
import UploadImageScreen from "./UploadImageScreen";

const { width } = Dimensions.get("screen");

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ zIndex: 1 }}>
      <Swipeable
        renderLeftActions={UploadImageScreen}
        leftThreshold={width / 3}
        onSwipeableOpen={() => {
          console.log("Opened");
        }}
        containerStyle={{ zIndex: 0 }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 15,
            alignItems: "center",
          }}
        >
          <Pressable
            style={({ pressed }) => [
              Platform.OS === "ios" && pressed && { opacity: 0.5 },
            ]}
            android_ripple={{ color: "#ccc" }}
            onPress={() => navigation.navigate("UploadImage")}
          >
            <FontAwesome name="plus-square-o" style={{ fontSize: 24 }} />
          </Pressable>
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
          <Feather name="send" style={{ fontSize: 24 }} />
        </View>
        <ScrollView>
          <Stories />
          <Post />
        </ScrollView>
      </Swipeable>
    </SafeAreaView>
  );
}

export default HomeScreen;
