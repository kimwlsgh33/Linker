import React from "react";
import { Text, View , StyleSheet, ScrollView } from "react-native";


export default function ScreenSetting() {
  return (
<View style={styles.container}>
  <View style={styles.menutextbox}>
    {/* <ScrollView> */}
      <Text style={styles.menutext}>친구 팔로우 및 초대</Text>
      <Text style={styles.menutext}>알림</Text>
      <Text style={styles.menutext}>개인정보 보호</Text>
      <Text style={styles.menutext}>관리 감독</Text>
      <Text style={styles.menutext}>보안</Text>
      <Text style={styles.menutext}>광고</Text>
      <Text style={styles.menutext}>계정</Text>
      <Text style={styles.menutext}>도움말</Text>
      <Text style={styles.menutext}>정보</Text>
    {/* </ScrollView> */}
  </View>
</View>
  );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#000000",
        // alignItems: "center",
        // justifyContent: "center",
    },

    menutext: {
        fontSize:   15,
        fontWeight: "bold",
        color:      "#4682B4",
        // flexDirection: "column",
        // alignItems: "flex-start",
        // flexGrow: 1,
        // justify: "space-between",
        margin: 50,
    },
    menutextbox: {
        backgroundColor: "#FFFF00",
        width:  "100%",
        height: "60%",
        justifyContent: "space-around",
    }
});

