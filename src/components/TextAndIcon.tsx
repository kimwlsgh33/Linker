import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/ionicons";

function TextAndIcon({ text, iconName, iconName2, iconSize }) {
  return (
    <View style={styles.container}>
      <View style={styles.LeftContent}>
        <View style={styles.IconLeft}>
          <Icon name={iconName2} size={iconSize} color="#000000" />
        </View>
        <Text style={styles.menutext}>{text}</Text>
      </View>
      <View style={styles.IconRight}>
        <Icon name={iconName} size={iconSize} color="#000000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  menutext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
  },
  IconRight: {
    alignItems: "flex-end",
  },

  IconLeft: {
    alignItems: "flex-start",
  },

  LeftContent: {
    flexDirection: "row",
  },
});

export default TextAndIcon;
