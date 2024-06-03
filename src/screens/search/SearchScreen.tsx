import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";

import PostAndReels from "../../components/search/PostAndReels";
import { SafeAreaView } from "react-native-safe-area-context";

// import SearchProfile from "../../components/SearchProfile";
// libs
import NotFound from "../NotFound";
import SearchBar from "./SearchBar";
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import useToggle from "../../hooks/useToggle";
import { DataStore } from "aws-amplify";
import { Post as TPost } from "../../models";
import SearchPost from "../../components/search/SearchPost";
import TestPost from "../test/screens/TestPost";
//========================

/*
  스토리들 ( 배열 ) - 맵으로 뿌려놨어
  본스토리들
  안본스토리들

  새로운배열 = [...안본스토리들] 

  새로운배열.map(()=>{

  })

  어떤 기능을 만들 것 인가?
  - (문제) 무조건 0번째 인덱스가 나온다. 
  - 처음에, 누른 인덱스가 나온다.
  - 다음에, 누른 인덱스 다음애가 나온다.
  - 새로고침하면, 본 스토리들을 마지막에 추가한다.
  - 다 보고 나왔을때, 새로고침 했을때 

1. 스토리 선택하고, 봄
- 3개 봤음

2. 홈으로 나감
- 안본스토리가 앞으로 와있음
- show === false인 요소 앞
- show === true인 요소 뒤 

[0,2,3,4,5,6,1]

1. 본 스토리를 상태로 저장한다.
2. 본 스토리를 배열에서 없앤다 (filter)
3. 상태에 저장된 본 스토리를 배열에 추가한다 (setStories)


stories.forEach((item, idx)=> {
  if(item.show === true){
    //TODO: true인 배열에 추가
  } else {
    //TODO: false인 배열에 추가
  }
})


  - 스토리 배열을 StoryScreen에 전달해줄때, 
  - 스토리 배열에서, 선택한 원소 앞에 있는 것을 없앤다. ( slice )


  - 선택한 인덱스를 StoryScreen에 전달,
  - 선택한 인덱스 부터, 화면 표출 시작
  - 배열에 끝에 도달하면, 홈으로


  1. 스토리들에서 안본스토리들만 필터링
  2. Stories에서 안본스토리 배열을 또 필터링(선택한 애 ~ 마지막)
  
  선택한애가 본 스토리다? - 
   
  - stories.map((item, index)=> {
    if(item.name === name){
      setStories((prev)=> prev.slice(index, -1))
    }
  })


  뭘 해야할지?
 */

//================================================================================================
// data sets & types
//================================================================================================

// const postsArray: TPost[] = new Array(50).fill(0).map((_, i) => ({
//   id: `${i}_post`,
//   user_id: `user_id_${i}`,
//   images: new Array(3).fill(0).map((_, i) => ({
//     id: `${i}_image`,
//     uri: "https://picsum.photos/600",
//   })),
//   createdAt: "6 minutes ago",
// }));

// const reelsArray: TReel[] = new Array(20).fill(0).map((_, i) => ({
//   id: `${i}_reel`,
//   type: "ril",
//   uri: "https://picsum.photos/600",
//   createdAt: "6 minutes ago",
// }));

// const postAndReels: TPostAndReels[] = new Array(10).fill(0).map((_, i) => ({
//   id: `${i}_postAndReels`,
//   posts: postsArray.slice(i * 4, (i + 1) * 4),
//   reels: reelsArray.slice(i, i + 1),
// }));
//================================================================================================
// animated Pressable 만들기

//================================================================================================

function SearchScreen() {
  // 검색창 피드 데이터
  const [paR, setPaR] = useState<any>([]);
  const [refreshing, setRefreshing] = useState();

  // 결과창 표시 상태에 따라, 애니메이션을 변경하기 위한 상태값
  const [contentsVisible, toggleContentsVisible] = useToggle(true);

  const getPosts = async () => {
    const posts = await DataStore.query(TPost);
    setPaR(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView edges={["top"]} style={[styles.container]}>
      <SearchBar toggleContentsVisible={toggleContentsVisible} />
      {contentsVisible && (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={{ flex: 1 }}>
          <FlatList
            data={paR}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              // <PostAndReels
              //   posts={item.posts}
              //   reels={item.reels}
              //   index={index}
              // />
              <SearchPost post={item} index={index} />
            )}
            numColumns={3}
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={getPosts} />
            }
            contentContainerStyle={{ paddingBottom: 100 }}
            ListEmptyComponent={<NotFound />}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default SearchScreen;
