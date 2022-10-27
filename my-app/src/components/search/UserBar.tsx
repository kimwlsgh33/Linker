import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

import { User } from "../../models";
import { HomeTabScreenProps } from "../../navigation/types";
import { useMeStore } from "../../store";

type Props = {
  isOutline?: boolean;
  user: User;
};

function UserBar({ isOutline, user }: Props) {
  const navigation =
    useNavigation<HomeTabScreenProps<"Search">["navigation"]>();

  const { setMe } = useMeStore();
  const onPress = () => {
    //TODO: 유저 프로필을 보여주어야함 ( statck screen )
    navigation.navigate("ProfileUser" as any, { user });
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && {
          backgroundColor: "#eee",
        },
      ]}
    >
      <View style={styles.profpicView}>
        <View style={[isOutline && styles.profpicOutline]}>
          <View style={styles.profpic}>
            <FontAwesome name="user-alt" size={23} color="rgba(0,0,0,0.3)" />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.username}>{user.name}</Text>
        <Text style={styles.nickname}>{user.username}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  profpicView: {
    width: 50,
  },
  profpicOutline: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "#9933CC",
    justifyContent: "center",
    alignItems: "center",
  },
  profpic: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  username: {
    fontSize: 15,
    fontWeight: "bold",
  },
  nickname: {
    fontSize: 13,
    color: "#666",
  },
});

export default UserBar;
