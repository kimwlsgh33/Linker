import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const CreateNameScreen = () => {
  const navigation = useNavigation();

  const goNameConfirm = () => {
    navigation.navigate("NameConfirm" as any, { name: name });
  };
  const [disable, setDisable] = useState(true);
  const [name, setName] = useState("");

  const nameCheck = (name) => {
    setName(name);
    const reg = /^[a-zA-Z0-9\s]{2,50}$/;
    if (reg.test(name)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>사용자 이름 만들기</Text>
          <Text style={styles.bodyText}>
            새 계정에 사용할 사용자 이름을 선택하세요. 나중에 언제든지 변경할 수
            있습니다.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="사용자 이름"
            onChangeText={nameCheck}
          />
          <Pressable
            style={({ pressed }) => [
              styles.button,
              Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
              disable ? { opacity: 0.5 } : {},
            ]}
            android_ripple={{ color: "#FFF" }}
            disabled={disable}
            onPress={goNameConfirm}
          >
            <Text style={styles.buttonText}>다음</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "강원교육모두 Bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyText: {
    fontFamily: "강원교육모두 Light",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    marginHorizontal: 30,
  },
  input: {
    width: "100%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "강원교육모두 Light",
    fontSize: 18,
    color: "#fff",
  },
});

export default CreateNameScreen;
