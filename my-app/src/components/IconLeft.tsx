import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

function IconLeft({ iconName, iconSize }) {
  return (
    <>
      <View style={styles.IconLeft}>
        <Icon name={iconName} size={iconSize} color="#FFFAFA" />
      </View>
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

  IconLeft: {
    marginTop: 42,
    // marginRight: 5,
    marginLeft: 10,
    alignItems: "flex-start",
  },
});

export default IconLeft;
