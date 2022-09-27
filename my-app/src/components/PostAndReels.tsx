import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import SearchReels from "./SearchReels";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const POST_WIDTH = (width - 6) / 3;

function PostAndReels({ posts, reels, index }) {
  const isLeft = index % 2 === 0;
  const navigation = useNavigation();
  return (
    <View style={styles.postAndReels}>
      {!isLeft && <SearchReels POST_WIDTH={POST_WIDTH} uri={reels[0].uri} />}
      <View style={styles.postView}>
        {posts.map((post) => (
          <TouchableOpacity
            key={post.id}
            style={[
              styles.imageBtn,
              isLeft ? { marginRight: 3 } : { marginLeft: 3 },
            ]}
            onPress={() => navigation.navigate("Post", { post })}
          >
            <Image source={{ uri: post.uri }} style={styles.image} />
            <View
              style={{
                position: "absolute",
                right: 7,
                top: 7,
              }}
            >
              <Icon name="documents" size={20} color="white" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {isLeft && <SearchReels POST_WIDTH={POST_WIDTH} uri={reels[0].uri} />}
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

export default PostAndReels;
