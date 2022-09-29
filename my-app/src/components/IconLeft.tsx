import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function IconLeft({ iconName, iconSize, text }) {
  return (
    <>
      <View style={styles.footersmallbox}>
        <View style={styles.LeftContent}>
          <View style={styles.IconLeft}>
            <Icon name={iconName} size={iconSize} color="#FFFAFA" />
          </View>
          <Text style={styles.menutext}>{text}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  menutext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFFAFA",
    marginLeft: 15,
  },

  footersmallbox: {
    backgroundColor: "#000000",
    borderBottomColor: "#333333",
  },

  IconLeft: {
    alignItems: "flex-start",
  },

  LeftContent: {
    flexDirection: "row",
  },
});

export default IconLeft;
