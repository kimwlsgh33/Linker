import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Pressable, View } from "react-native";

function PostThumbnail({ post }) {
  const [user, setUser] = useState();
  const navigation = useNavigation();
  const storyPressed = (user) => {
    navigation.navigate("Story", {
      name: user.name,
      image: user.imageUri,
      userName: user.username,
    });
  };
  return (
    <View>
      <View>
        <Pressable
          onPress={() => {
            storyPressed(user);
          }}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.7 : 1,
            },
          ]}
        >
          <Image
            source={{ uri: "https://source.unsplash.com/daily" }}
            style={{ width: 130, height: 130, marginVertical: 1 }}
            resizeMode="cover"
          />
        </Pressable>
      </View>
    </View>
  );
}

export default PostThumbnail;
