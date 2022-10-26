import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  StyleSheet,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import Ionic from "react-native-vector-icons/Ionicons";

const FollowTab = ({ user }) => {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();

  let circuls = [];
  let numberOfCirculs = 15;

  for (let index = 0; index < numberOfCirculs; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() => navigation.navigate("ProfileUser", { user })}
              // 다른 user profile
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
              ]}
            >
              <View style={styles.new}>
                <Ionic name="add" size={30} color="black" />
              </View>
            </Pressable>
            <Text style={{ top: 18, fontFamily: "GangwonEduAllBold" }}>
              팔로우 추가
            </Text>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Pressable
              onPress={() => navigation.navigate("ProfileUser", { user })}
              // 다른 user profile
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
              ]}
            >
              <View style={styles.followRound}></View>
            </Pressable>
            <Text style={{ top: 22, fontFamily: "GangwonEduAllBold" }}>
              유저ID
            </Text>
            <View style={styles.container}>
              <Pressable
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.2 : 1,
                  },
                  styles.pressable,
                ]}
              >
                <Text style={{ fontSize: 11, fontFamily: "GangwonEduAllBold" }}>
                  삭제
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
    );
  }

  const Follower = () => {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.view}>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Ionic name="search-outline" size={15} color="gray" />
            <TextInput style={styles.textInput} placeholder="검색" />
          </View>
        </View>
        <View style={styles.circle}>{circuls}</View>
      </ScrollView>
    );
  };

  const Following = () => {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} style={styles.view}>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Ionic name="search-outline" size={15} color="gray" />
            <TextInput style={styles.textInput} placeholder="검색" />
          </View>
        </View>
        <View style={styles.circle}>{circuls}</View>
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      keyboardDismissMode="auto"
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          height: 1.5,
        },
        // tabBarIcon: ({ focused, color }) => {
        //   let iconName;
        //   if (route.name === "Follower") {
        //     iconName = focused ? "people" : "people-outline";
        //     color = focused ? "black" : "gray";
        //   } else if (route.name === "Folowing") {
        //     iconName = focused ? "people" : "people-outline";
        //     color = focused ? "black" : "gray";
        //   }

        //   return <Ionic name={iconName} size={25} color={color} />;
        // },
      })}
    >
      <Tab.Screen name="Follower" component={Follower} />
      <Tab.Screen name="Folowing" component={Following} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  new: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    opacity: 0.7,
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    marginTop: 2,
  },
  followRound: {
    margin: 8,
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: "black",
    opacity: 0.1,
    marginHorizontal: 15,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  pressable: {
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "100%",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    alignItems: "center",
    left: 200,
  },
  view: {
    width: "100%",
    height: "100%",
  },
  view2: {
    backgroundColor: "white",
    padding: 10,
    paddingTop: 20,
  },
  view3: {
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    height: 30,
    paddingLeft: 15,
  },
  circle: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexWrap: "nowrap",
    paddingVertical: 5,
  },
});

export default FollowTab;
