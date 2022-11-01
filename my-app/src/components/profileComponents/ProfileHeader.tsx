import React from "react";
import { SafeAreaView, Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

export const ProfileHeader = ({ data, user }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate("Modal", { data })}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.2 : 1,
            },
          ]}
        >
          <Text style={styles.text}>
            {data.username}
            <Feather name="chevron-down" style={{ fontSize: 16 }} />
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Modal2", { user })}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.2 : 1,
            },
          ]}
        >
          <FontAwesome name="plus-square-o" style={{ fontSize: 22 }} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Modal3")}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.2 : 1,
            },
          ]}
        >
          <Icon
            name="menu-outline"
            style={{
              fontSize: 29,
            }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "GangwonEduAllBold",
    fontSize: 23,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    padding: 15,
  },
});

export default ProfileHeader;
