import React from "react";
import { StyleSheet, Text, View } from "react-native";

function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No posts found</Text>
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
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NotFound;
