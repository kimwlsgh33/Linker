import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
const { height } = Dimensions.get("window");

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
    marginTop: height / 3,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default NotFound;
