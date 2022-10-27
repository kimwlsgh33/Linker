import React from "react";
import { Image, Text, View } from "react-native";

function SearchProfile({ uri, username, name, friendsFollowers }) {
  return (
    <View style={{ flexDirection: "row", padding: 5 }}>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "green",
          marginRight: 10,
        }}
      >
        <Image source={{ uri }} style={{ width: 50, height: 50 }} />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text>{username}</Text>
        <Text>
          {name}﹒{friendsFollowers}
        </Text>
      </View>
    </View>
  );
}

export default SearchProfile;
