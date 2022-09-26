import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import SearchRils from "./SearchRils";

const { width } = Dimensions.get("window");
const POST_WIDTH = (width - 6) / 3;

function PostAndRils({ posts, rils, index }) {
  const isLeft = index % 2 === 0;
  return (
    <View style={styles.postAndRils}>
      {!isLeft && <SearchRils POST_WIDTH={POST_WIDTH} uri={rils[0].uri} />}
      <View style={styles.postView}>
        {posts.map((post) => (
          <TouchableOpacity
            key={post.id}
            style={[
              styles.imageBtn,
              isLeft ? { marginRight: 3 } : { marginLeft: 3 },
            ]}
          >
            <Image source={{ uri: post.uri }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
      {isLeft && <SearchRils POST_WIDTH={POST_WIDTH} uri={rils[0].uri} />}
    </View>
  );
}

const styles = StyleSheet.create({
  postAndRils: {
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
  imageBtn: {
    width: POST_WIDTH,
    height: POST_WIDTH,
    marginBottom: 3,
  },
  image: {
    width: POST_WIDTH,
    height: POST_WIDTH,
  },
});

export default PostAndRils;
