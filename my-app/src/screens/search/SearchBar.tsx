import React, { useRef, useState } from "react";
import {
  Alert,
  //   Animated,
  Dimensions,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
//libs
import { interpolate } from "../../utils/interpolate";
import axios from "axios";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  FadeIn,
  FadeOut,
  withTiming,
  Easing,
} from "react-native-reanimated";
//hooks
import { useAnimationValue } from "../../hooks/useAnimationValue";
//icons
import IonIcon from "react-native-vector-icons/Ionicons";

//types
import type { JUser } from "../../global";
//components
import { TextInput } from "react-native-gesture-handler";
import UserBarPlaceholder from "../../components/UserBarPlaceholder";
import SearchResult from "./SearchResult";
import SwipedIcon from "../../components/searchScreen/SwipedIcon";
import useToggle from "../../hooks/useToggle";

// 화면 크기 구하기
const { width, height } = Dimensions.get("window");

function SearchBar() {
  // 검색 텍스트, 검색 결과
  const [searchText, setSearchText] = useState<string>("");
  const [users, setUsers] = useState<JUser[]>([]);
  const inputRef = useRef<TextInput>(null);

  // 결과창 표시 상태에 따라, 애니메이션을 변경하기 위한 상태값
  const [visible, toggleVisible] = useToggle();

  // 검색 중 일때 특정 화면 보여주기
  const [loading, setLoading] = useState<boolean>(false);

  const width = useSharedValue(width - 20 - 30);
  const widthStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 400,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });
  //   const opacityAnimValue = useAnimationValue(0);
  //   const inputAnimValue = useAnimationValue(width - 20 - 40);

  // 검색창을 눌렀을때 실행되는 애니메이션
  //   const modalAnim = () => {
  //     // parallel: 동시에 실행
  //     // sequence: 순차적으로 실행
  //     Animated.parallel([
  //       Animated.timing(opacityAnimValue, {
  //         // 결과창 투명도 조절
  //         toValue: visible ? 0 : 1,
  //         duration: 300,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(inputAnimValue, {
  //         // 검색창의 width가 줄어드는 애니메이션
  //         toValue: visible ? width - 20 - 40 : width - 20 - 50,
  //         duration: 300,
  //         useNativeDriver: false,
  //       }),
  //     ]).start();
  //   };

  // 검색 결과창 열기
  const open = () => {
    toggleVisible();
    // modalAnim();
    width.value = width - 20 - 40;
  };

  // 검색 결과창 닫기
  const close = () => {
    inputRef.current.clear();
    Keyboard.dismiss();
    toggleVisible();
    width.value = width - 20 - 30;
    // modalAnim();
  };

  //================================================================================================
  //======================================[ 검색 결과 가져오기 ]=======================================
  //================================================================================================
  // 사용자가 입력을 멈추었을때, 검색 로직을 실행하기 위한 timeout 변수
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);

  // 검색 시작 함수
  const searchStart = () => {
    setLoading(true);
    // 일정 시간 지나면, 검색 로직 실행
    searchTimeout.current = setTimeout(async () => {
      try {
        const res = await axios({
          method: "get",
          url: "https://jsonplaceholder.typicode.com/users",
          responseType: "json",
        });
        setUsers(res.data.slice(0, 5));
      } catch (e) {
        Alert.alert("검색에 실패했습니다.", e);
      }
      setLoading(false);
    }, 2000);
  };

  // 검색창에 글자를 입력할때마다 실행되는 함수
  const search = (text: string) => {
    setSearchText(text);
    // 이전에 실행되고 있는 타임아웃을 제거
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    // 검색 시작
    searchStart();
  };

  return (
    <>
      <View style={styles.header}>
        <Animated.View style={[styles.searchView, widthStyle]}>
          <IonIcon name="search" size={15} color="rgba(0,0,0,0.5)" />
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
              <IonIcon name="close-circle" size={20} color="rgba(0,0,0,0.5)" />
            </Pressable>
          )}
        </Animated.View>
        <SwipedIcon
          defaultPress={() => console.log("default")}
          secondPress={close}
          toggleValue={visible}
        />
      </View>
      {visible && (
        <Animated.View
          style={styles.backgroundView}
          entering={FadeIn}
          exiting={FadeOut}
        >
          {loading ? (
            <View style={styles.loading}>
              <UserBarPlaceholder num={6} />
            </View>
          ) : (
            searchText && <SearchResult searchText={searchText} users={users} />
          )}
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginHorizontal: 10,
  },
  searchView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 7,
    paddingRight: 3,
    paddingVertical: 2,
    borderRadius: 10,
    // zIndex: 2,
  },
  searchInput: {
    flex: 1,
    height: 30,
    paddingLeft: 5,
  },
  backgroundView: {
    position: "absolute",
    top: Platform.OS === "ios" ? 95 : 50,
    width,
    height: height,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    zIndex: 1,
  },
  loading: {
    flex: 1,
  },
});

export default SearchBar;
