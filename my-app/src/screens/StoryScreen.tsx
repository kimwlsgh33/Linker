import React from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionic from "react-native-vector-icons/Ionicons";

const StoryScreen = ({ route, navigation }) => {
  const { name } = route.params || {};
  const { image } = route.params || {};

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor={"black"} barStyle={"light-content"} />{" "}
      {/* 상태바 */}
      <View
        style={{
          height: 3,
          width: "95%",
          borderWidth: 1,
          backgroundColor: "grey",
          position: "absolute",
          top: 18,
        }}
      >
        <View style={{}}></View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          position: "absolute",
          top: 12,
          left: 0,
          width: "90%",
        }}
      >
        <View
          style={{
            borderRadius: 100,
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={image}
            style={{
              width: 33,
              height: 33,
              borderRadius: 100,
              backgroundColor: "orange",
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={{ color: "white", fontSize: 13, paddingLeft: 14 }}>
            {name}
          </Text>
          <TouchableOpacity style={{ position: "absolute", paddingLeft: 270 }}>
            <Feather
              name="more-horizontal"
              style={{ fontSize: 20, color: "white" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // 9/29
            onPress={() => {
              return navigation.navigate("BottomTabScreen");
            }} // ------------------
            style={{ flexDirection: "row", justifyContent: "center" }}
          >
            <Ionic
              name="close"
              style={{
                color: "white",
                fontSize: 30,
                opacity: 0.6,
                alignItems: "center",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StoryScreen;
