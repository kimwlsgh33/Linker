import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderLeftIcon from "./HeaderLeftIcon";

type HeaderBarProps = {
  leftIconPressed?: () => void;
  title: string;
  headerRight?: React.ReactNode;
  noLeftIcon?: boolean;
};

function HeaderBar({
  leftIconPressed,
  title,
  headerRight,
  noLeftIcon,
}: HeaderBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.sameWidth}>
        {!noLeftIcon && <HeaderLeftIcon onPress={leftIconPressed} />}
      </View>

      <View style={styles.sameWidth}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.sameWidth}>{headerRight}</View>
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
});

export default HeaderBar;