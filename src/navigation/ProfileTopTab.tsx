import React, { useCallback } from "react";
import { View, ScrollView, Image, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionic from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";
import PostThumbnail from "../components/profileComponents/PostThumbnail";

const ProfileTopTab = ({ user }) => {
  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();

  const storyPressed = useCallback(
    (id) => {
      if (user.id === id) {
        return {
          ...user,
          show: true,
        };
      }
      return user;
    },
    [user]
  );

  let squares = [];
  let numberOfSquare = 9;

  const Posts = () => {
    return (
      <FlatList
        data={squares}
        renderItem={(item) => <PostThumbnail post={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    );
  };
  const Video = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.squares}>{squares}</View>
      </ScrollView>
    );
  };
  const Tags = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.squares}>{squares}</View>
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: "black",
          height: 1.5,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Posts") {
            iconName = focused ? "ios-apps-sharp" : "ios-apps-outline";
            color = focused ? "black" : "gray";
          } else if (route.name === "Video") {
            iconName = focused ? "ios-play-circle" : "ios-play-circle-outline";
            color = focused ? "black" : "gray";
          } else if (route.name === "Tags") {
            iconName = focused ? "ios-person" : "ios-person-outline";
            color = focused ? "black" : "gray";
          }

          return <Ionic name={iconName} color={color} size={22} />;
        },
      })}
    >
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Video" component={Video} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  squares: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProfileTopTab;
