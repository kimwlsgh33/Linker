import React from "react";
import { Pressable, StyleSheet} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

type HeaderOptionProps = {
    name:string;
    component:any;
    title: string;
    navigation:any;
}


function HeaderOption ({name, component, title, navigation}: HeaderOptionProps) {
    return (
        <>
        name={name}
        component={component}
        options={{
            title:{title},
            headerTitleAlign: "center",
            headerTintColor: "#FFFAFA",
            headerStyle: { backgroundColor: "#000000" },
            headerLeft: () => (
                    <Pressable 
                        onPress={() => navigation.goBack()}
                        style={styles.headertitle}
                    >
                        <AntDesign name={"left"} size={20} color="#FFFAFA" />
                    </Pressable>
                ),
            }}
        </>
    );
}

const styles = StyleSheet.create({
    headertitle: {
    marginRight: 20,
    },
});


export default HeaderOption;