import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PostAndRils from "../components/PostAndRils";

const imageArray = new Array(50).fill(0).map((_, i) => ({
  id: i,
  type: "image",
  uri: `https://unsplash.it/600/600?image=${i + 1}`,
  createdAt: "6 minutes ago",
}));

const rilsArray = new Array(20).fill(0).map((_, i) => ({
  id: i,
  type: "ril",
  uri: `https://unsplash.it/600/600?image=${i + 1}`,
  createdAt: "6 minutes ago",
}));

const postAndRils = new Array(10).fill(0).map((_, i) => ({
  id: i,
  images: imageArray.slice(i * 4, (i + 1) * 4),
  rils: rilsArray.slice(i, i + 1),
}));

function SearchScreen() {
  const [paR, setPaR] = useState(postAndRils);

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
        <Icon name="search" size={20} color="black" />
        <View style={styles.searchView}>
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>

      <FlatList
        data={paR}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <PostAndRils posts={item.images} rils={item.rils} index={index} />
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
  },
  searchView: {
    flex: 1,
    height: 30,
    backgroundColor: "#eee",
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 30,
    backgroundColor: "#eee",
    borderRadius: 5,
    paddingLeft: 10,
  },
  scrollView: {
    width: "100%",
    backgroundColor: "yellow",
  },
});

export default SearchScreen;
