import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function TextAndIcon({ text, iconName, iconSize }) {
  return (
    <>
      <View style={styles.IconRight}>
        <Icon name={iconName} size={iconSize} color="#FFFAFA" />
      </View>
      <Text style={styles.menutext}>{text}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  menutext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFAFA",
    // flexDirection: "column",
    // alignItems: "flex-start",
    // flexGrow: 1,
    // justify: "space-between",
    margin: 40,
  },
  IconRight: {
    marginTop: 45,
    marginRight: 5,
    marginLeft: 5,
    alignItems: "flex-end",
    // justifyContent: "center",
  },
});

export default TextAndIcon;
