import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Pressable,SafeAreaView} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";

export default function AnotherAc({navigation}) {
    return (
<View style={styles.Container}>
    <View style={styles.Headerbox}>
        <Text style={styles.HeaderText}>Instagram</Text>
    </View>
    <View style={styles.MapBox}>
        <Text style={{color:"yellow"}}>ImMap</Text>
    </View>
    <View style={styles.footerbox}>
        <View style={[styles.footerViewbox,{borderRightWidth:1,borderColor:"#333333"}]}>
            <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{color:"#013ADF"}}>계정 변경</Text>
            </Pressable>
        </View>
        <View style={styles.footerViewbox}>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{color:"#013ADF"}}>가입 하기</Text>
            </Pressable>
        </View>
    </View>
</View>

);
}

const styles = StyleSheet.create({
    footerViewbox:{
        height:"100%",
        width:"50%",
        alignItems:"center",
        justifyContent:"center"
    },

    footerbox: {
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        borderTopWidth:1,
        borderTopColor:"#333333"
    },

    MapBox: {
        backgroundColor:"#000000",height:"85%"
    },

    HeaderText: {
        fontWeight:"bold",
        fontSize:30,
        color:"#FFFAFA"
    },

    Headerbox: {
        alignItems:"center",
        backgroundColor:"black",
        height:"8%",
        justifyContent:"center"
    },

    Container:{
        flex:1,
        height:"100%",
        backgroundColor:"#000000"
    }
});
