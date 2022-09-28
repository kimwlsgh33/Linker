import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function PostScreen({ route }) {
  const { post } = route.params;
  console.log(post);
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.uri }} style={styles.image} />
      <Text>{post?.createdAt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    height: 500,
    width: "100%",
  },
});

export default PostScreen;
