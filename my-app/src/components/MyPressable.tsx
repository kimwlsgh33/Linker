import React, { ComponentProps } from "react";
import { Platform, Pressable } from "react-native";

function MyPressable({ children, ...props }) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        Platform.OS === "ios" && {
          backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
        },
        props.style,
      ]}
      android_ripple={{ color: "lightgray" }}
    >
      {children}
    </Pressable>
  );
}

export default MyPressable;
