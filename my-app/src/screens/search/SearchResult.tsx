import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import UserBar from "../../components/search/UserBar";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { HomeTabScreenProps } from "../../navigation/types";
import { User } from "../../models";

function SearchResult({ searchText, users }) {
  const navigation =
    useNavigation<HomeTabScreenProps<"Search">["navigation"]>();

  const showUsers: User[] = users.length > 5 ? users.slice(0, 5) : users;

  return (
    <>
      <Pressable
        style={({ pressed }) => [
          styles.searchedIconView,
          pressed && {
            backgroundColor: "#eee",
          },
        ]}
      >
        <View
          style={{
            width: 50,
          }}
        >
          <View style={styles.searchedIcon}>
            <Icon name="search" size={23} />
          </View>
        </View>
        <Text>{searchText}</Text>
      </Pressable>

      {showUsers.length !== 0 ? (
        <View>
          {showUsers.map((user) => (
            <UserBar key={user.id} user={user} />
          ))}
          <Pressable
            onPress={() => navigation.navigate("SearchResult")}
            style={({ pressed }) => [
              styles.resultAll,
              pressed && { opacity: 0.5 },
            ]}
          >
            <Text style={styles.resultAllText}>결과 모두 보기</Text>
          </Pressable>
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Text>유저가 존재하지 않습니다.</Text>
        </View>
      )}
      {/* <UserBar isOutline /> */}
    </>
  );
}

const styles = StyleSheet.create({
  searchedIconView: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  searchedIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
  resultAll: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  resultAllText: {
    color: "#0095f6",
    fontWeight: "700",
  },
});

export default SearchResult;
