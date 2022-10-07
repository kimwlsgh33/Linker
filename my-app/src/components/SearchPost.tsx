import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { TPost } from "../screens/screen";

type SearchPostProps = {
  post: TPost;
  POST_WIDTH: number;
  isLeft: boolean;
};

function SearchPost({ post, POST_WIDTH, isLeft }: SearchPostProps) {
  const navigation = useNavigation();
  // 0 ~ 3 random number
  const random = Math.floor(Math.random() * 3);
  return (
    <TouchableOpacity
      style={[
        {
          width: POST_WIDTH,
          height: POST_WIDTH,
          marginBottom: 3,
        },
        isLeft ? { marginRight: 3 } : { marginLeft: 3 },
      ]}
      onPress={() => navigation.navigate("Discover", { post })}
    >
      <Image
        source={{ uri: post.images[random].uri }}
        style={{
          width: POST_WIDTH,
          height: POST_WIDTH,
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
