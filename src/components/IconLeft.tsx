import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

function IconLeft({ iconName, iconSize, text }) {
  return (
    <>
      <View style={styles.footersmallbox}>
        <View style={styles.LeftContent}>
          <View style={styles.IconLeft}>
            <AntDesign name={iconName} size={iconSize} color="#000000" />
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
    color: "#000000",
    marginLeft: 15,
  },

  footersmallbox: {
    backgroundColor: "#ffffff",
    borderBottomColor: "#333333",
    margin: 15,
  },

  IconLeft: {
    alignItems: "flex-start",
  },

  LeftContent: {
    flexDirection: "row",
  },
});

export default IconLeft;
