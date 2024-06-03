import { v4 } from "uuid";
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Post } from "../models";
import { DataStore } from "aws-amplify";

export function UpdatePostComponet() {
  const [post, setPost] = useState<Post | null>();
  useEffect(() => {
    /**
     * This keeps `todo` fresh.
     */
    const sub = DataStore.observeQuery(Post, (c) =>
      c.id("eq", "e4dd1dc5-e85c-4566-8aaa-54a801396456")
    ).subscribe(({ items }) => {
      setPost(items[0]);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);
  return (
    <>
      <Text>{post?.title}</Text>
      <TouchableOpacity
        value={post?.title ?? ""}
        onChangeText={({ target: { value } }) => {
          /**
           * Each keypress updates the post in local react state.
           */
          setPost(
            Post.copyOf(post!, (draft) => {
              draft.title = value;
            })
          );
        }}
      />

      <TouchableOpacity
        onPress={async () => {
          await DataStore.save(post!);
          console.log("Post saved");
        }}
      />
    </>
  );
}
