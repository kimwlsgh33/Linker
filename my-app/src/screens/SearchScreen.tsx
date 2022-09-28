import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import EntryIcon from "react-native-vector-icons/Entypo";

import PostAndReels from "../components/PostAndReels";

const imageArray = new Array(50).fill(0).map((_, i) => ({
  id: i,
  type: "image",
  uri: `https://unsplash.it/600/600?image=${i + 1}`,
  createdAt: "6 minutes ago",
}));

const reelsArray = new Array(20).fill(0).map((_, i) => ({
  id: i,
  type: "ril",
  uri: `https://unsplash.it/600/600?image=${i + 1}`,
  createdAt: "6 minutes ago",
}));

const postAndReels = new Array(10).fill(0).map((_, i) => ({
  id: i,
  images: imageArray.slice(i * 4, (i + 1) * 4),
  reels: reelsArray.slice(i, i + 1),
}));

function SearchScreen() {
  const [paR, setPaR] = useState(postAndReels);

  if (paR.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No posts found</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchView}>
          <Icon name="search" size={15} color="rgba(0,0,0,0.5)" />
          <TextInput style={styles.searchInput} placeholder="검색" />
        </View>

        <EntryIcon name="location" size={20} color="rgba(0,0,0,0.5)" />
      </View>

      <FlatList
        data={paR}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <PostAndReels posts={item.images} reels={item.reels} index={index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 10,
  },
  searchView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    height: 30,
    paddingLeft: 5,
  },
  scrollView: {
    width: "100%",
    backgroundColor: "yellow",
  },
});

export default SearchScreen;
