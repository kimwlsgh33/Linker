import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import EntryIcon from "react-native-vector-icons/Entypo";

import PostAndReels from "../components/PostAndReels";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAnimationValue } from "../hooks/useAnimationValue";
import { useStyle } from "../hooks/useStyle";
import { interpolate } from "../utils/interpolate";

//================================================================================================
// data sets
const imageArray = new Array(50).fill(0).map((_, i) => ({
  id: i,
  type: "image",
  uri: `https://unsplash.it/600/600?image=${i + 1}`,
  createdAt: "6 minutes ago",
}));

const reelsArray = new Array(20).fill(0).map((_, i) => ({
  id: i,
  type: "ril",
  uri: `https://unsplash.it/600/600?image=${i + 1}`,
  createdAt: "6 minutes ago",
}));

const postAndReels = new Array(10).fill(0).map((_, i) => ({
  id: i,
  images: imageArray.slice(i * 4, (i + 1) * 4),
  reels: reelsArray.slice(i, i + 1),
}));
//================================================================================================
// animated Pressable 만들기
const AnimTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
//================================================================================================
// 화면 크기 구하기
const { width, height } = Dimensions.get("window");

function SearchScreen() {
  const [paR, setPaR] = useState(postAndReels);
  const [visible, setVisible] = useState(false);

  if (paR.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No posts found</Text>
      </View>
    );
  }
  const leftAnimValue = useAnimationValue(-40);
  // 뒤에 화면을 대기하고 있다가, 애니메이션을 시작하면서 앞에 화면을 띄워주는 방식
  const zindexAnimValue = useAnimationValue(-1);
  const opacityAnimValue = useAnimationValue(0);
  // 검색 TextInput을 눌렀을때, 검색창의 width가 줄어드는 애니메이션
  const inputAnimValue = useAnimationValue(width - 20 - 40);
  const inputAnimStyle = useStyle({
    width: inputAnimValue,
  });
  const beforeIconAnimStyle = useStyle({
    opacity: interpolate(opacityAnimValue, [1, 0]),
    zIndex: interpolate(zindexAnimValue, [1, -1], [-1, 1]),
  });

  const modalAnim = () => {
    // parallel: 동시에 실행
    // sequence: 순차적으로 실행
    Animated.parallel([
      Animated.timing(zindexAnimValue, {
        toValue: visible ? -1 : 1, // 화면이 보이는 상태에서는(true) -1, 안보이는 상태에서는 1
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimValue, {
        toValue: visible ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(inputAnimValue, {
        toValue: visible ? width - 20 - 40 : width - 20 - 50,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(leftAnimValue, {
        toValue: visible ? -40 : 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const open = () => {
    setVisible(true);
    modalAnim();
  };

  const close = () => {
    Keyboard.dismiss();
    setVisible(false);
    modalAnim();
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.header}>
        <Animated.View style={[styles.searchView, inputAnimStyle]}>
          <Icon name="search" size={15} color="rgba(0,0,0,0.5)" />

          <TextInput
            style={styles.searchInput}
            placeholder="검색"
            onFocus={open}
          />
        </Animated.View>

        <View style={styles.iconView}>
          <AnimTouchableOpacity style={beforeIconAnimStyle}>
            <View>
              <EntryIcon name="location" size={20} color="rgba(0,0,0,0.5)" />
            </View>
          </AnimTouchableOpacity>
          <AnimTouchableOpacity
            style={[
              styles.animIcon,
              {
                transform: [
                  {
                    translateX: leftAnimValue,
                  },
                ],
                opacity: opacityAnimValue,
                zIndex: zindexAnimValue,
              },
            ]}
            onPress={close}
          >
            <Text>취소</Text>
          </AnimTouchableOpacity>
        </View>
      </View>

      <FlatList
        data={paR}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <PostAndReels posts={item.images} reels={item.reels} index={index} />
        )}
      />

      <Animated.View
        style={[
          styles.backgroundView,
          {
            zIndex: zindexAnimValue,
            opacity: opacityAnimValue,
          },
        ]}
      >
        <View>
          <Text>test</Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 10,
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 7,
    paddingVertical: 2,
    borderRadius: 10,
    zIndex: 2,
  },
  searchInput: {
    flex: 1,
    height: 30,
    paddingLeft: 5,
  },
  iconView: {
    justifyContent: "center",
    alignItems: "center",
  },
  animIcon: {
    backgroundColor: "white",
    position: "absolute",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
    backgroundColor: "yellow",
  },
  backgroundView: {
    position: "absolute",
    top: 95,
    width,
    height: height,
    backgroundColor: "white",
  },
});

export default SearchScreen;
