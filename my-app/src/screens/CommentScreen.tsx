import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const CommentScreen = ({ route, Navigation }) => {
  const { postPersonImage } = route.params || {}; // post에서 넘어온 이미지를 route로 받아옴 params는 객체
  const { userId } = route.params || {};
  const { comment } = route.params || {};

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            return navigation.navigate("BottomTabScreen");
          }}
        >
          <Ionic name="chevron-back-outline" style={{ fontSize: 30 }} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>댓글</Text>
        </View>
        <View>
          <Feather
            name="send"
            style={{
              fontSize: 23,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.1,
          flexDirection: "row",
          paddingHorizontal: 10,
          alignItems: "center",
          borderBottomColor: "gray",
          borderBottomWidth: 0.3,
        }}
      >
        <View>
          {/* postPersonImage넣기 */}
          <Image
            source={postPersonImage}
            style={{
              width: 33,
              height: 33,
              borderRadius: 100,
              backgroundColor: "orange",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>
        <View style={{ paddingBottom: 20, flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>{userId}</Text>
          <Text style={{ paddingLeft: 3 }}>{comment}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommentScreen;
