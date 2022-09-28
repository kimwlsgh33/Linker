import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation();
  // const storyPressed = useCallback(() => setUser(() => ), []);
  // usestate -> 데이터가 변경이 될때 ui를 변경해줌.
  // state에 데이터 배열 넣기.
  const storyInfo = [
    {
      id: 1,
      isYou: true,
      show: false,
      name: "내 스토리",
      image: require("../../../assets/images/jinho.jpeg"),
    },
    {
      id: 2,
      isYou: false,
      show: false,
      name: "kwonwoo",
      image: require("../../../assets/images/woo.jpeg"),
    },
    {
      id: 3,
      isYou: false,
      show: false,
      name: "pizza",
      image: require("../../../assets/images/pizza.jpeg"),
    },
    {
      id: 4,
      isYou: false,
      show: false,
      name: "hyunsu",
      image: require("../../../assets/images/hyunsu.jpeg"),
    },
    {
      id: 5,
      isYou: false,
      show: false,
      name: "jongin",
      image: require("../../../assets/images/jongin.jpeg"),
    },
  ];
  const [user, setUser] = useState(storyInfo);

  // 누른 id 인자로 받아옴
  const storyPressed = useCallback(
    (id) => {
      const newUsers = user.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            show: true,
          };
        }
        return user;
      });

      setUser(newUsers);
    },
    [user, setUser]
  );
  // 배열의 데이터가, 바뀔때마다 UI를 변경해줌.

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {user.map((data) => (
        <TouchableOpacity
          key={data.id}
          onPress={() => {
            navigation.navigate("Story", {
              name: data.name,
              image: data.image,
            });
            // 누른 스토리 유저의 id를 함수의 인자로 받아올 수 있다.
            storyPressed(data.id);
          }}
        >
          <View style={{ position: "relative", paddingHorizontal: 8 }}>
            {data.isYou == true ? (
              <View
                style={{
                  position: "absolute",
                  bottom: 15,
                  right: 10,
                  zIndex: 1,
                }}
              >
                <Entypo
                  name="circle-with-plus"
                  style={{
                    fontSize: 20,
                    color: "#405de6",
                    backgroundColor: "white",
                    borderRadius: 100,
                  }}
                />
              </View>
            ) : null}

            <View
              style={{
                width: 68,
                height: 68,
                backgroundColor: "white",
                borderWidth: 1.8,
                borderRadius: 100,
                borderColor: "#9933CC",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={data.image}
                style={{
                  resizeMode: "cover",
                  width: "92%",
                  height: "92%",
                  borderRadius: 100,
                  backgroundColor: "orange",
                }}
              />
            </View>
            <Text
              style={{
                color: "gray",
                textAlign: "center",
                fontSize: 10,
                opacity: data.show == true ? 0.5 : 1,
              }}
            >
              {data.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Stories;
