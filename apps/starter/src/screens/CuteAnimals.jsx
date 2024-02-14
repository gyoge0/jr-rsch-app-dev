// noinspection HttpUrlsUsage
/* eslint-disable no-unused-vars */

import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const CuteAnimals = ({ navigation }) => {
    const messageStr = "Kitty cat";

    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Modify Counter")}
            >
                <Text style={styles.titleText}>Cute Animals</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: "http://d23dyxeqlo5psv.cloudfront.net/cat.gif",
                    }}
                />
                <Text style={styles.captionText}> {messageStr} </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    titleText: {
        backgroundColor: "honeydew",
        fontSize: 40,
        color: "indigo",
        // monospace is not a system font?
        fontFamily: "Courier New",
        textAlign: "center",
    },
    captionText: {
        backgroundColor: "#7d7d7d",
        color: "#000000",
        fontSize: 35,
        fontWeight: "bold",
    },
    image: {
        height: 300,
        width: 400,
    },
});

export default CuteAnimals;
