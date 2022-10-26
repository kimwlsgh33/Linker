import React from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import EntryIcon from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Ionicons";

/**
 * TextInput onFocus =>
 */
function SearchHeader() {
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

  // 검색창에 글자를 입력할때마다 실행되는 함수
  const search = (text: string) => {
    setSearchText(text);
    // 이전에 실행되고 있는 타임아웃을 제거
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    searchStart();
  };

  const searchStart = () => {
    setLoading(true);
    searchTimeout.current = setTimeout(async () => {
      try {
        const res = await axios({
          method: "get",
          url: "https://jsonplaceholder.typicode.com/users",
          responseType: "json",
        });
        setUsers(res.data);
      } catch (e) {
        Alert.alert("검색에 실패했습니다.", e);
      }
      setLoading(false);
    }, 2000);
  };

  return (
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
  );
}

const styles = StyleSheet.create({
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
});

export default SearchHeader;
