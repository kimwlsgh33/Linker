import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

type Props = {
  isOutline?: boolean;
};

function UserBar({ isOutline }: Props) {
  return (
    <Pressable
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
        <Text style={styles.username}>username</Text>
        <Text style={styles.nickname}>nickname</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  profpicView: {
    width: 50,
    alignItems: "center",
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
