import { DataStore } from "aws-amplify";
import React from "react";
import { Text, View, StyleSheet,Pressable} from "react-native";
import { User } from "../models";

const delete2 =
async() => {
    const user = await DataStore.query(User, (user) => user.name('eq', 'duislaboreoccaecatenimide'))
    DataStore.delete(user[0])
};

export default function AnotherAc({navigation}) {

    return (
<View style={styles.Container}>
    <View style={styles.Headerbox}>
        <Text style={styles.HeaderText}>LINGKER</Text>
    </View>
    <View style={styles.MapBox}>
        <Pressable onPress={delete2}>
        <Text style={{color:"blue",fontSize:20}}>DeleteUsername</Text>
        </Pressable>
    </View>
    <View style={styles.footerbox}>
        <View style={[styles.footerViewbox,{borderRightWidth:1,borderColor:"#333333"}]}>
            <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{color:"#013ADF",fontWeight:"bold"}}>계정 변경</Text>
            </Pressable>
        </View>
        <View style={styles.footerViewbox}>
            <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{color:"#013ADF",fontWeight:"bold"}}>가입 하기</Text>
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
        backgroundColor:"#ffffff",height:"85%"
    },

    HeaderText: {
        fontWeight:"bold",
        fontSize:30,
        color:"#000000"
    },

    Headerbox: {
        alignItems:"center",
        backgroundColor:"#ffffff",
        height:"8%",
        justifyContent:"center"
    },

    Container:{
        flex:1,
        height:"100%",
        backgroundColor:"#ffffff"
    }
});
