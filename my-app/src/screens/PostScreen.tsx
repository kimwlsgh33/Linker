import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

function PostScreen({ route }) {
  const { post } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={post.images}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          console.log(item);
          return <Image source={{ uri: item.uri }} style={styles.image} />;
        }}
      />
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
