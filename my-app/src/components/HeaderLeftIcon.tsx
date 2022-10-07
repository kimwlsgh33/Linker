import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function HeaderLeftIcon({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="chevron-back-outline" size={30} color="black" />
    </TouchableOpacity>
  );
}

export default HeaderLeftIcon;
