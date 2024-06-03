import { useNavigation } from "@react-navigation/native";
import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Post } from "../../models";

type SearchPostProps = {
  post: Post;
  index: number;
};

const { width } = Dimensions.get("window");
const POST_WIDTH = (width - 6) / 3;

function SearchPost({ post, index }: SearchPostProps) {
  const navigation = useNavigation();
  // 0 ~ 3 random number
  // const random = Math.floor(Math.random() * 3);
  const [image, setImage] = useState("");

  const getImage = async (key: string) => {
    return Storage.get(key, {
      download: false,
    });
  };

  useEffect(() => {
    (async () => {
      const newImage = await getImage(post.imageUri);
      setImage(newImage);
    })();
  }, []);

  return (
    <TouchableOpacity
      style={[
        {
          width: POST_WIDTH,
          height: POST_WIDTH,
          marginBottom: 3,
        },
        { marginRight: index % 3 === 2 ? 0 : 3 },
      ]}
      onPress={() => navigation.navigate("Discover", { post })}
      key={post.id}
    >
      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      )}
      <View
        style={{
          position: "absolute",
          right: 7,
          top: 7,
        }}
      >
        <Icon name="documents" size={20} color="white" />
      </View>
    </TouchableOpacity>
  );
}

export default SearchPost;
