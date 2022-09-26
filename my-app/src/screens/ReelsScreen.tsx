import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ReelsScreen() {
  return (
    <View style={styles.container}>
      <Text>Reels Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ReelsScreen;
