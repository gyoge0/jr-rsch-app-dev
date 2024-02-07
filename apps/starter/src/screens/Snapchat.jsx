import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Snapchat = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxOne}></View>
            <View style={styles.boxTwo}>
                <Text style={styles.text}>Log in</Text>
            </View>
            <View style={styles.boxThree}>
                <Text style={styles.text}>Sign Up</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: "10%",
        backgroundColor: "white",
        fontFamily: "Avenir",
        textAlign: "center",

        flex: 1,
    },
    boxOne: {
        backgroundColor: "#fffc00",

        flexGrow: 1,
    },
    boxTwo: {
        backgroundColor: "#ff0049",
        justifyContent: "center",

        minHeight: 50,
    },
    boxThree: {
        backgroundColor: "#0faafc",
        justifyContent: "center",

        minHeight: 50,
    },
    text: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
        fontFamily: "Avenir",
    },
});

export default Snapchat;
