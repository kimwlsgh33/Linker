import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";

function ErrTab({
  locate,
  names,
  pHolder,
  reg,
  id,
  setId,
  phNumber,
  setPhNumber,
}) {
  const Tab = createMaterialTopTabNavigator();

  const navigation = useNavigation();

  const UName = () => {
    const [disable, setDisable] = useState(true);

    const UNameCheck = (id) => {
      setId(id);

      if (reg[0].test(id) === true) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    };

    return (
      <>
        <View>
          <TextInput
            style={styles.input}
            placeholder={pHolder[0]}
            onChangeText={(e) => {
              UNameCheck(e);
            }}
            value={id}
          />
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
            onPress={locate}
          >
            <Text style={styles.btn_txt}>다음</Text>
          </Pressable>
        </View>
      </>
    );
  };
  const PhNum = () => {
    const [disable, setDisable] = useState(true);

    const PhNumCheck = (phNumber) => {
      setPhNumber(phNumber);

      if (reg[1].test(phNumber) === true) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    };

    return (
      <>
        <View>
          <TextInput
            style={styles.input}
            placeholder={pHolder[1]}
            onChangeText={(e) => PhNumCheck(e)}
            value={phNumber}
          />
        </View>
        <View style={styles.middleView}>
          <Pressable
            style={({ pressed }) => [
              styles.btn,
              Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
              disable ? { opacity: 0.5 } : {},
            ]}
            onPress={locate}
            disabled={disable}
            android_ripple={{ color: "#FFF" }}
          >
            <Text style={styles.btn_txt} onPress={locate}>
              다음
            </Text>
          </Pressable>
        </View>
      </>
    );
  };

  return (
    <>
      <View
        style={{
          height: 320,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#F00",
            tabBarInactiveTintColor: "#f00",
            tabBarIndicatorStyle: {
              backgroundColor: "#f00",
              height: 2.5,
            },
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: "GangwonEduAllBold",
            },
            tabBarStyle: {
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: "tomato",
              width: 350,
            },
            tabBarLabel: ({ focused, color }) => {
              if (route.name === { names }.names[0]) {
                color = focused ? "black" : "gray";
              } else if (route.name === { names }.names[1]) {
                color = focused ? "black" : "gray";
              }

              return <Text style={{ color }}>{route.name}</Text>;
            },
          })}
        >
          <Tab.Screen name={names[0]} component={UName} />
          <Tab.Screen name={names[1]} component={PhNum} />
        </Tab.Navigator>
      </View>
    </>
  );
}

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
    width: 350,
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
