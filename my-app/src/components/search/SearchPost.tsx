import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Post } from "../../models";

type SearchPostProps = {
  post: Post;
  key: number;
};

const { width } = Dimensions.get("window");
const POST_WIDTH = (width - 6) / 3;

function SearchPost({ post, key }: SearchPostProps) {
  const navigation = useNavigation();
  // 0 ~ 3 random number
  // const random = Math.floor(Math.random() * 3);

  return (
    <TouchableOpacity
      style={[
        {
          width: POST_WIDTH,
          height: POST_WIDTH,
          marginBottom: 3,
        },
        { marginRight: key % 3 === 2 ? 0 : 3 },
      ]}
      onPress={() => navigation.navigate("Discover", { post })}
    >
      <Image
        source={{ uri: post.imageUri }}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
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
  );
}

export default SearchPost;
