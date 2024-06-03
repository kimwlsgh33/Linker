import React, { ComponentProps } from "react";
import { Platform, Pressable, Text } from "react-native";

function MyPressable({ title, ...props }) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        {
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "tomato",

          margin: 5,
          borderRadius: 5,
        },
        Platform.OS === "ios" && {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        props.style,
      ]}
      android_ripple={{ color: "lightgray" }}
    >
      <Text style={{ color: "white" }}>{title}</Text>
    </Pressable>
  );
}

export default MyPressable;
