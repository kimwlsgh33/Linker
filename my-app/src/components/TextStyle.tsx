import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function TextStyle({ text }) {
  return (
    <>
      <View>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFAFA",
    margin: 15,
  },
});

export default TextStyle;
