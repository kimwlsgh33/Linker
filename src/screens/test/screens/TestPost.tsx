import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function TestPost({ item }) {
  const [image, setImage] = useState("");

  const getImage = async (key: string) => {
    return Storage.get(key, {
      download: false,
    });
  };

  useEffect(() => {
    (async () => {
      const newImage = await getImage(item.imageUri);
      setImage(newImage);
    })();
  }, []);

  return (
    <View>
      <Text>{item.imageUri}</Text>
      <Text>{item.text}</Text>
      <Text>{item.link}</Text>
      {image && <Image style={styles.image} source={{ uri: image }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    backgroundColor: "pink",
  },
});

export default TestPost;
