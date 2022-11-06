import React, { ComponentProps, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type Props = ComponentProps<TextInput> & {
  label?: string;
};

function InputBar({ label = "라벨", ...props }: Props) {
  return (
    <View style={styles.inputBar}>
      <View style={styles.inputLabel}>
        <Text style={styles.inputText}>{label}</Text>
      </View>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
  },
  inputLabel: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 2,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  input: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 7,
  },
});

export default InputBar;
