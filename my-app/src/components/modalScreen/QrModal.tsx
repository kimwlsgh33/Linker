import React from "react";
import { View, Text } from "react-native";

const QrModal = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#424242",
          height: "60%",
          borderRadius: 20,
          width: "60%",
        }}
      ></View>
    </View>
  );
};

export default QrModal;
