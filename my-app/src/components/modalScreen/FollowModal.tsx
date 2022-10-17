import React from "react";
import { View, Text } from "react-native";

const FollowModal = (follow) => {
  return follow === false ? (
    <View
      style={{
        backgroundColor: "#424242",
        height: "10%",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
      }}
    >
      <Text style={{ fontSize: 300, color: "white" }}>팔로우 하셨습니다</Text>
    </View>
  ) : (
    <View
      style={{
        backgroundColor: "#424242",
        height: "10%",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
      }}
    >
      <Text style={{ color: "white", fontSize: 300 }}>
        팔로우를 취소했습니다.
      </Text>
    </View>
  );
};

export default FollowModal;
