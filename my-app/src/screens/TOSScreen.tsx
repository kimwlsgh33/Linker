import React, { useState } from "react";
import { Text, View, Switch, StyleSheet, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

const TOSScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView>
      <View>
        <Icon name="menu-outline" style={{ alignItems: "flex-end" }}></Icon>
        <ScrollView>
          <Text style={styles.title_txt}>
            Instagram 앱을 사용하려면 다음 항목에 동의해야 합니다.
          </Text>
          <Text style={styles.nom_txt}>
            다음은 Meta에서 서비스를 제공하기 위해 회원님의 정보를 이용할 수
            있는 몇가지 주된 방법입니다. 회원님이 각 항목을 검토하고 동의하셔야
            합니다.
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#111",
              width: "90%",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10,
            }}
          />
          <Text style={styles.nom_txt}>
            <Text style={styles.head_txt}>개인정보의 수집 및 이용[필수]</Text>
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={styles.nom_txt}>내용쓰기전 테스트</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TopBar: {
    flex: 0.15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title_txt: {
    fontFamily: "강원교육튼튼",
    fontSize: 30,
    marginTop: 15,
    marginBottom: 5,
  },
  nom_txt: {
    fontFamily: "강원교육모두 Light",
    fontSize: 18,
  },
  head_txt: {
    fontFamily: "강원교육모두 Bold",
    fontSize: 20,
    marginTop: 20,
  },
});

export default TOSScreen;
