import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { RadioButton } from 'react-native-paper';

function Thema2() {

  const [checked, setChecked] = useState('first');

  return (
    <ScrollView style={styles.container}>
    <View>
        <View style={styles.ThemaBox}>
          <Text style={styles.Thema2Text}>라이트 모드</Text>
          <RadioButton
            value="first"
            color="#0080FF"
            uncheckedColor="white"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
          />
        </View>
        <View style={styles.ThemaBox}>
          <Text style={styles.Thema2Text}>다크 모드</Text>
          <RadioButton
            value="second"
            color="#0080FF"
            uncheckedColor="white"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
        />
        </View>
        <View style={styles.ThemaBox}>
          <Text style={styles.Thema2Text}>시스템 기본 설정</Text>
          <RadioButton
            value="third"
            color="#0080FF"
            uncheckedColor="white"
            status={ checked === 'third' ? 'checked' : 'unchecked' }
            onPress={() => [
                            setChecked('third'),
                    ]}
          />
        </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },

  Thema2Text: {
    fontSize: 20,
    color: "#FFFAFA",
    },

  ThemaBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    margin: 10
  }
});

export default Thema2;