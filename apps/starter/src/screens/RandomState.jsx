import { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";

const RandomState = () => {
    const possibleColors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "violet",
    ];
    const [colors, setColors] = useState([]);

    const addColor = () => {
        const color =
            possibleColors[Math.floor(Math.random() * possibleColors.length)];
        setColors([...colors, { color, key: colors.length }]);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={addColor} style={styles.headerWrapper}>
                <Text style={styles.header}>Add item</Text>
            </TouchableOpacity>
            <View>
                <FlatList
                    data={colors}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <Text style={{ ...styles.text, color: item.color }}>
                            Hello World!
                        </Text>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 25,
        gap: 20,
    },
    headerWrapper: {
        backgroundColor: "black",
        padding: 15,
        borderRadius: "30%",
    },
    header: {
        color: "white",
        fontSize: 35,
    },
    text: {
        fontSize: 20,
    },
});

export default RandomState;
