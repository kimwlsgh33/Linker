import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function TextAndIcon({ text, iconName, iconName2, iconSize }) {
  return (
    <View style={styles.container}>
      <View style={styles.LeftContent}>
        <View style={styles.IconLeft}>
          <Icon name={iconName2} size={iconSize} color="#FFFAFA" />
        </View>
        <Text style={styles.menutext}>{text}</Text>
      </View>
      <View style={styles.IconRight}>
        <Icon name={iconName} size={iconSize} color="#FFFAFA" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "space-between",
    margin: 15,
  },
  menutext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFAFA",
    marginLeft: 10,
  },
  IconRight: {
    alignItems: "flex-end",
    // justifyContent: "center",
  },

  IconLeft: {
    alignItems: "flex-start",
  },

  LeftContent: {
    flexDirection: "row",
  },
});

export default TextAndIcon;
