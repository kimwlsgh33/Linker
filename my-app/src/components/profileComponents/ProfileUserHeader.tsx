import React from "react";
import { SafeAreaView, Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

export const ProfileUserHeader = ({ data, user }) => {
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="arrow-left" style={{ fontSize: 20 }} />
            <Text style={styles.text}>{data.accountName}</Text>
          </View>
        </Pressable>
        <View>
          <Pressable
            onPress={() => navigation.navigate("Modal2", { user })}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <Feather
              name="bell"
              style={{ fontSize: 22, left: 70 }}
            />
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => navigation.navigate("Modal3")}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <Feather
              name="more-vertical"
              style={{
                fontSize: 20,
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
    marginLeft: 20,
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
