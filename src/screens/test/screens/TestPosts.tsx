import { DataStore, Storage, Predicates } from "aws-amplify";
import React, { useEffect, useMemo, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Post } from "../../../models";
import { useMeStore, usePostStore } from "../../../store";
import TestPost from "./TestPost";

function TestPosts({ navigation }) {
  const { me, setMe } = useMeStore();

  const { posts, setPosts } = usePostStore();

  const getPosts = async () => {
    const posts = await DataStore.query(Post, (post) =>
      post.userID("eq", me.id)
    );
    if (!!posts) {
      console.log("posts : ", posts[0]?.imageUrls);
      setPosts(posts);
    }
  };

  // const deletePosts = async () => {
  //   const result = await DataStore.delete(Post, Predicates.ALL);
  //   console.log("result: ", result);
  // };

  useEffect(() => {
    // getPosts();
  }, []);

  return (
    <SafeAreaView>
      <Text>TestPosts</Text>
      <View style={styles.bar}>
        <Text style={styles.barText}>{me?.name}</Text>
      </View>
      <TouchableOpacity style={styles.bar} onPress={getPosts}>
        <Text style={styles.barText}>getPosts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bar}
        // onPress={deletePosts}
      >
        <Text style={styles.barText}>deletePosts</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TestPost item={item} />}
        ListEmptyComponent={() => (
          <View>
            <Text>No Posts</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 210 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: "100%",
    height: 70,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  barText: {
    color: "white",
  },
});

export default TestPosts;
