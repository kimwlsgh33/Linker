import React from "react";
import { SafeAreaView, Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import { useMeStore } from "../../store";
import { DataStore } from "aws-amplify";
import { User } from "../../models";

export const ProfileUserHeader = ({ user }) => {
  const navigation = useNavigation();

  const { me, setMe } = useMeStore();
  const users = async () => {
    const newUser = await DataStore.query(User, (test) =>
      test.name("eq", "shkim")
    );
    console.log(newUser);
    return newUser[0];
  };
  const onSetMe = () => {
    users().then((test) => setMe(test));
  };

  const returnUser = () =>{
    navigation.navigate("ProfileScreen");
    onSetMe();
  }

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
            onPress={returnUser}
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
          <Text style={styles.text}>{user.username}</Text>
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
