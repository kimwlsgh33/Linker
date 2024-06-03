import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type HeaderBarProps = {
  leftIconPressed?: () => void;
  title: string;
  headerRight?: React.ReactNode;
  noLeftIcon?: boolean;
  isBlack?: boolean;
};

function HeaderBar({
  leftIconPressed,
  title,
  headerRight,
  noLeftIcon,
  isBlack,
}: HeaderBarProps) {
  return (
    <View
      style={[
        styles.container,
        isBlack ? { backgroundColor: "black" } : { backgroundColor: "white" },
      ]}
    >
      <View style={styles.sameWidth}>
        {!noLeftIcon && (
          <TouchableOpacity onPress={leftIconPressed}>
            <Icon name="chevron-back-outline" size={30} color="black" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.sameWidth}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.sameWidth, styles.headerRight]}>{headerRight}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
  },
  sameWidth: {
    width: "33%",
    justifyContent: "center",
  },
  title: { textAlign: "center", fontSize: 16, fontWeight: "700", color:"#000000",},
  headerRight: {
    alignItems: "flex-end",
    paddingRight: 5,
  },
});

export default HeaderBar;