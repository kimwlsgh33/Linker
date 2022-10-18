import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Keyboard,
  Platform,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import EntryIcon from "react-native-vector-icons/Entypo";

import PostAndReels from "../components/PostAndReels";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAnimationValue } from "../hooks/useAnimationValue";
import { useStyle } from "../hooks/useStyle";
import { interpolate } from "../utils/interpolate";
import SearchProfile from "../components/SearchProfile";
import { TPost, TPostAndReels, TReel } from "../global";
import UserBar from "../components/UserBar";

//================================================================================================
// data sets & types
//================================================================================================

const postsArray: TPost[] = new Array(50).fill(0).map((_, i) => ({
  id: `${i}_post`,
  user_id: `user_id_${i}`,
  images: new Array(3).fill(0).map((_, i) => ({
    id: `${i}_image`,
    uri: "https://picsum.photos/600",
  })),
  createdAt: "6 minutes ago",
}));

const reelsArray: TReel[] = new Array(20).fill(0).map((_, i) => ({
  id: `${i}_reel`,
  type: "ril",
  uri: "https://picsum.photos/600",
  createdAt: "6 minutes ago",
}));

const postAndReels: TPostAndReels[] = new Array(10).fill(0).map((_, i) => ({
  id: `${i}_postAndReels`,
  posts: postsArray.slice(i * 4, (i + 1) * 4),
  reels: reelsArray.slice(i, i + 1),
}));
//================================================================================================
// animated Pressable 만들기
const AnimTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
//================================================================================================
// 화면 크기 구하기
const { width, height } = Dimensions.get("window");

function SearchScreen() {
  const [searchText, setSearchText] = useState<string>("");
  // useEffect(() => {
  //   console.log("searchText", searchText);
  // }, [searchText]);
  const [paR, setPaR] = useState<TPostAndReels[]>(postAndReels);
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<TextInput>(null);

  const [users, setUsers] = useState<string[]>([]);
  useEffect(() => {
    axios

  // 만약에 포스트, 릴스가 없으면, 내용이 없다는 문구를 보여준다.
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
        duration: 300,
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
    inputRef.current.clear();
    Keyboard.dismiss();
    setVisible(false);
    modalAnim();
  };

  // 사용자가 입력을 멈추었을때, 검색 로직을 실행하기 위한 timeout 변수
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  const searchStart = () => {
    setLoading(true);
    searchTimeout.current = setTimeout(() => {
      console.log("search");
      setLoading(false);
    }, 1000);
  };

  // 검색창에 글자를 입력할때마다 실행되는 함수
  const search = (text: string) => {
    setSearchText(text);
    // 이전에 실행되고 있는 타임아웃을 제거
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchStart();
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
            returnKeyType="search"
            value={searchText}
            onChangeText={search}
            ref={inputRef}
          />
          {searchText && (
            <Pressable onPress={() => setSearchText("")}>
              <Icon name="close-circle" size={20} color="rgba(0,0,0,0.5)" />
            </Pressable>
          )}
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
          <PostAndReels posts={item.posts} reels={item.reels} index={index} />
        )}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => console.log("검색창 새로고침")}
          />
        }
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
        {loading ? (
          <Animated.View style={[styles.loading]}>
            <Text>loading...</Text>
          </Animated.View>
        ) : (
          searchText && (
            <>
              <Pressable
                style={({ pressed }) => [
                  styles.searchedIconView,
                  pressed && {
                    backgroundColor: "#eee",
                  },
                ]}
              >
                <View
                  style={{
                    width: 50,
                    alignItems: "center",
                  }}
                >
                  <View style={styles.searchedIcon}>
                    <Icon name="search" size={23} />
                  </View>
                </View>
                <Text>{searchText}</Text>
              </Pressable>

              <UserBar />
              <UserBar isOutline />

              <Pressable
                onPress={() => console.log("presseds")}
                style={({ pressed }) => [
                  styles.resultAll,
                  pressed && { opacity: 0.5 },
                ]}
              >
                <Text style={styles.resultAllText}>결과 모두 보기</Text>
              </Pressable>
            </>
          )
        )}
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
    paddingRight: 3,
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
    top: Platform.OS === "ios" ? 95 : 50,
    width,
    height: height,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  searchedIconView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  searchedIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  profpic: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  username: {
    fontSize: 15,
    fontWeight: "bold",
  },
  nickname: {
    fontSize: 13,
    color: "#666",
  },
  resultAll: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  resultAllText: {
    color: "blue",
    fontWeight: "700",
  },
  loading: {
    flex: 1,
    backgroundColor: "yellow",
  },
});

export default SearchScreen;

/*
1. 검색창에 텍스트 입력 시작
2. 검색 결과 로딩 화면 진입
  - setLoading(true)
3. 텍스트 입력 마치면, 검색 로직 시작
  - 텍스트 입력이 멈추었다는 것 검사
  - 텍스트 입력시 마다 검색
    - 이전 검사 중지
    - 새로운 검사시작
5. 검색 완료
  - setLoading(false)
6. 검색 
7. 검색 결과와 일치하는 4개만 보여줌
8. 결과 모두 보기 보여줌
*/
