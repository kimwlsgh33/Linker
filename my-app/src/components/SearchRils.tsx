import React from "react";
import { Image, TouchableOpacity } from "react-native";

function SearchRils({ POST_WIDTH, uri }) {
  return (
    <TouchableOpacity
      style={{
        width: POST_WIDTH,
        height: POST_WIDTH * 2,
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

export default SearchRils;
