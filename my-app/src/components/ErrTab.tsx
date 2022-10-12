import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const ErrTab = () => {
  const [disable, setDisable] = useState(true);
  const [UserName, setUserName] = useState("");
  const [phNumber, setPhnumber] = useState("");
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();

  const handleUNameChange = (text) => {
    setUserName(text);
  };

  const handlePhNumberChange = (text) => {
    setPhnumber(text);
  };

  const UNameCheck = (UserName) => {
    handleUNameChange(UserName);
    const reg = /^[a-zA-Z0-9]{2,20}$/;
    if (reg.test(UserName) === true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  const PhNumCheck = (text) => {
    handlePhNumberChange(text);
    const reg = /^[0-9]{10,11}$/;
    if (reg.test(text) === true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  useEffect(() => {
    console.log("hi");
  }, []);

  const UName = () => {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="이름을 입력하세요."
          onChangeText={UNameCheck}
          value={UserName}
        />
      </View>
    );
  };
  const PhNum = () => {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="전화번호를 입력하세요."
          onChangeText={PhNumCheck}
          value={phNumber}
        />
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          height: 100,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#fff",
            tabBarInactiveTintColor: "#fff",
            tabBarIndicatorStyle: {
              backgroundColor: "#fff",
            },
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: "GangwonEduAllBold",
            },
            tabBarStyle: {
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: "#fff",
              width: 300,
              // marginLeft: 45,
              // alignItems: "center",
            },
            tabBarLabel: ({ focused, color }) => {
              if (route.name === "사용자 이름") {
                color = focused ? "black" : "gray";
              } else if (route.name === "전화번호") {
                color = focused ? "black" : "gray";
              }

              return <Text style={{ color }}>{route.name}</Text>;
            },
          })}
        >
          <Tab.Screen name="사용자 이름" component={UName} />
          <Tab.Screen name="전화번호" component={PhNum} />
        </Tab.Navigator>
      </View>
      <View style={styles.middleView}>
        <Pressable
          style={({ pressed }) => [
            styles.btn,
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
            disable ? { opacity: 0.5 } : {},
          ]}
          disabled={disable}
          android_ripple={{ color: "#FFF" }}
        >
          <Text style={styles.btn_txt}>다음</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  middleView: {
    flex: 0.3,
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  middleText: {
    fontFamily: "GangwonEduAllBold",
    fontSize: 16,
    color: "black",
  },
  input: {
    width: 300,
    height: 45,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "GangwonEduAllLight",
    alignSelf: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  btn: {
    backgroundColor: "#0782F9",
    width: 350,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  btn_txt: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "GangwonEduAllBold",
  },
});

export default ErrTab;
