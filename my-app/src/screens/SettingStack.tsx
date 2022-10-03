import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ScreenSetting from "./ScreenSetting";

function SettingStack() {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
      <Button
        title="설정"
        onPress={() => {
          this.props.navigation.navigate("Setting");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingStack;
