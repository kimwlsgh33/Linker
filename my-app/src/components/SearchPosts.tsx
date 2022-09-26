import React from "react";
import { Image, TouchableOpacity } from "react-native";

function SearchPosts({ POST_WIDTH, uri }) {
  return (
    <TouchableOpacity
      style={{
        width: POST_WIDTH,
        height: POST_WIDTH * 2,
        backgroundColor: "red",
      }}
    >
      <Image
        source={{ uri }}
        style={{
          width: POST_WIDTH,
          height: POST_WIDTH * 2 + 3,
        }}
      />
    </TouchableOpacity>
  );
}

export default SearchPosts;
