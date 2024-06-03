import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import SearchReel from "./SearchReel";
import SearchPost from "./SearchPost";
import { TPost, TReel } from "../../global";

const { width } = Dimensions.get("window");
const POST_WIDTH = (width - 6) / 3;

type PostAndReelsProps = {
  posts: TPost[];
  reels: TReel[];
  index: number;
};

function PostAndReels({ posts, reels, index }: PostAndReelsProps) {
  // 만약 index가 짝수면 오른쪽에 reels를, 홀수면 왼쪽에 reels를 배치한다.
  const isLeft = index % 2 === 0;

  return (
    <View style={styles.postAndReels}>
      {!isLeft && <SearchReel POST_WIDTH={POST_WIDTH} uri={reels[0].uri} />}
      <View style={styles.postView}>
        {posts.map((post) => (
          <SearchPost
            key={post.id}
            post={post}
            POST_WIDTH={POST_WIDTH}
            isLeft={isLeft}
          />
        ))}
      </View>
      {isLeft && <SearchReel POST_WIDTH={POST_WIDTH} uri={reels[0].uri} />}
    </View>
  );
}

const styles = StyleSheet.create({
  postAndReels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  postView: {
    width: POST_WIDTH * 2 + 6,
    height: POST_WIDTH * 2 + 3,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default PostAndReels;
