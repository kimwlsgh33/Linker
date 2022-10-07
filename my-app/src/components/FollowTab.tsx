import React from "react";
import { View, Text, ScrollView, Pressable, TextInput } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionic from "react-native-vector-icons/Ionicons";

const FollowTab = () => {
  const Tab = createMaterialTopTabNavigator();

  let circuls = [];
  let numberOfCirculs = 15;

  for (let index = 0; index < numberOfCirculs; index++) {
    circuls.push(
      <View key={index}>
        {index === 0 ? (
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
              ]}
            >
              <View
                style={{
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
                }}
              >
                <Ionic name="add" size={30} color="black" />
              </View>
            </Pressable>
            <Text style={{ top: 15, fontFamily: "강원교육모두 Bold" }}>
              팔로우 추가
            </Text>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.2 : 1,
                },
              ]}
            >
              <View
                style={{
                  margin: 8,
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  borderWidth: 1,
                  backgroundColor: "black",
                  opacity: 0.1,
                  marginHorizontal: 15,
                }}
              ></View>
            </Pressable>
            <Text style={{ top: 20, fontFamily: "강원교육모두 Bold" }}>
              유저ID
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: 8,
              }}
            >
              <Pressable
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.2 : 1,
                    backgroundColor: "rgba(0,0,0,0.1)",
                    width: "100%",
                    padding: 5,
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 5,
                    alignItems: "center",
                    left: 200,
                  },
                ]}
              >
                <Text style={{ fontSize: 11, fontFamily: "강원교육모두 Bold" }}>
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View style={{ backgroundColor: "white", padding: 10, paddingTop: 20 }}>
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <Ionic name="search-outline" size={15} color="gray" />
            <TextInput
              style={{
                flex: 1,
                height: 30,
                paddingLeft: 15,
              }}
              placeholder="검색"
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            flexWrap: "nowrap",
            paddingVertical: 5,
          }}
        >
          {circuls}
        </View>
      </ScrollView>
    );
  };

  const Following = () => {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View style={{ backgroundColor: "white", padding: 10, paddingTop: 20 }}>
          <View
            style={{
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <Ionic name="search-outline" size={15} color="gray" />
            <TextInput
              style={{
                flex: 1,
                height: 30,
                paddingLeft: 15,
              }}
              placeholder="검색"
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            flexWrap: "nowrap",
            paddingVertical: 5,
          }}
        >
          {circuls}
        </View>
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

export default FollowTab;
