import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

function TOS({ title, desc, link, pData, setPData }: any) {
  return (
    <>
      <View style={styles.hr} />
      <Text style={styles.head_txt}>{title}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setPData(!pData)}
        value={pData}
      />
      <Text style={styles.nom_txt}>
        {desc} <Text style={styles.link}>{link}</Text>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: "#AAA",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    //marginBottom: 10,
  },
  nom_txt: {
    fontFamily: "강원교육모두 Light",
    fontSize: 18,
    textAlign: "left",
  },
  head_txt: {
    fontFamily: "강원교육모두 Bold",
    fontSize: 20,
    marginTop: 20,
    textAlign: "left",
  },
  link: {
    color: "#0000FF",
  },
});

export default TOS;
