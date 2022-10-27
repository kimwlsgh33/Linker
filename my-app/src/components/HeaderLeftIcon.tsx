import React from "react";
import { TouchableOpacity,StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function HeaderLeftIcon({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.LeftIcon}>
      <Icon name="chevron-back-outline" size={30} color="#000000" />
    </TouchableOpacity>
  );
}

const styles=StyleSheet.create({
    LeftIcon: {
        marginLeft: 10,
    }
})

export default HeaderLeftIcon;
