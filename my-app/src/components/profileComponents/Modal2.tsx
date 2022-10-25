import React, { useEffect, useCallback } from "react";
import {
  Animated,
  Dimensions,
  Pressable,
  View,
  Text,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

function Modal2({ navigation, route }) {
  const { user } = route.params;
  const opacity = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    openModal();
  }, []);

  const openModal = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => navigation.goBack());
  };

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
  const goToReels = () => {
    navigation.navigate("Story", {
      name: user[0].name,
      image: user[0].image,
      userName: user[0].userName,
    });
    storyPressed(user.id);
  };

  const goToPost = () => {
    navigation.navigate("Story", {
      name: user[0].name,
      image: user[0].image,
      userName: user[0].userName,
    });
    storyPressed(user.id);
  };

  const goToStory = () => {
    navigation.navigate("Story", {
      name: user[0].name,
      image: user[0].image,
      userName: user[0].userName,
    });
    storyPressed(user.id);
  };

  return (
    <>
      <Animated.View style={{ position: "absolute", height, width, opacity }}>
        <Pressable
          style={[
            {
              height,
              width,
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          ]}
          onPress={closeModal}
        />
      </Animated.View>
      <View style={{ height: height - 190 }}></View>
      <View style={styles.modal2}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.miniBar} />
          <Text style={{ fontFamily: "GangwonEduAllBold" }}>만들기</Text>
        </View>
        <View style={styles.modalBar} />
        <View style={styles.menu}>
          <Pressable
            onPress={goToReels}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="ios-play-circle-outline" size={25} color="black" />
              <Text style={styles.text}>릴스</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={goToPost}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="grid" size={25} color="black" />
              <Text style={styles.text}>게시물</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={goToStory}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.2 : 1,
              },
            ]}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="plus-circle-outline"
                size={25}
                color="black"
              />
              <Text style={styles.text}>스토리</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modal2: {
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  miniBar: {
    backgroundColor: "gray",
    height: 3,
    width: 30,
    marginTop: 15,
    marginBottom: 5,
  },
  modalBar: {
    borderWidth: 0.3,
    width: "100%",
    opacity: 0.3,
    marginTop: 10,
  },
  text: {
    fontFamily: "GangwonEduAllBold",
    paddingLeft: 10,
    paddingTop: 3,
  },
  menu: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 120,
    justifyContent: "space-around",
  },
});

export default Modal2;
