import React from "react";
import { SafeAreaView, Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

export const ProfileUserHeader = ({ data, user }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View
          style={{
            justifyContent: "flex-start",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <Feather
              name="arrow-left"
              style={{ fontSize: 20, marginRight: 20 }}
            />
          </Pressable>
          <Text style={styles.text}>{data.username}</Text>
        </View>
        <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
          <Pressable
            // onPress={() => navigation.navigate("Modal2", { user })}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <Feather name="bell" style={{ fontSize: 22, marginRight: 20 }} />
          </Pressable>
          <Pressable
            // onPress={() => navigation.navigate("Modal3")}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <Feather
              name="more-vertical"
              style={{
                fontSize: 22,
              }}
            />
          </Pressable>
        </View>
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

export default ProfileUserHeader;
